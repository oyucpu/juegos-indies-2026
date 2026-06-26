// Variables del estado global de la APP
let cur = 0, ans = [], lastScores = {}, activeFilter = 'all';

// ── Constantes que antes se recreaban en cada llamada ──
const ROMAN_NUMS = ['I','II','III','IV','V','VI','VII','VIII','IX','X',
                     'XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX'];
const FILTERS = ['all', 'summer', 'horror', 'cozy', 'strategy', 'rpg', 'cyberpunk'];
const FILTER_CLASS = {
  horror: 'f-horror', summer: 'f-summer', cozy: 'f-cozy',
  strategy: 'f-strategy', rpg: 'f-rpg', cyberpunk: 'f-cyberpunk'
};

// ── Índice de claves de GAME_TAGS en minúsculas, calculado una sola vez ──
// Evita el Object.keys(...).find(...) (O(n)) que antes se ejecutaba por
// cada juego de cada pregunta respondida dentro de computeScores().
const GAME_KEY_INDEX = (() => {
  const idx = new Map();
  Object.keys(GAME_TAGS).forEach(k => idx.set(k.toLowerCase(), k));
  return idx;
})();

function resolveGameKey(g) {
  return GAME_KEY_INDEX.get(g.toLowerCase()) || g;
}

// ── Caché de elementos del DOM usados con frecuencia ──
const DOM = {
  qlabel: document.getElementById('qlabel'),
  qtext: document.getElementById('qtext'),
  opts: document.getElementById('opts'),
  prog: document.getElementById('prog'),
  qcount: document.getElementById('qcount'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  quizSection: document.getElementById('quiz-section'),
  resultsSection: document.getElementById('results-section'),
  resSub: document.getElementById('res-sub'),
  gameList: document.getElementById('game-list'),
  loadMoreWrap: document.getElementById('load-more-wrap'),
  endMessage: document.getElementById('end-message'),
  loadMoreBtn: document.getElementById('load-more-btn'),
  lmCount: document.getElementById('lm-count'),
};

// Función auxiliar para extraer etiquetas colectivas asociadas a los juegos de una opción sin repetirse
function getOptionTags(gamesList) {
  const tagsSet = new Set();
  gamesList.forEach(g => {
    getTag(g).forEach(t => tagsSet.add(t));
  });
  return Array.from(tagsSet);
}

// ==========================================
// 3. RENDERIZADO DINÁMICO DEL TEST (PREGUNTAS)
// ==========================================
function render() {
  const q = Q[cur];

  DOM.qlabel.textContent = '';
  DOM.qlabel.appendChild(document.createTextNode(`${q.e}  Pregunta `));
  const b = document.createElement('b');
  b.textContent = cur + 1;
  DOM.qlabel.appendChild(b);
  DOM.qlabel.appendChild(document.createTextNode(` de ${Q.length}`));
  DOM.qtext.textContent = q.t;

  const opts = DOM.opts;
  opts.innerHTML = '';

  const frag = document.createDocumentFragment();

  q.o.forEach((opt, i) => {
    const optTags = getOptionTags(opt.g);
    const hasHorror = optTags.includes('horror');
    const sel = ans[cur] === i;

    const btn = document.createElement('button');
    btn.className = `opt${sel ? (hasHorror ? ' sel-horror' : ' sel') : ''}`;
    btn.setAttribute('type', 'button');

    btn.onclick = () => {
      ans[cur] = i;
      render();
    };

    const spanL = document.createElement('span');
    spanL.className = 'opt-l';
    spanL.textContent = opt.l;

    const spanT = document.createElement('span');
    spanT.textContent = opt.t;
    spanT.style.flex = '1';

    btn.appendChild(spanL);
    btn.appendChild(spanT);

    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'opt-tags';

    optTags.forEach(tag => {
      const cfg = TAG_CONFIG[tag];
      if (cfg) {
        const badge = document.createElement('span');
        badge.className = `gbadge ${cfg.class}`;
        badge.textContent = cfg.text;
        tagsContainer.appendChild(badge);
      }
    });

    btn.appendChild(tagsContainer);
    frag.appendChild(btn);
  });

  opts.appendChild(frag);

  DOM.prog.style.width = `${((cur + 1) / Q.length) * 100}%`;
  DOM.qcount.textContent = `${cur + 1} / ${Q.length}`;
  DOM.prevBtn.disabled = cur === 0;

  DOM.nextBtn.disabled = ans[cur] == null;
  DOM.nextBtn.textContent = cur === Q.length - 1 ? 'Ver mi destino ☠' : 'Continuar →';
}

function nav(dir) {
  if (dir === 1 && cur === Q.length - 1) { showResults(); return; }
  cur = Math.max(0, Math.min(Q.length - 1, cur + dir));
  render();
}

// ==========================================
// 4. SISTEMA DE COINCIDENCIAS Y RESULTADOS
// ==========================================

// Calculado una sola vez: índice de la pregunta de idioma (antes se buscaba
// con Q.findIndex en cada llamada a computeScores).
const LANGUAGE_QUESTION_INDEX = Q.findIndex(q => q.e === "🌐");

function computeScores() {
  const s = {};

  // 1. ¿El usuario eligió "100% Español" en la pregunta de idioma? (Opción C = índice 2)
  const blocksEnglish = LANGUAGE_QUESTION_INDEX !== -1 && ans[LANGUAGE_QUESTION_INDEX] === 2;

  Q.forEach((q, i) => {
    const chosen = ans[i];
    if (chosen == null || !q.o[chosen]) return;

    q.o[chosen].g.forEach(g => {
      // Resolución O(1) de la clave exacta gracias al índice precalculado
      const finalKey = resolveGameKey(g);

      // 2. Si el usuario bloqueó el inglés y el juego es "only-english", se ignora
      const tags = GAME_TAGS[finalKey];
      if (!tags) return; // juego sin tags conocidos, no debería contar
      if (blocksEnglish && tags.includes("only-english")) return;

      s[finalKey] = (s[finalKey] || 0) + 1;
    });
  });

  return s;
}

function weightedRandom(scores) {
  const entries = Object.entries(scores);
  if (!entries.length) return [];

  // Aplica ruido para mezclar ligeramente los empates de puntuación
  return entries
    .map(([game, score]) => ({
      game,
      scoreReal: score,
      sortScore: score + (Math.random() * 0.4 - 0.2),
    }))
    .sort((a, b) => b.sortScore - a.sortScore);
}

// ── Estado de paginación ──
const PAGE_SIZE = 30;
let allRanked  = [];   // lista completa ordenada (para el filtro activo)
let shownCount = 0;    // cuántas tarjetas hay pintadas ahora mismo

function showResults() {
  DOM.quizSection.style.display = 'none';
  DOM.resultsSection.style.display = 'block';
  lastScores = computeScores();

  let totalHorror = 0, totalSummer = 0;
  Object.entries(lastScores).forEach(([g, scr]) => {
    const t = getTag(g);
    if (t.includes('horror')) totalHorror += scr;
    if (t.includes('summer')) totalSummer += scr;
  });

  DOM.resSub.textContent = totalHorror > totalSummer
    ? "Tus respuestas resuenan con la frialdad del metal, el aislamiento y los susurros en la oscuridad. Las sombras han tejido esta selección para ti:"
    : "Buscas los rayos del sol, viajes nostálgicos y mundos que te abracen en tardes infinitas. El oráculo ha despejado los cielos para mostrarte tu rumbo:";

  renderGameList();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderGameList() {
  // Reconstruye la lista completa según el filtro activo
  const full = weightedRandom(lastScores);
  allRanked = activeFilter === 'all'
    ? full
    : full.filter(({ game }) => getTag(game).includes(activeFilter));

  shownCount = 0;
  const list = DOM.gameList;
  list.innerHTML = '';

  if (!allRanked.length) {
    const m = document.createElement('div');
    m.style.cssText = 'text-align:center;padding:2rem;color:var(--text3);font-family:Special Elite,cursive;font-size:13px;letter-spacing:1px;';
    m.textContent = activeFilter === 'all'
      ? 'Las sombras no encuentran nada aquí... empieza de cero.'
      : 'Las sombras no encuentran coincidencias con este filtro en tu destino actual...';
    list.appendChild(m);
    DOM.loadMoreWrap.style.display = 'none';
    DOM.endMessage.style.display = 'none';
    return;
  }

  appendCards(PAGE_SIZE);
}

function appendCards(howMany) {
  const list = DOM.gameList;

  // reduce en lugar de Math.max(...array) — evita desbordar la pila con listas grandes
  const mx = allRanked.reduce((max, r) => Math.max(max, r.scoreReal), 0);

  const slice = allRanked.slice(shownCount, shownCount + howMany);
  const globalOffset = shownCount; // rank absoluto antes de añadir este bloque
  const frag = document.createDocumentFragment();

  slice.forEach(({ game, scoreReal }, i) => {
    const rank = globalOffset + i;
    const tags = getTag(game);
    const isHorror = tags.includes('horror');
    const pct = mx > 0 ? Math.round((scoreReal / mx) * 100) : 0;

    const card = document.createElement('div');
    card.className = `gcard${isHorror ? ' horror-card' : ''}`;
    card.style.animationDelay = `${i * 0.03}s`;

    const rankDiv = document.createElement('div');
    rankDiv.className = `grank${rank === 0 ? ' grank-1' : rank === 1 ? ' grank-2' : rank === 2 ? ' grank-3' : ''}`;
    rankDiv.textContent = rank < ROMAN_NUMS.length ? ROMAN_NUMS[rank] : rank + 1;

    const infoDiv = document.createElement('div');
    infoDiv.className = 'ginfo';

    const title = document.createElement('div');
    title.className = 'gtitle';
    title.textContent = game;

    const meta = document.createElement('div');
    meta.className = 'gmeta';

    const sc = document.createElement('span');
    sc.className = 'gscore';
    sc.textContent = `${scoreReal} ${scoreReal === 1 ? 'coincidencia' : 'coincidencias'}`;
    meta.appendChild(sc);

    tags.forEach(tag => {
      const cfg = TAG_CONFIG[tag];
      if (cfg) {
        const badge = document.createElement('span');
        badge.className = `gbadge ${cfg.class}`;
        badge.textContent = cfg.text;
        meta.appendChild(badge);
      }
    });

    infoDiv.appendChild(title);
    infoDiv.appendChild(meta);

    const bw = document.createElement('div');
    bw.className = 'gbar-wrap';
    const bar = document.createElement('div');
    bar.className = `gbar ${isHorror ? 'gbar-horror' : 'gbar-normal'}`;
    bar.style.width = `${pct}%`;
    bw.appendChild(bar);

    card.appendChild(rankDiv);
    card.appendChild(infoDiv);
    card.appendChild(bw);
    frag.appendChild(card);
  });

  list.appendChild(frag);

  shownCount += slice.length;
  updatePaginationUI();
}

function updatePaginationUI() {
  const remaining = allRanked.length - shownCount;

  if (remaining > 0) {
    const next = Math.min(remaining, PAGE_SIZE);
    DOM.lmCount.textContent = `(${shownCount} de ${allRanked.length} — ${next} más)`;
    DOM.loadMoreWrap.style.display = 'block';
    DOM.endMessage.style.display = 'none';
  } else {
    DOM.loadMoreWrap.style.display = 'none';
    DOM.endMessage.style.display = shownCount > PAGE_SIZE ? 'block' : 'none';
  }
}

function loadMore() {
  const btn = DOM.loadMoreBtn;
  btn.disabled = true;
  const list = DOM.gameList;
  const prevCount = shownCount;
  list.style.opacity = '0.7';

  setTimeout(() => {
    appendCards(PAGE_SIZE);
    list.style.opacity = '1';
    btn.disabled = false;
    // Scroll suave hasta la primera tarjeta nueva
    const cards = list.querySelectorAll('.gcard');
    if (cards[prevCount]) cards[prevCount].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 220);
}

function filterResults(f) {
  activeFilter = f;
  updateFilterBtns();
  renderGameList();
}

function updateFilterBtns() {
  FILTERS.forEach(f => {
    const btn = document.getElementById(`filter-${f}`);
    if (!btn) return;
    btn.className = 'filter-btn';
    if (f === activeFilter) {
      btn.classList.add(FILTER_CLASS[f] || 'active');
    }
  });
}

function rerollResults() {
  DOM.gameList.style.opacity = '0.3';
  setTimeout(() => {
    renderGameList();
    DOM.gameList.style.opacity = '1';
  }, 300);
}

function restart() {
  cur = 0;
  ans = new Array(Q.length).fill(null);
  activeFilter = 'all';
  allRanked = [];
  shownCount = 0;
  DOM.loadMoreWrap.style.display = 'none';
  DOM.endMessage.style.display = 'none';
  DOM.quizSection.style.display = 'block';
  DOM.resultsSection.style.display = 'none';
  render();
}

// Iniciar aplicación al cargar
render();
