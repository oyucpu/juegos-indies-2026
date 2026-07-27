// ==========================================
// 1. BASE DE DATOS UNIFICADA DE JUEGOS (GAME_TAGS)
// ==========================================
const GAME_TAGS = {
  // --- # ---


  // --- A ---
"Abzû": [
  "aventura",
  "exploracion",
  "relajante",
  "indie",
  "3D",
  "singleplayer",
  "artistico",
  "atmosferico",
  "narrativo",
  "simulacion",
  "naturaleza",
  "submarino",
  "sin-combate"
],
 

  // --- B ---
  "Bread & Fred": [
  "plataformas",
  "cooperativo",
  "aventura",
  "indie",
  "2D",
  "precision-platformer",
  "singleplayer",
  "multiplayer",
  "puzles",
  "dificil",
  "fisicas",
  "casual"
],

  // --- C ---
"Children of Silentown": [
  "aventura",
  "point-and-click",
  "puzles",
  "indie",
  "2D",
  "singleplayer",
  "narrativo",
  "misterio",
  "terror-atmosferico",
  "fantasia-oscura",
  "exploracion",
  "emocional",
  "dibujado-a-mano"
],  
  
  "Citizen Sleeper": [
  "rpg",
  "aventura-narrativa",
  "visual-novel",
  "ciencia-ficcion",
  "rol-mesa",
  "gestion-recursos",
  "decision",
  "exploracion",
  "indie",
  "singleplayer",
  "cyberpunk",
  "distopia",
  "narrativo"
],
  
  // --- D ---
  "Death's Door": [
  "accion",
  "aventura",
  "rpg",
  "soulslike",
  "exploracion",
  "mazmorras",
  "puzles",
  "indie",
  "singleplayer",
  "fantasia-oscura",
  "combate",
  "jefes",
  "isometrico",
  "metroidvania-ligero"
],

  // --- E ---
  
  
  // --- F ---
  

  // --- G ---
"GRIS": [
  "aventura",
  "plataformas",
  "puzles",
  "indie",
  "2D",
  "singleplayer",
  "exploracion",
  "narrativo",
  "artistico",
  "emocional",
  "atmosferico",
  "metroidvania-ligero",
  "sin-combate"
] ,

  // --- H ---
  "Hue": [
  "puzles",
  "plataformas",
  "aventura",
  "indie",
  "2D",
  "singleplayer",
  "exploracion",
  "logica",
  "metroidvania",
  "narrativo",
  "casual",
  "colores"
],

  // --- I ---
  

  // --- J ---
  

  // --- K ---
  "Killer Frequency": [
  "terror",
  "misterio",
  "aventura",
  "narrativo",
  "puzles",
  "decision",
  "exploracion",
  "singleplayer",
  "indie",
  "suspense"
],
  
  // --- L ---
  

  // --- M ---
  "Mørkredd": [
  "puzles",
  "cooperativo",
  "aventura",
  "indie",
  "3D",
  "singleplayer",
  "multiplayer",
  "logica",
  "fisicas",
  "oscuridad",
  "atmosferico",
  "survival",
  "sin-combate"
],

  // --- N ---
  

  // --- O ---
  

  // --- P ---
  

  // --- R ---
"Röki": ["aventura", "puzles", "exploracion", "historia","narrativo","mitologia-nordica","singleplayer","indie","point-and-click","fantasia"],

  
  // --- S ---
  "Seasons after Fall": [
  "aventura",
  "puzles",
  "plataformas",
  "exploracion",
  "indie",
  "2D",
  "singleplayer",
  "metroidvania",
  "narrativo",
  "fantasia",
  "naturaleza",
  "atmosferico"
],

"Shady Part of Me": [
  "puzles",
  "plataformas",
  "aventura",
  "indie",
  "2D",
  "3D",
  "singleplayer",
  "narrativo",
  "psicologico",
  "atmosferico",
  "logica",
  "cooperativo-consigo-mismo"
],

"Silt": [
  "aventura",
  "puzles",
  "plataformas",
  "indie",
  "2D",
  "singleplayer",
  "exploracion",
  "atmosferico",
  "terror",
  "surrealista",
  "narrativo",
  "metroidvania-ligero",
  "sin-combate"
],

  // --- T ---
"The Last Campfire": [
  "aventura",
  "puzles",
  "exploracion",
  "indie",
  "3D",
  "isometrico",
  "singleplayer",
  "narrativo",
  "emocional",
  "fantasia",
  "atmosferico",
  "relajante",
  "sin-combate"
],  
  
  "Timelie": [
  "puzles",
  "sigilo",
  "estrategia",
  "aventura",
  "indie",
  "isometrico",
  "singleplayer",
  "ciencia-ficcion",
  "viaje-en-el-tiempo",
  "logica",
  "sigilo-tactico",
  "narrativo"
],


  // --- U ---
"UnMetal": [
  "accion",
  "sigilo",
  "aventura",
  "humor",
  "indie",
  "2D",
  "vista-cenital",
  "singleplayer",
  "infiltracion",
  "puzles",
  "narrativo",
  "parodia",
  "pixelart"
],

  // --- V ---


  // --- W ---
"White Night": [
  "terror",
  "survival-horror",
  "aventura",
  "puzles",
  "exploracion",
  "indie",
  "singleplayer",
  "noir",
  "2D",
  "isometrico",
  "atmosferico",
  "misterio",
  "narrativo",
  "gore"
],  
  
"Withering Rooms": [
  "terror",
  "survival",
  "accion",
  "rpg",
  "exploracion",
  "metroidvania",
  "soulslike",
  "roguelite",
  "singleplayer",
  "gore"
],

  // --- X ---


  // --- Y ---
  
  // --- Z ---
"Ziggurat": [
  "accion",
  "fps",
  "roguelite",
  "mazmorras",
  "fantasia",
  "rpg",
  "singleplayer",
  "exploracion",
  "combate",
  "magia",
  "procedural",
  "dificil",
  "indie"
],

};

// Configuración visual centralizada de etiquetas de juegos
const TAG_CONFIG = {
  'terror':       { text: '☠ terror',              class: 'gbadge-horror' },
  'survival':     { text: '🔥 supervivencia',       class: 'gbadge-horror' },
  'accion':       { text: '⚔️ acción',              class: 'gbadge-summer' },
  'rpg':          { text: '📜 rol',                 class: 'gbadge-rpg' },
  'soulslike':    { text: '💀 soulslike',           class: 'gbadge-horror' },
  'roguelite':    { text: '🔁 roguelite',           class: 'gbadge-strategy' },

  'aventura':     { text: '🌄 aventura',            class: 'gbadge-summer' },
  'exploracion':  { text: '🗺 exploración',         class: 'gbadge-summer' },
  'puzles':       { text: '🧩 puzles',              class: 'gbadge-cozy' },
  'plataformas':  { text: '🏃 plataformas',         class: 'gbadge-summer' },
  'metroidvania': { text: '🗝 metroidvania',         class: 'gbadge-strategy' },

  'narrativo':    { text: '📖 narrativo',            class: 'gbadge-cozy' },
  'historia':     { text: '📚 historia',             class: 'gbadge-rpg' },
  'decision':     { text: '⚖️ decisiones',           class: 'gbadge-rpg' },
  'misterio':     { text: '🔍 misterio',             class: 'gbadge-rpg' },
  'suspense':     { text: '😨 suspense',             class: 'gbadge-horror' },

  'fantasia':     { text: '✨ fantasía',             class: 'gbadge-rpg' },
  'fantasia-oscura': { text: '🌑 fantasía oscura',   class: 'gbadge-horror' },
  'mitologia':    { text: '🐺 mitología',            class: 'gbadge-rpg' },
  'ciencia-ficcion': { text: '🚀 ciencia ficción',   class: 'gbadge-cyberpunk' },
  'cyberpunk':    { text: '🧬 cyberpunk',            class: 'gbadge-cyberpunk' },

  'singleplayer': { text: '👤 un jugador',           class: 'gbadge-cozy' },
  'cooperativo':  { text: '🤝 cooperativo',          class: 'gbadge-cozy' },
  'indie':        { text: '🎮 indie',                class: 'gbadge-cozy' },

  '2D':           { text: '🖼 2D',                   class: 'gbadge-rpg' },
  '3D':           { text: '🌐 3D',                   class: 'gbadge-rpg' },
  'isometrico':   { text: '📐 isométrico',            class: 'gbadge-strategy' },
  'pixelart':     { text: '👾 pixel art',             class: 'gbadge-rpg' },

  'artistico':    { text: '🎨 artístico',            class: 'gbadge-cozy' },
  'atmosferico': { text: '🌫 atmosférico',           class: 'gbadge-horror' },
  'emocional':   { text: '💙 emocional',             class: 'gbadge-cozy' },
  'psicologico': { text: '🧠 psicológico',            class: 'gbadge-horror' },

  'sigilo':      { text: '🤫 sigilo',                class: 'gbadge-horror' },
  'estrategia':  { text: '⚙️ estrategia',            class: 'gbadge-strategy' },
  'gestion':     { text: '📊 gestión',               class: 'gbadge-strategy' },
  'simulacion':  { text: '🎲 simulación',            class: 'gbadge-cozy' },

  'relajante':   { text: '😌 relajante',             class: 'gbadge-cozy' },
  'humor':       { text: '😂 humor',                 class: 'gbadge-summer' },
  'retro':       { text: '👾 retro',                 class: 'gbadge-rpg' },
  'dificil':     { text: '💢 difícil',               class: 'gbadge-horror' },

  'gore':        { text: '🩸 gore',                  class: 'gbadge-horror' },
  'noir':        { text: '🕵️ noir',                  class: 'gbadge-horror' },
  'musical':     { text: '🎵 musical',               class: 'gbadge-cozy' },
  'colores':     { text: '🌈 colores',               class: 'gbadge-cozy' },
  'luz-oscuridad': { text: '💡 luz y sombras',       class: 'gbadge-horror' },

  'point-and-click': { text: '🖱 point & click',     class: 'gbadge-rpg' },
  'visual-novel':    { text: '📚 novela visual',     class: 'gbadge-rpg' },
  'rol-mesa':        { text: '🎲 rol de mesa',       class: 'gbadge-rpg' },

  'naturaleza':      { text: '🌿 naturaleza',         class: 'gbadge-cozy' },
  'submarino':       { text: '🌊 submarino',          class: 'gbadge-cozy' },
  'sin-combate':     { text: '🕊 sin combate',        class: 'gbadge-cozy' },
  'precision-platformer': { text: '🎯 precision platformer', class: 'gbadge-summer' },
  'multiplayer':     { text: '👥 multijugador',       class: 'gbadge-cozy' },
  'fisicas':         { text: '🌀 físicas',            class: 'gbadge-strategy' },
  'casual':          { text: '🍃 casual',             class: 'gbadge-cozy' },
  'terror-atmosferico': { text: '👻 terror atmosférico', class: 'gbadge-horror' },
  'dibujado-a-mano': { text: '✏️ dibujado a mano',    class: 'gbadge-cozy' },
  'aventura-narrativa': { text: '📗 aventura narrativa', class: 'gbadge-summer' },
  'gestion-recursos': { text: '📦 gestión de recursos', class: 'gbadge-strategy' },
  'distopia':        { text: '🏭 distopía',           class: 'gbadge-cyberpunk' },
  'mazmorras':       { text: '🏚 mazmorras',          class: 'gbadge-rpg' },
  'combate':         { text: '🗡 combate',            class: 'gbadge-summer' },
  'jefes':           { text: '👹 jefes',              class: 'gbadge-horror' },
  'metroidvania-ligero': { text: '🗝️ metroidvania ligero', class: 'gbadge-strategy' },
  'logica':          { text: '🧮 lógica',             class: 'gbadge-strategy' },
  'oscuridad':       { text: '🌑 oscuridad',          class: 'gbadge-horror' },
  'mitologia-nordica': { text: '🐺 mitología nórdica', class: 'gbadge-rpg' },
  'cooperativo-consigo-mismo': { text: '🪞 coop. consigo mismo', class: 'gbadge-cozy' },
  'surrealista':     { text: '🌀 surrealista',        class: 'gbadge-horror' },
  'viaje-en-el-tiempo': { text: '⏳ viaje en el tiempo', class: 'gbadge-cyberpunk' },
  'sigilo-tactico':  { text: '🥷 sigilo táctico',     class: 'gbadge-horror' },
  'vista-cenital':   { text: '🔝 vista cenital',      class: 'gbadge-strategy' },
  'infiltracion':    { text: '🕶 infiltración',       class: 'gbadge-horror' },
  'parodia':         { text: '🤡 parodia',            class: 'gbadge-summer' },
  'survival-horror': { text: '🧟 survival horror',    class: 'gbadge-horror' },
  'fps':             { text: '🎯 fps',                class: 'gbadge-summer' },
  'magia':           { text: '🪄 magia',              class: 'gbadge-rpg' },
  'procedural':      { text: '🧬 procedural',         class: 'gbadge-strategy' }
};

// Función única y global para extraer tags de un juego
function getTag(g) { 
  return GAME_TAGS[g] || ["summer"]; 
}

// ==========================================
// 2. BANCO DE PREGUNTAS (Q)
// ==========================================
const Q = [
  { e:"☀️", t:"1. ¿Qué tipo de experiencia buscas?", o:[
    {l:"A",t:"⚔️ Acción y combate",g:["Röki","Hue", "Timelie", "The Last Campfire", "Mørkredd"]},
    {l:"B",t:"🧩 Resolver puzles",g:["Withering Rooms", "Death's Door", "Ziggurat"]},
    {l:"C",t:"📖 Historia y narrativa",g:["Citizen Sleeper", "GRIS", "Röki", "Children of Silentown"]},
    {l:"D",t:"🌍 Explorar mundos",g:["Abzû", "Silt", "Seasons after Fall"]},
  ]},
  { e:"🏖️", t:"2. ¿Qué ambiente prefieres?", o:[
    {l:"A",t:"🌈 Colorido y relajante",g:["Abzû", "GRIS", "The Last Campfire"]},
    {l:"B",t:"🌑 Oscuro y misterioso",g:["White Night","Silt","Withering Rooms", "Children of Silentown"]},
    {l:"C",t:"🌲 Fantasía y naturaleza",g:["Röki", "Seasons after Fall", "Death's Door"]},
    {l:"D",t:"🚀 Ciencia ficción",g:["Citizen Sleeper", "Timelie"]},
  ]},
  { e:"🎮", t:"3. ¿Quieres jugar solo o acompañado?", o:[
    {l:"A",t:"👤 Solo",g:[
  "Röki",
  "Killer Frequency",
  "Withering Rooms",
  "Hue",
  "Seasons after Fall",
  "Citizen Sleeper",
  "Timelie",
  "GRIS",
  "Ziggurat",
  "Shady Part of Me",
  "UnMetal",
  "Silt",
  "Abzû",
  "The Last Campfire",
  "Death's Door",
  "White Night",
  "Children of Silentown"
]},
    {l:"B",t:"🤝 Cooperativo",g:["Bread & Fred", "Mørkredd"]},
  ]},
  { e:"📖", t:"4. ¿Qué ritmo de juego prefieres?", o:[
    {l:"A",t:"🧘 Tranquilo y relajante",g:["Abzû", "GRIS", "The Last Campfire"]},
    {l:"B",t:"🧠 Pensar y resolver problemas",g:["Hue", "Timelie", "Mørkredd"]},
    {l:"C",t:"⚔️ Acción intensa",g:["Death's Door", "Ziggurat", "Withering Rooms"]},
    {l:"D",t:"😱 Terror y tensión",g:["White Night", "Silt", "Withering Rooms", "Killer Frequency"]},
  ]},
    { e:"🎮", t:"5. ¿Qué estilo visual te atrae más?", o:[
    {l:"A",t:"🎨 Artístico / dibujado a mano",g:["GRIS", "Abzû", "Seasons after Fall"]},
    {l:"B",t:"🖤 Oscuro / sombrío",g:["White Night", "Silt", "Children of Silentown"]},
    {l:"C",t:"🧊 Minimalista",g:["Hue", "Mørkredd"]},
    {l:"D",t:"🏰 Fantasía",g:["Röki", "Death's Door"]},
  ]},
  { e:"📖", t:"6. ¿Qué tipo de historia quieres?", o:[
    {l:"A",t:"💭 Emocional y reflexiva",g:["GRIS", "The Last Campfire", "Abzû"]},
    {l:"B",t:"🔎 Misterio y descubrir secretos",g:["Killer Frequency", "White Night", "Children of Silentown"]},
    {l:"C",t:"😂 Humor y diversión",g:["UnMetal"]},
    {l:"D",t:"🌌 Mundo fantástico",g:["Röki", "Death's Door"]},
  ]},
];