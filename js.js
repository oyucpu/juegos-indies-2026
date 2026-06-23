// ==========================================
// 1. BASE DE DATOS UNIFICADA DE JUEGOS (GAME_TAGS)
// ==========================================
const GAME_TAGS = {
  // --- TERROR ---
  "Tormented Souls": ["horror", "puzzle", "pixelart", "survival", "retro"],
  "Crow Country": ["horror", "puzzle", "pixelart", "retro", "misterio"],
  "Faith: The Unholy Trinity": ["horror", "pixelart", "retro", "misterio", "atmosfera"],
  "Amnesia: The Bunker": ["horror", "summer", "survival", "misterio", "tenso"],
  "Phasmophobia": ["horror", "cooperativo", "misterio", "tenso", "multijugador"],
  "Iron Lung": ["horror", "sci-fi", "submarino", "tenso", "atmosfera"],
  "My House.wad": ["horror", "misterio", "retro", "pixelart", "atmosfera"],
  "Dredge": ["horror", "summer", "cozy", "pesca", "misterio"],
  "Omori": ["horror", "cozy", "rpg", "pixelart", "narrativo"],
  "Norco": ["horror", "narrativo", "aventura", "misterio", "atmosfera"],
  "Disco Elysium": ["horror", "summer", "rpg", "narrativo", "detectivesco"],
  "Return of the Obra Dinn": ["horror", "puzzle", "misterio", "narrativo", "atmosfera"],
  "Beacon Pines": ["horror", "cozy", "narrativo", "aventura", "puzzle"],
  "Signalis": ["horror", "sci-fi", "misterio", "pixelart", "atmosfera"],
  "The Long Dark": ["horror", "summer", "survival", "exploracion", "atmosfera"],
  "Spiritfarer": ["horror", "cozy", "summer", "narrativo", "gestion"],
  "Grave Seasons": ["horror", "cozy", "summer", "simulacion", "only-english"],
  "Mina the Hollower": ["horror", "summer", "accion", "retro", "pixelart"],
  "Blighted": ["horror", "summer", "accion", "roguelite", "pixelart"],
  "Vagante": ["horror", "roguelite", "plataformas", "pixelart", "dificil"],
  "Lethal Company": ["horror", "cooperativo", "multijugador", "tenso", "humor"],
  "Doki Doki Literature Club": ["horror", "cozy", "narrativo", "visual-novel", "pixelart"],
  "Inscryption": ["horror", "strategy", "cartas", "misterio", "puzzle"],
  "Darkwood": ["horror", "survival", "atmosfera", "tenso", "pixelart"],
  "Little Nightmares II": ["horror", "plataformas", "atmosfera", "narrativo", "puzzle"],
  "SOMA": ["horror", "sci-fi", "narrativo", "misterio", "atmosfera"],
  "Subnautica": ["horror", "summer", "survival", "exploracion", "sci-fi"],
  "Salt and Sanctuary": ["horror", "soulslike", "plataformas", "dificil", "pixelart"],
  "Curse of the Dead Gods": ["horror", "roguelite", "accion", "dificil", "pixelart"],
  "GRIME": ["horror", "soulslike", "accion", "exploracion", "atmosfera"],
  "Blasphemous": ["horror", "soulslike", "pixelart", "plataformas", "dificil"],
  "Buckshot Roulette": ["horror", "puzzle", "tenso", "misterio", "corto"],
  "Gloomwood": ["horror", "sigilo", "accion", "atmosfera", "retro"],
  "Dusk": ["horror", "summer", "accion", "retro", "shooter"],
  "Selaco": ["horror", "summer", "accion", "shooter", "retro"],
  "Pathologic 2": ["horror", "rpg", "survival", "narrativo", "atmosfera"],
  "Anemoiapolis": ["horror", "puzzle", "liminal", "exploracion", "atmosfera"],
  "Slay the Princess": ["horror", "rpg", "narrativo", "visual-novel", "misterio"],
  "Underchoice": ["horror", "misterio", "narrativo", "aventura", "pixelart"],
  "Sister Ray": ["narrativo", "aventura", "misterio", "atmosfera", "indie"],
  "Remorses": ["horror", "psicologico", "misterio", "atmosfera", "tenso"],
  "Slots & Diapers": ["humor", "simulacion", "gestion", "indie", "casual"],
  "Gombo": ["aventura", "accion", "plataformas", "indie", "humor"],
  "The 7th Guest Remake": ["horror", "puzzle", "misterio", "retro", "atmosfera"],
  "Swan Song": ["narrativo", "aventura", "misterio", "atmosfera", "emocional"],
  "House Flipper Remastered Collection": ["simulacion", "gestion", "construccion", "cozy", "relajante"],
  "Alruna: End Of History": ["rpg", "pixelart", "aventura", "fantasia", "narrativo"],
  "Gothic 1 Remake": ["rpg", "fantasia", "exploracion", "accion", "aventura"],
  "Witch's Apocalyptic Journey": ["rpg", "aventura", "fantasia", "narrativo", "exploracion"],
  "Cursemark": ["horror", "accion", "soulslike", "fantasia", "oscuro"],
  "Ogre Chamber 2222": ["sci-fi", "horror", "puzzle", "misterio", "atmosfera"],
  "Crushed in Time": ["sci-fi", "accion", "aventura", "plataformas", "pixelart"],
  "Witchspire": ["accion", "fantasia", "roguelite", "pixelart", "dificil"],
  "Interdimensional Vending Machine": ["cozy", "simulacion", "gestion", "sci-fi", "humor"],
  "Beastro": ["cozy", "gestion", "simulacion", "fantasia", "multijugador"],
  "Don't Let It Starve": ["survival", "gestion", "horror", "cooperativo", "indie"],
  "Xanthiom 2": ["accion", "metroidvania", "pixelart", "sci-fi", "exploracion"],
  "Gastova: The Witches of Arkana": ["rpg", "fantasia", "aventura", "narrativo", "exploracion"],
  "Denshattack!": ["accion", "arcade", "retro", "pixelart", "indie"],
  "Shift At Midnight": ["horror", "misterio", "simulacion", "tenso", "atmosfera"],
  "The Adventures of Elliot: The Millenium Tales": ["rpg", "aventura", "fantasia", "narrativo", "exploracion"],
  "Mytich Love: Iberian Legends": ["visual-novel", "narrativo", "romance", "fantasia", "mitologia"],
  "Maseylia: Echoes of The Past": ["rpg", "aventura", "fantasia", "misterio", "narrativo"],
  "Dark Scrolls": ["rpg", "fantasia", "oscuro", "aventura", "exploracion"],
  "Idle Chapel": ["idle", "gestion", "simulacion", "cozy", "casual"],
  "Trashy Cashy": ["gestion", "simulacion", "humor", "casual", "indie"],
  "Type Or Die": ["puzzle", "educativo", "casual", "habilidad", "indie"],
  "Color Fear": ["horror", "psicologico", "puzzle", "atmosfera", "misterio"],
  "The Outbound Ghost": [  "rpg","aventura","narrativo",
  "cozy","misterio","exploracion","fantasia","emocional","indie","turnos"],

  // --- ESTRATEGIA Y GESTIÓN ---
  "Loop Hero": ["strategy", "horror", "summer", "roguelite", "cartas"],
  "Papers Please": ["strategy", "summer", "narrativo", "pixelart", "tenso"],
  "Barotrauma": ["horror", "strategy", "cooperativo", "survival", "submarino"],
  "Songs of Syx": ["strategy", "summer", "gestion", "construccion", "only-english"],
  "Manor Lords": ["strategy", "summer", "gestion", "construccion", "simulacion"],
  "Frostpunk 2": ["strategy", "horror", "gestion", "survival", "narrativo"],
  "Against the Storm": ["strategy", "horror", "roguelite", "gestion", "construccion"],
  "Cult of the Lamb": ["horror", "cozy", "strategy", "roguelite", "gestion"],
  "Factorio": ["strategy", "gestion", "construccion", "simulacion", "dificil"],
  "RimWorld": ["strategy", "horror", "gestion", "simulacion", "narrativo"],

  // --- ROL / NARRATIVO ---
  "Citizen Sleeper": ["rpg", "cyberpunk", "cozy", "narrativo", "sci-fi"],
  "Pentiment": ["rpg", "horror", "narrativo", "pixelart", "historico"],
  "1000xRESIST": ["horror", "rpg", "summer", "narrativo", "sci-fi"],
  "The Cosmic Wheel Sisterhood": ["rpg", "cozy", "narrativo", "misterio", "pixelart"],
  "Limbus Company": ["rpg", "horror", "narrativo", "accion", "pixelart"],
  "Arcadian Atlas": ["rpg", "strategy", "summer", "pixelart", "tactico"],
  "Cassette Beasts": ["rpg", "cozy", "summer", "pixelart", "exploracion"],

  // --- CYBERPUNK / SCI-FI ---
  "Ghostrunner 2": ["cyberpunk", "summer", "accion", "plataformas", "dificil"],
  "Katana ZERO": ["cyberpunk", "horror", "accion", "pixelart", "narrativo"],
  "Nine Sols": ["rpg", "cyberpunk", "horror", "soulslike", "accion"],
  "Mullet MadJack": ["cyberpunk", "summer", "accion", "shooter", "retro"],
  "Pacific Drive": ["horror", "sci-fi", "summer", "survival", "atmosfera"],
  "Stray": ["cyberpunk", "cozy", "exploracion", "narrativo", "atmosfera"],
  "Cloudpunk": ["cyberpunk", "summer", "narrativo", "pixelart", "atmosfera"],
  "Shadows of Doubt": ["cyberpunk", "horror", "misterio", "detectivesco", "simulacion"],

  // --- SOLO EN INGLÉS ---
  "Who's Lila?": ["horror", "puzzle", "misterio", "narrativo", "only-english"],
  "Ostranauts": ["strategy", "cyberpunk", "survival", "simulacion", "only-english"],
  "Caves of Qud": ["rpg", "sci-fi", "roguelite", "exploracion", "only-english"],
  "Milk inside a bag of milk": ["horror", "narrativo", "corto", "visual-novel", "only-english"],
  "Mainframe Industries": ["cyberpunk", "puzzle", "hacking", "sci-fi", "only-english"],
  "Hypnospace Outlaw": ["rpg", "narrativo", "misterio", "retro", "only-english"],
  "Aquaria": ["summer", "cozy", "metroidvania", "exploracion", "only-english"],

  // --- COZY, RELAX Y VERANO ---
  "Cloudheim": ["cozy", "summer", "rpg", "exploracion", "construccion"],
  "Pseudoregalia": ["summer", "puzzle", "plataformas", "exploracion", "pixelart"],
  "A Short Hike": ["summer", "cozy", "exploracion", "narrativo", "relajante"],
  "Stardew Valley": ["summer", "cozy", "simulacion", "gestion", "construccion"],
  "Hokko Life": ["summer", "cozy", "simulacion", "construccion", "relajante"],
  "Unpacking": ["summer", "cozy", "puzzle", "narrativo", "relajante"],
  "Coral Island": ["summer", "cozy", "simulacion", "rpg", "relajante"],
  "Cozy Grove": ["summer", "cozy", "simulacion", "narrativo", "relajante"],
  "Alba: A Wildlife Adventure": ["summer", "cozy", "exploracion", "narrativo", "relajante"],
  "Cloud Gardens": ["summer", "cozy", "puzzle", "relajante", "creativo"],
  "Journey": ["summer", "cozy", "exploracion", "atmosfera", "cooperativo"],
  "Flower": ["summer", "cozy", "relajante", "atmosfera", "artístico"],
  "Abzû": ["summer", "cozy", "exploracion", "atmosfera", "relajante"],
  "Moonlight Peaks": ["summer", "cozy", "simulacion", "rpg", "relajante"],
  "Tales of Seikyu": ["summer", "cozy", "simulacion", "rpg", "gestion"],
  "Woodo": ["summer", "cozy", "puzzle", "construccion", "relajante"],
  "Eastshade": ["summer", "cozy", "exploracion", "narrativo", "artístico"],
  "Dordogne": ["summer", "cozy", "narrativo", "aventura", "artístico"],
  "Outer Wilds": ["summer", "exploracion", "aventura", "misterio", "narrativo"],
  "Sable": ["summer", "exploracion", "aventura", "rpg", "atmosfera"],
  "Tchia": ["summer", "exploracion", "aventura", "cozy", "narrativo"],
  "Sailwind": ["summer", "simulacion", "exploracion", "relajante", "aventura"],
  "Tunic": ["summer", "puzzle", "exploracion", "soulslike", "misterio"],
  "Tails of Iron": ["summer", "accion", "rpg", "narrativo", "pixelart"],
  "Kena: Bridge of Spirits": ["summer", "accion", "aventura", "narrativo", "cozy"],
  "Weird West": ["summer", "rpg", "accion", "narrativo", "roguelite"],
  "Phoenotopia Awakening": ["summer", "rpg", "aventura", "plataformas", "pixelart"],
  "Moonlighter 2: The Endless Vault": ["summer", "rpg", "roguelite", "gestion", "accion"],
  "Outbound": ["summer", "cozy", "exploracion", "aventura", "cooperativo"],
  "Dave the Diver": ["summer", "cozy", "accion", "gestion", "aventura"],
  "Firewatch": ["summer", "narrativo", "exploracion", "misterio", "atmosfera"],
  "CrossCode": ["summer", "rpg", "accion", "puzzle", "pixelart"],
  "Sea of Stars": ["summer", "rpg", "pixelart", "narrativo", "aventura"],
  "TMNT: Shredder's Revenge": ["summer", "accion", "retro", "cooperativo", "plataformas"],
  "Sonic Mania": ["summer", "accion", "plataformas", "retro", "pixelart"],
  "Shovel Knight": ["summer", "accion", "plataformas", "retro", "pixelart"],
  "A Hat in Time": ["summer", "cozy", "plataformas", "aventura", "humor"],
  "Demon Turf": ["summer", "plataformas", "accion", "pixelart", "humor"],
  "Ratatan": ["summer", "accion", "rítmico", "cooperativo", "pixel"],
  "Neon White": ["summer", "accion", "plataformas", "rítmico", "speedrun"],
  "Ultrakill": ["summer", "accion", "shooter", "retro", "dificil"],
  "Art of Rally": ["summer", "simulacion", "relajante", "artístico", "cozy"],
  "Raft": ["summer", "survival", "construccion", "exploracion", "cooperativo"],
  "Sail Forth": ["summer", "exploración", "aventura", "relajante", "piratas"],
  "Windbound": ["summer", "survival", "exploracion", "aventura", "relajante"],
  "King of Seas": ["summer", "accion", "piratas", "aventura", "rpg"],
  "Moonglow Bay": ["summer", "cozy", "pesca", "narrativo", "rpg"],
  "Pine": ["summer", "rpg", "exploracion", "aventura", "sandbox"],
  "Chained Echoes": ["summer", "rpg", "pixelart", "narrativo", "aventura"],
  "Ara Fell": ["summer", "rpg", "narrativo", "pixelart", "aventura"],
  "Wytchwood": ["summer", "cozy", "aventura", "puzzle", "narrativo"],
  "TOEM": ["summer", "cozy", "puzzle", "fotografía", "narrativo"],
  "Littlewood": ["summer", "cozy", "simulacion", "gestion", "pixelart"],
  "Garden Story": ["summer", "cozy", "rpg", "aventura", "pixelart"],
  "What Remains of Edith Finch": ["summer", "cozy", "narrativo", "exploración", "atmosfera"],
  "Gris": ["summer", "cozy", "plataformas", "artístico", "narrativo"],
  "West of Loathing": ["summer", "rpg", "humor", "narrativo", "pixelart"],
  "Slay the Spire": ["summer", "strategy", "roguelite", "cartas", "dificil"],
  "Balatro": ["summer", "strategy", "cartas", "roguelite", "humor"],
  "Ori and the Will of the Wisps": ["summer", "cozy", "plataformas", "artístico", "aventura"],
  "Townscaper": ["summer", "cozy", "construccion", "relajante", "creativo"],
  "A Little to the Left": ["summer", "cozy", "puzzle", "relajante", "humor"],
  "Summerhouse": ["summer", "cozy", "construccion", "relajante", "pixelart"],
  "The Garden Path": ["summer", "cozy", "simulacion", "relajante", "artístico"],
  "Hyper Light Drifter": ["summer", "accion", "exploracion", "pixelart", "atmosfera"],
  "Rogue Legacy 2": ["summer", "rpg", "roguelite", "plataformas", "dificil"],
  "Enter the Gungeon": ["summer", "accion", "roguelite", "shooter", "pixelart"],
  "Core Keeper": ["summer", "cozy", "survival", "construccion", "cooperativo"],
  "Dinkum": ["summer", "cozy", "simulacion", "gestion", "exploracion"],
  "Wanderburg": ["summer", "cozy", "construccion", "gestion", "relajante"],
  "Valheim": ["summer", "survival", "construccion", "cooperativo", "exploracion"],
  "Terraria": ["summer", "survival", "construccion", "accion", "pixelart"],
  "It Takes Two": ["summer", "cooperativo", "plataformas", "aventura", "puzzle"],
  "Pode": ["summer", "cozy", "puzzle", "cooperativo", "atmosfera"],
  "Rivals of Aether": ["summer", "accion", "lucha", "pixelart", "competitivo"],
  "Deep Rock Galactic": ["summer", "accion", "cooperativo", "shooter", "humor"],
  "OneShot": ["cozy", "puzzle", "narrativo", "pixelart", "misterio"],
  "Jazzpunk": ["summer", "aventura", "humor", "corto", "retro"],
  "Baba Is You": ["summer", "puzzle", "creativo", "dificil", "pixelart"],
  "The Witness": ["summer", "puzzle", "exploracion", "misterio", "dificil"],
  "The Talos Principle": ["summer", "puzzle", "narrativo", "misterio", "filosófico"],
  "Heaven's Vault": ["summer", "narrativo", "aventura", "misterio", "exploracion"],
  "Braid": ["summer", "puzzle", "plataformas", "narrativo", "artístico"],
  "Fez": ["summer", "puzzle", "plataformas", "exploracion", "pixelart"],
  "Patrick's Parabox": ["summer", "puzzle", "dificil", "creativo", "pixelart"],
  "Carto": ["summer", "cozy", "puzzle", "narrativo", "exploracion"],
  "Opus Magnum": ["summer", "puzzle", "strategy", "creativo", "relajante"],
  "Turing Complete": ["summer", "puzzle", "strategy", "creativo", "dificil"],
  "Viewfinder": ["summer", "puzzle", "exploracion", "creativo", "atmosfera"],
  "Superliminal": ["summer", "puzzle", "exploracion", "humor", "atmosfera"],
  "Antichamber": ["summer", "puzzle", "exploracion", "dificil", "atmosfera"],
  "Manifold Garden": ["summer", "puzzle", "artístico", "atmosfera", "exploracion"],
  "Everything": ["summer", "cozy", "relajante", "filosófico", "artístico"],
  "Donut County": ["summer", "cozy", "puzzle", "humor", "narrativo"],
  "Plug & Play": ["cozy", "puzzle", "artístico", "corto", "surrealista"],
  "Manual Samuel": ["summer", "humor", "aventura", "corto", "plataformas"],
  "Accounting+": ["summer", "humor", "vr", "corto", "aventura"],
  "Cuphead": ["summer", "accion", "plataformas", "retro", "dificil"],
  "Moving Out 2": ["summer", "cooperativo", "humor", "accion", "plataformas"],
  "Party Animals": ["summer", "cooperativo", "humor", "multijugador", "accion"],
  "Trine 4": ["summer", "cooperativo", "puzzle", "plataformas", "aventura"],
  "Goat Simulator 3": ["summer", "humor", "sandbox", "cooperativo", "surrealista"],
  "Untitled Goose Game": ["summer", "cozy", "humor", "puzzle", "aventura"],
  "Kind Words (lo fi chill beats to write to)": ["cozy", "relajante", "social", "artístico", "corto"],
  "Thank Goodness You're Here!": ["summer", "humor", "aventura", "corto", "artístico"],
  "D-topia": ["summer", "cozy", "construccion", "relajante", "pixelart"],
  "Swan Song": ["cozy", "summer", "narrativo", "aventura", "atmosfera"],
  "Calx": ["summer", "cozy", "puzzle", "relajante", "artístico"],
  "Animal Well": ["horror", "puzzle", "cozy", "metroidvania", "exploracion"],
  "Strange Horticulture": ["cozy", "puzzle", "summer", "misterio", "narrativo"],
  "Wanderstop": ["cozy", "summer", "simulacion", "narrativo", "relajante"],
  "Smushi Come Home": ["cozy", "summer", "aventura", "plataformas", "relajante"],
  "Bunhouse": ["cozy", "summer", "simulacion", "relajante", "humor"],
  "Lake": ["cozy", "summer", "narrativo", "simulacion", "relajante"],
  "Potion Permit": ["cozy", "rpg", "summer", "simulacion", "narrativo"],
  "Judgment Apocalypse": ["strategy", "horror", "survival", "gestion", "construccion"],
  "Hollow Knight": ["summer", "metroidvania", "soulslike", "exploracion", "dificil"],
  "Dead Cells": ["summer", "roguelite", "accion", "metroidvania", "dificil"],
  "Hades": ["summer", "roguelite", "accion", "narrativo", "dificil"],
  "Celeste": ["summer", "plataformas", "narrativo", "dificil", "artístico"],
  "Rusty Lake: Hotel": ["horror", "puzzle", "misterio", "narrativo", "surrealista"],
  "Akane": ["cyberpunk", "summer", "accion", "pixelart", "dificil", "only-english"],
  "Dark Scrolls": ["summer", "strategy", "roguelite", "accion", "pixelart"],
  "Bread & Fred": ["cooperativo", "plataformas", "humor", "dificil", "pixelart"],


  // --- JUEGOS FALTANTES (referenciados en preguntas) ---
  "Unbound: Worlds Apart": ["summer", "rpg", "plataformas", "aventura", "pixelart"],
  "Chants of Sennaar": ["summer", "puzzle", "narrativo", "misterio", "artístico"],
  "Ruiner": ["cyberpunk", "accion", "shooter", "dificil", "pixelart"],
  "Jusant": ["summer", "cozy", "plataformas", "exploracion", "artístico"],
  "Biomutant": ["summer", "rpg", "accion", "exploracion", "aventura"],
  "Coffee Talk": ["cozy", "summer", "narrativo", "relajante", "visual-novel"],
  "Sanitarium": ["horror", "puzzle", "narrativo", "misterio", "atmosfera"],

  // --- JOYAS OCULTAS DE TERROR / MISTERIO ---
  "Mundaun": ["horror", "puzzle", "misterio", "atmosfera", "artístico"],
  "Who's Lila?": ["horror", "puzzle", "misterio", "narrativo", "only-english"],
  "Milk inside a bag of milk": ["horror", "narrativo", "corto", "visual-novel", "only-english"],
  "Lunacid": ["horror", "rpg", "exploracion", "retro", "atmosfera"],
  "Growing Up In The Caves": ["horror", "cozy", "survival", "narrativo", "pixelart"],

  // --- JOYAS OCULTAS DE STRATEGY / CYBERPUNK / SCI-FI ---
  "Ostranauts": ["strategy", "cyberpunk", "survival", "simulacion", "only-english"],
  "Mainframe Industries": ["cyberpunk", "puzzle", "sci-fi", "narrativo", "only-english"],
  "Highfleet": ["strategy", "sci-fi", "accion", "gestion", "atmosfera"],
  "Caves of Qud": ["rpg", "sci-fi", "roguelite", "exploracion", "only-english"],
  "Void Bastards": ["sci-fi", "summer", "accion", "roguelite", "humor"],

  // --- JOYAS OCULTAS DE RELAX / VERANO / COZY ---
  "Umurangi Generation": ["cyberpunk", "summer", "fotografía", "artístico", "atmosfera"],
  "Shedworksable (Sable)": ["summer", "cozy", "exploracion", "aventura", "atmosfera"],
  "Northern Journey": ["summer", "rpg", "exploracion", "aventura", "atmosfera"],
  "Aquaria": ["summer", "cozy", "metroidvania", "exploracion", "only-english"],
  "Cloud Meadow": ["cozy", "rpg", "simulacion", "gestion", "construccion"],
  // --- NUEVOS JUEGOS ---
  "Neon Abyss": ["summer", "roguelite", "accion", "pixelart", "humor"],
  "Cult of the Lamb": ["horror", "cozy", "strategy", "roguelite", "gestion"],
  "Katana ZERO": ["cyberpunk", "horror", "accion", "pixelart", "narrativo"],
  "Turnip Boy Commits Tax Evasion": ["summer", "cozy", "aventura", "humor", "pixelart"],
  "Vampire Survivors": ["summer", "roguelite", "accion", "pixelart", "relajante"],
  "Loop Hero": ["strategy", "horror", "summer", "roguelite", "cartas"],
  "Dicey Dungeons": ["summer", "roguelite", "cartas", "strategy", "humor"],
  "Slay the Spire 2": ["summer", "strategy", "roguelite", "cartas", "dificil"],
  "Monster Train": ["strategy", "horror", "roguelite", "cartas", "dificil"],
  "Gunfire Reborn": ["summer", "roguelite", "shooter", "accion", "cooperativo"],
  "Spiritfall": ["summer", "accion", "roguelite", "plataformas", "dificil"],
  "Minit": ["summer", "aventura", "puzzle", "pixelart", "corto"],
  "Night in the Woods": ["cozy", "narrativo", "aventura", "pixelart", "atmosfera"],
  "Oxenfree": ["horror", "narrativo", "aventura", "misterio", "pixelart"],
  "Oxenfree II: Lost Signals": ["horror", "narrativo", "aventura", "misterio", "cooperativo"],
  "A Plague Tale: Innocence": ["horror", "narrativo", "aventura", "accion", "atmosfera"],
  "Disco Elysium: The Final Cut": ["horror", "summer", "rpg", "narrativo", "detectivesco"],
  "Hades II": ["summer", "roguelite", "accion", "narrativo", "dificil"],
  "Neon Abyss 2": ["summer", "roguelite", "accion", "pixelart", "cooperativo"],
  "Children of the Sun": ["horror", "puzzle", "accion", "narrativo", "dificil"],
  "Tinykin": ["summer", "cozy", "plataformas", "exploracion", "aventura"],
  "Alba: A Wildlife Adventure": ["summer", "cozy", "exploracion", "narrativo", "relajante"],
  "Webfishing": ["cozy", "summer", "pesca", "cooperativo", "relajante"],
  "Thank Goodness You're Here!": ["summer", "humor", "aventura", "corto", "artístico"],
  "Sticky Business": ["cozy", "summer", "simulacion", "relajante", "creativo"],
  "Toem": ["summer", "cozy", "puzzle", "fotografía", "narrativo"],
  "Spiritfarer: Farewell Edition": ["horror", "cozy", "summer", "narrativo", "gestion"],
  "Ravenswatch": ["horror", "summer", "roguelite", "cooperativo", "accion"],
  "Melatonin": ["summer", "rítmico", "cozy", "relajante", "artístico"],
  "Lil Gator Game": ["summer", "cozy", "plataformas", "aventura", "relajante"],
  "Venba": ["cozy", "narrativo", "corto", "puzzle", "artístico"],

};

// Configuración visual centralizada de etiquetas para evitar repeticiones absurdas
const TAG_CONFIG = {
  'horror':       { text: '☠ terror',      class: 'gbadge-horror' },
  'summer':       { text: '☀ verano',      class: 'gbadge-summer' },
  'cozy':         { text: '🌿 cozy',        class: 'gbadge-cozy' },
  'strategy':     { text: '⚙️ estrategia',  class: 'gbadge-strategy' },
  'rpg':          { text: '📜 rol',         class: 'gbadge-rpg' },
  'cyberpunk':    { text: '🧬 cyberpunk',   class: 'gbadge-cyberpunk' },
  'puzzle':       { text: '🧩 puzle',       class: 'gbadge-cozy' },
  'sci-fi':       { text: '🚀 sci-fi',      class: 'gbadge-cyberpunk' },
  'narrativo':    { text: '📖 narrativo',   class: 'gbadge-cozy' },
  'roguelite':    { text: '🔁 roguelite',   class: 'gbadge-strategy' },
  'exploracion':  { text: '🗺 exploración', class: 'gbadge-summer' },
  'survival':     { text: '🔥 supervivencia', class: 'gbadge-horror' },
  'accion':       { text: '⚔️ acción',      class: 'gbadge-summer' },
  'pixelart':     { text: '🎮 pixel art',   class: 'gbadge-rpg' },
  'cooperativo':  { text: '🤝 coop',        class: 'gbadge-cozy' },
  'metroidvania': { text: '🗝 metroidvania', class: 'gbadge-strategy' },
  'soulslike':    { text: '💀 soulslike',   class: 'gbadge-horror' },
  'atmosfera':    { text: '🌫 atmosférico', class: 'gbadge-horror' },
  'misterio':     { text: '🔍 misterio',    class: 'gbadge-rpg' },
  'gestion':      { text: '📊 gestión',     class: 'gbadge-strategy' },
  'construccion': { text: '🏗 construcción', class: 'gbadge-strategy' },
  'simulacion':   { text: '🎲 simulación',  class: 'gbadge-cozy' },
  'relajante':    { text: '😌 relajante',   class: 'gbadge-cozy' },
  'plataformas':  { text: '🏃 plataformas', class: 'gbadge-summer' },
  'retro':        { text: '👾 retro',       class: 'gbadge-rpg' },
  'dificil':      { text: '💢 difícil',     class: 'gbadge-horror' },
  'humor':        { text: '😂 humor',       class: 'gbadge-summer' },
  'aventura':     { text: '🌄 aventura',    class: 'gbadge-summer' },
  'cartas':       { text: '🃏 cartas',      class: 'gbadge-strategy' },
  'shooter':      { text: '🔫 shooter',     class: 'gbadge-summer' },
  'artístico':    { text: '🎨 artístico',   class: 'gbadge-cozy' },
  'fotografía':   { text: '📷 fotografía',  class: 'gbadge-cozy' },
  'pesca':        { text: '🎣 pesca',       class: 'gbadge-cozy' },
  'sigilo':       { text: '🤫 sigilo',      class: 'gbadge-horror' },
  'visual-novel': { text: '📚 novela visual', class: 'gbadge-rpg' },
  'piratas':      { text: '🏴‍☠️ piratas',    class: 'gbadge-summer' },
};

// Función única y global para extraer tags de un juego
function getTag(g) { 
  return GAME_TAGS[g] || ["summer"]; 
}

// ==========================================
// 2. BANCO DE PREGUNTAS (Q)
// ==========================================
const Q = [
  { e:"☀️", t:"¿Qué sensación buscas este verano?", o:[
    {l:"A",t:"Relax y desconexión total",g:["A Short Hike","Stardew Valley","Hokko Life","Spiritfarer","Unpacking","Coral Island","Cozy Grove","Alba: A Wildlife Adventure","Cloud Gardens","Journey","Flower","Abzû","Moonlight Peaks","Tales of Seikyu","Woodo","Eastshade","Dordogne","Strange Horticulture","Wanderstop","Bunhouse","Lake","Potion Permit","Cloudheim","Smushi Come Home","Swan Song","D-topia","Pode","Coffee Talk","Webfishing","Sticky Business","Lil Gator Game","Melatonin","Tinykin","Venba","Night in the Woods",  "House Flipper Remastered Collection","Beastro", "Interdimensional Vending Machine","Idle Chapel"]},
    {l:"B",t:"Misterio sutil y atmósfera absorbente",g:["Dredge","Outer Wilds","Sable","Norco","Disco Elysium","Return of the Obra Dinn","Beacon Pines","Citizen Sleeper","Hypnospace Outlaw","What Remains of Edith Finch","Gris","The Cosmic Wheel Sisterhood","Animal Well","Strange Horticulture","Pentiment","Who's Lila?","Umurangi Generation","Oxenfree","Oxenfree II: Lost Signals","Night in the Woods", "Swan Song","Shift At Midnight","Maseylia: Echoes of The Past","Gastova: The Witches of Arkana"]},
    {l:"C",t:"Terror puro y tensión constante",g:["Tormented Souls","Crow Country","Faith: The Unholy Trinity","Amnesia: The Bunker","Phasmophobia","Iron Lung","My House.wad","Darkwood","Signalis","The Long Dark","Lethal Company","SOMA","Subnautica","Buckshot Roulette","Gloomwood","Dusk","Selaco","Barotrauma","Pathologic 2","Mundaun","Milk inside a bag of milk","A Plague Tale: Innocence","Ravenswatch",  "Remorses","Cursemark","Color Fear","Don't Let It Starve","Ogre Chamber 2222",
  "Witchspire"]},
    {l:"D",t:"Acción, adrenalina y reflejos",g:["Hollow Knight","Dead Cells","Hades","Hades II","Celeste","Salt and Sanctuary","Curse of the Dead Gods","GRIME","Blasphemous","Katana ZERO","Neon White","Ultrakill","Ghostrunner 2","Mullet MadJack","Pseudoregalia","Enter the Gungeon","Rogue Legacy 2","Void Bastards","Highfleet","Akane","Dark Scrolls","Ruiner","TMNT: Shredder's Revenge","Sonic Mania","Rivals of Aether","Vampire Survivors","Spiritfall"]}
  ]},
  { e:"🏖️", t:"Tu escenario ideal para perderte sería…", o:[
    {l:"A",t:"Playa e islas tropicales",g:["Dave the Diver","Hokko Life","Tchia","Subnautica","Raft","Dredge","Coral Island"]},
    {l:"B",t:"Mar y navegación (de día... y de noche)",g:["Sailwind","Dredge","Sail Forth","Raft","King of Seas","Windbound","Iron Lung","Barotrauma","Aquaria","Subnautica","Smushi Come Home"]},
    {l:"C",t:"Montañas y naturaleza",g:["A Short Hike","Firewatch","The Long Dark","Celeste","Alba: A Wildlife Adventure","Stardew Valley","Ori and the Will of the Wisps","Amnesia: The Bunker","Cloudheim","Mundaun","Northern Journey"]},
    {l:"D",t:"Ciudad o entorno urbano",g:["Cloudpunk","Disco Elysium","Norco","Beacon Pines","Citizen Sleeper","Hypnospace Outlaw","My House.wad","Phasmophobia","Shadows of Doubt","Stray", "Umurangi Generation", "Akane"]},
    {l:"E",t:"Fantasía y mundos imaginarios",g:["Pine","Chained Echoes","Phoenotopia Awakening","CrossCode","Ara Fell","Moonlight Peaks","Grave Seasons","Tales of Seikyu","Unbound: Worlds Apart","GRIME","Blasphemous","Nine Sols","Cassette Beasts","Arcadian Atlas","Heaven's Vault","Limbus Company"]},
    {l:"F",t:"Lugares oscuros y perturbadores",g:["Darkwood","SOMA","Signalis","Little Nightmares II","Omori","Salt and Sanctuary","Vagante","Inscryption","Hollow Knight","Tormented Souls","Crow Country","Faith: The Unholy Trinity","Slay the Princess","Lunacid","Caves of Qud","Sanitarium","Growing Up In The Caves","Anemoiapolis","Judgment Apocalypse"]}
  ]},
  { e:"🚗", t:"Si tuvieras vacaciones virtuales, elegirías…", o:[
    {l:"A",t:"Explorar libremente",g:["Outer Wilds","Sable","Subnautica","Sailwind","Tunic","Firewatch","A Short Hike","Outbound","Unbound: Worlds Apart","Everything","Manifold Garden","Antichamber","My House.wad","Pine","Pacific Drive"]},
    {l:"B",t:"Hacer misiones y progresar",g:["CrossCode","Tails of Iron","Kena: Bridge of Spirits","Weird West","Moonlighter 2: The Endless Vault","Tunic","Citizen Sleeper","Disco Elysium","Tormented Souls","Crow Country","Potion Permit","Pentiment"]},
    {l:"C",t:"Construir y crear",g:["Stardew Valley","Terraria","Valheim","Coral Island","Raft","Dinkum","Wanderburg","Core Keeper","Cloudheim","Manor Lords","Factorio","Opus Magnum","Turing Complete","Cloud Meadow"]},
    {l:"D",t:"Competir o superar desafíos",g:["Art of Rally","Neon White","Ratatan","Slay the Spire","Balatro","Dead Cells","Hades","Hades II","GRIME","Mullet MadJack","Ghostrunner 2","Rivals of Aether","Sonic Mania","Cuphead","Vampire Survivors","Monster Train","Spiritfall"]},
    {l:"E",t:"Conocer personajes únicos",g:["Disco Elysium","Hades","Spiritfarer","Omori","Moonlight Peaks","Grave Seasons","Tales of Seikyu","Citizen Sleeper","Norco","The Cosmic Wheel Sisterhood","Slay the Princess"]},
    {l:"F",t:"Sobrevivir a algo terrorífico",g:["Signalis","Darkwood","SOMA","Little Nightmares II","The Long Dark","Subnautica","Lethal Company","Vagante","Amnesia: The Bunker","Phasmophobia","Iron Lung","Pacific Drive"]}
  ]},
  { e:"🎮", t:"¿Cuánto esfuerzo mental quieres dedicar?", o:[
    {l:"A",t:"Cero, solo divertirme",g:["Untitled Goose Game","Goat Simulator 3","Party Animals","Trine 4","Pseudoregalia","Ratatan","Donut County","Thank Goodness You're Here!","Jazzpunk","Mullet MadJack","Moving Out 2","TMNT: Shredder's Revenge","Manual Samuel","Accounting+","Vampire Survivors","Tinykin","Minit","Turnip Boy Commits Tax Evasion"]},
    {l:"B",t:"Algo ligero y relajado",g:["A Short Hike","Tchia","Stardew Valley","Hokko Life","Spiritfarer","Unpacking","Coral Island","Dave the Diver","Woodo","Outbound","Cozy Grove","Lake","Summerhouse","Townscaper"]},
    {l:"C",t:"Equilibrado",g:["Dave the Diver","Firewatch","CrossCode","Outer Wilds","Subnautica","Weird West","Moonlighter 2: The Endless Vault","Citizen Sleeper","Inscryption","Phasmophobia","Crow Country","Stray","Cassette Beasts","Strange Horticulture"]},
    {l:"D",t:"Me gustan los retos",g:["Hollow Knight","Salt and Sanctuary","Curse of the Dead Gods","Vagante","GRIME","Blasphemous","Blighted","Mina the Hollower","Katana ZERO","Ghostrunner 2","Nine Sols","Loop Hero","Slay the Spire","Balatro","Chants of Sennaar","The Witness","Viewfinder","Superliminal","Patrick's Parabox","Braid","Fez","Turing Complete","Opus Magnum","Children of the Sun","Slay the Spire 2"]}
  ]},
  { e:"🚤", t:"¿Qué actividad veraniega te atrae más?", o:[
    {l:"A",t:"Navegar por el mar",g:["Sailwind","Windbound","Dredge","Sail Forth","Raft","Barotrauma"]},
    {l:"B",t:"Pescar tranquilamente",g:["Dave the Diver","Dredge","Stardew Valley","Hokko Life","Spiritfarer","Moonglow Bay"]},
    {l:"C",t:"Viajar y conocer lugares",g:["Sable","Firewatch","A Short Hike","Tails of Iron","Sailwind","Journey","Outbound","Pine","Dordogne","Stray"]},
    {l:"D",t:"Acampar en la naturaleza",g:["The Long Dark","A Short Hike","Firewatch","Valheim","Subnautica","Amnesia: The Bunker","Pacific Drive"]},
    {l:"E",t:"Explorar ruinas y misterios",g:["Outer Wilds","Subnautica","Return of the Obra Dinn","Tunic","Blighted","Unbound: Worlds Apart","SOMA","Signalis","Darkwood","Tormented Souls","Crow Country","Phasmophobia","My House.wad","Faith: The Unholy Trinity","Iron Lung","Animal Well","Chants of Sennaar"]}
  ]},
  { e:"📖", t:"¿Qué tipo de historia prefieres?", o:[
    {l:"A",t:"Alegre y optimista",g:["Hokko Life","Tchia","A Short Hike","Spiritfarer","Coral Island","Pseudoregalia","A Hat in Time","Moonlight Peaks","Tales of Seikyu","Woodo","Wytchwood","TOEM","Dordogne","Littlewood","Garden Story","Smushi Come Home","Swan Song","Carto","Moving Out 2","Coffee Talk"]},
    {l:"B",t:"Emotiva y conmovedora",g:["Omori","Firewatch","Spiritfarer","Spiritfarer: Farewell Edition","Celeste","What Remains of Edith Finch","Gris","Beacon Pines","SOMA","Citizen Sleeper","1000xRESIST","Oxenfree","Night in the Woods","Venba","Lil Gator Game"]},
    {l:"C",t:"Humorística y absurda",g:["Untitled Goose Game","Goat Simulator 3","Disco Elysium","West of Loathing","Thank Goodness You're Here!","Jazzpunk","Buckshot Roulette","Manual Samuel","Accounting+","Plug & Play"]},
    {l:"D",t:"Épica y grandiosa",g:["Tails of Iron","CrossCode","Chained Echoes","Weird West","Salt and Sanctuary","Blasphemous","GRIME","Hades","Nine Sols","Arcadian Atlas","Limbus Company","Heaven's Vault"]},
    {l:"E",t:"Misteriosa e intrigante",g:["Outer Wilds","Dredge","Return of the Obra Dinn","Disco Elysium","Norco","Grave Seasons","Mina the Hollower","Unbound: Worlds Apart","Inscryption","Signalis","Darkwood","Hypnospace Outlaw","Doki Doki Literature Club","Tormented Souls","Crow Country","Faith: The Unholy Trinity","Iron Lung","My House.wad","Amnesia: The Bunker","Phasmophobia","Shadows of Doubt","Pentiment","Slay the Princess"]}
  ]},
  { e:"🎨", t:"¿Qué estilo visual te llama más?", o:[
    {l:"A",t:"Pixel Art retro",g:["Sea of Stars","Stardew Valley","Celeste","Shovel Knight","Terraria","Dead Cells","Hollow Knight","Mina the Hollower","Unbound: Worlds Apart","Omori","Norco","Signalis","Blasphemous","Vagante","Faith: The Unholy Trinity","Loop Hero","Katana ZERO","Papers Please","Demon Turf","Arcadian Atlas","Limbus Company","Patrick's Parabox","Rivals of Aether","Xanthiom 2","Denshattack!","Witchspire","Underchoice"]},
    {l:"B",t:"Dibujos animados y colorido",g:["Untitled Goose Game","Tchia","Cuphead","Trine 4","Pseudoregalia","A Hat in Time","Little Nightmares II","Cult of the Lamb","A Short Hike","Cozy Grove","Smushi Come Home","Moving Out 2","Demon Turf","Pode"]},
    {l:"C",t:"Oscuro y perturbador (retro 3D o expresionista)",g:["Darkwood","SOMA","Little Nightmares II","Inscryption","Omori","Signalis","Blasphemous","GRIME","Tormented Souls","Crow Country","Amnesia: The Bunker","Iron Lung","My House.wad","Buckshot Roulette","Gloomwood","Dusk","Pathologic 2"]}
  ]},
  { e:"⚔️", t:"¿Cómo prefieres el combate o el peligro?", o:[
    {l:"A",t:"Sin combate (exploración y relax)",g:["A Short Hike","Stardew Valley","Hokko Life","Spiritfarer","Unpacking","Coral Island","Abzû","Journey","Eastshade","Norco","Citizen Sleeper","Hypnospace Outlaw","Iron Lung","Townscaper","A Little to the Left","Summerhouse","Dordogne","The Cosmic Wheel Sisterhood","Pentiment","Papers Please","Coffee Talk","Carto","Heaven's Vault"]},
    {l:"B",t:"Combate ligero y divertido",g:["Dave the Diver","Tchia","Hades","Sailwind","Pseudoregalia","A Hat in Time","Crow Country","Cult of the Lamb","Moonlighter 2: The Endless Vault","Stray","Cassette Beasts"]},
    {l:"C",t:"Combate clásico o puzles de supervivencia",g:["Tails of Iron","CrossCode","Kena: Bridge of Spirits","Phoenotopia Awakening","Weird West","Hyper Light Drifter","Tormented Souls","My House.wad","Pacific Drive","Animal Well","Strange Horticulture"]},
    {l:"D",t:"Combate / evasión desesperada y desafiante",g:["Hollow Knight","Salt and Sanctuary","Dead Cells","Celeste","Curse of the Dead Gods","Mina the Hollower","Blighted","Vagante","GRIME","Blasphemous","Signalis","Amnesia: The Bunker","Faith: The Unholy Trinity","Phasmophobia","Darkwood","SOMA","Frostpunk 2","Against the Storm"]},
    {l:"E",t:"Combate épico y espectacular",g:["Hades","Chained Echoes","Ultrakill","Neon White","Enter the Gungeon","Rogue Legacy 2","Dead Cells","Ghostrunner 2","Katana ZERO","Mullet MadJack","Nine Sols","Akane","Ruiner","TMNT: Shredder's Revenge","Arcadian Atlas","Limbus Company","Rivals of Aether"]}
  ]},
  { e:"📜", t:"¿Qué es más importante para ti?", o:[
    {l:"A",t:"Historia profunda y emotiva",g:["Omori","Firewatch","Spiritfarer","What Remains of Edith Finch","Disco Elysium","Gris","Beacon Pines","SOMA","Norco","Citizen Sleeper","Doki Doki Literature Club","1000xRESIST","Pentiment","Slay the Princess"]},
    {l:"B",t:"Jugabilidad adictiva y divertida",g:["Stardew Valley","Hades","Dead Cells","Hokko Life","Ratatan","Outbound","Balatro","Slay the Spire","Inscryption","Loop Hero","Buckshot Roulette","Monster Train","Dicey Dungeons","Neon Abyss","Cult of the Lamb"]},
    {l:"C",t:"Exploración y libertad",g:["Outer Wilds","Tunic","Subnautica","Sailwind","Sable","Unbound: Worlds Apart","Darkwood","My House.wad","Stray","Pseudoregalia","Tinykin","Lil Gator Game"]},
    {l:"D",t:"Construcción, estrategia y creatividad",g:["Terraria","Valheim","Coral Island","Core Keeper","Dinkum","Factorio","RimWorld","Manor Lords","Frostpunk 2","Against the Storm","Songs of Syx","Townscaper","Cloudheim"]},
    {l:"E",t:"Supervivencia extrema y pánico / Cooperativo",g:["Sailwind","Valheim","It Takes Two","Lethal Company","Deep Rock Galactic","Tormented Souls","Crow Country","Amnesia: The Bunker","Phasmophobia","Faith: The Unholy Trinity","Iron Lung","Barotrauma","Bread & Fred","Moving Out 2","TMNT: Shredder's Revenge","Judgment Apocalypse","Gunfire Reborn","Neon Abyss 2"]}
  ]},
  { e:"🌟", t:"¿Qué prefieres en un juego?", o:[
    {l:"A",t:"Atmósfera relajante y bonita",g:["A Short Hike","Abzû","Journey","Spiritfarer","Eastshade","Cloud Gardens","Flower","Woodo","Outbound","Townscaper","A Little to the Left","Kind Words (lo fi chill beats to write to)","Summerhouse","The Garden Path","Dordogne","Swan Song","Pode","Carto","D-topia","Coffee Talk","Smushi Come Home","Calx","Toem"]},
    {l:"B",t:"Sorpresas constantes, romper la cuarta pared",g:["Inscryption","Omori","Doki Doki Literature Club","OneShot","Baba Is You","Superliminal","Viewfinder","Balatro","Buckshot Roulette","Slay the Princess","My House.wad","Anemoiapolis","Sanitarium","Plug & Play","Oxenfree","Minit"]},
    {l:"C",t:"Vida de detective o investigador / Exorcista",g:["Disco Elysium","Disco Elysium: The Final Cut","Return of the Obra Dinn","Norco","Hypnospace Outlaw","Doki Doki Literature Club","Inscryption","Crow Country","Phasmophobia","Faith: The Unholy Trinity","Shadows of Doubt","Strange Horticulture","Pentiment"]},
    {l:"D",t:"Vida de aventurero/a épico",g:["Chained Echoes","Sea of Stars","CrossCode","GRIME","Blasphemous","Vagante","Hades","Tunic","Pseudoregalia","Nine Sols"]},
    {l:"E",t:"Vida atrapado en una pesadilla claustrofóbica",g:["SOMA","Darkwood","Signalis","Lethal Company","Subnautica","Little Nightmares II","Citizen Sleeper","Tormented Souls","Amnesia: The Bunker","My House.wad","Iron Lung","Barotrauma","Frostpunk 2"]}
  ]},
  { e:"🤖", t:"Elige una tecnología o artefacto para tu viaje…", o:[
    {l:"A",t:"Un implante cibernético de reflejos aumentados",g:["Ghostrunner 2","Katana ZERO","Mullet MadJack","Nine Sols","Umurangi Generation"]},
    {l:"B",t:"Una furgoneta destartalada que parece tener vida propia",g:["Pacific Drive","The Long Dark","Amnesia: The Bunker", "Ostranauts", "Void Bastards"]},
    {l:"C",t:"Un reproductor de casetes con monstruos dentro",g:["Cassette Beasts","Omori","Doki Doki Literature Club"]},
    {l:"D",t:"Un cuaderno para traducir lenguas antiguas perdidas",g:["Chants of Sennaar","Return of the Obra Dinn","The Witness","Who's Lila?","Heaven's Vault","Sanitarium"]},
    {l:"E",t:"Una fábrica automatizada que cubre todo el planeta",g:["Factorio","RimWorld","Citizen Sleeper","Songs of Syx","Mainframe Industries","Turing Complete","Opus Magnum","Papers Please"]}
  ]},
  { e:"👑", t:"Si fueras el líder de un asentamiento veraniego…", o:[
    {l:"A",t:"Gestionaría recursos de forma implacable para sobrevivir al frío/caos",g:["Frostpunk 2","Against the Storm","RimWorld"]},
    {l:"B",t:"Crearía un culto adorable pero extrañamente perturbador",g:["Cult of the Lamb","Inscryption","Dredge"]},
    {l:"C",t:"Construiría un pueblo medieval pacífico tejado a tejado o flotante",g:["Manor Lords","Townscaper","Summerhouse","Cloudheim","D-topia","Shedworksable (Sable)"]},
    {l:"D",t:"Pasaría de liderar, prefiero ser un gato callejero vagando por ahí",g:["Stray","A Short Hike","Untitled Goose Game"]}
  ]},
  { e:"👁️", t:"¿Cómo prefieres enfrentarte a un enigma?", o:[
    {l:"A",t:"Analizando el entorno milímetro a milímetro en un mapa laberíntico",g:["Animal Well","Hollow Knight","Crow Country","Pseudoregalia"]},
    {l:"B",t:"Hablando con personajes misteriosos en un bucle mental",g:["Slay the Princess","Pentiment","Disco Elysium","Who's Lila?","Milk inside a bag of milk"]},
    {l:"C",t:"Resolviendo acertijos lógicos visuales y mecánicos",g:["Chants of Sennaar","Rusty Lake: Hotel","Viewfinder","Superliminal","The Witness","Braid","Fez","Baba Is You","Patrick's Parabox","Anemoiapolis","Heaven's Vault","Turing Complete","The Talos Principle"]},
    {l:"D",t:"Optimizando líneas de producción y menús complejos",g:["Factorio","RimWorld","Manor Lords", "Ostranauts", "Highfleet"]}
  ]},
  { e:"💼", t:"Encuentras un maletín olvidado en una estación abandonada, ¿qué haces?", o:[
    {l:"A",t:"Lo abro para investigar documentos y descifrar a quién pertenecía",g:["Return of the Obra Dinn","Shadows of Doubt","Pentiment","Who's Lila?"]},
    {l:"B",t:"Utilizo las herramientas del maletín para desguazar componentes útiles",g:["Ostranauts","Void Bastards","Pacific Drive","Factorio"]},
    {l:"C",t:"Lo dejo intacto, prefiero no meterme en problemas y disfrutar del paisaje",g:["A Short Hike","Sable","Journey","Lake"]},
    {l:"D",t:"Es una trampa. Saco mi arma y me preparo para una emboscada",g:["Neon White","Ultrakill","Katana ZERO","Ghostrunner 2","Highfleet"]}
  ]},
  { e:"🎼", t:"¿Qué tipo de banda sonora debería acompañar tu travesía?", o:[
    {l:"A",t:"Sintetizadores oscuros, cyberpunk y ritmos industriales pesados",g:["Katana ZERO","Ghostrunner 2","Mullet MadJack","Signalis","Ruiner","Akane","Cloudpunk"]},
    {l:"B",t:"Melodías acústicas fijas, folclore misterioso o instrumentos antiguos",g:["Mundaun","Pentiment","Chants of Sennaar","Outer Wilds","Dredge"]},
    {l:"C",t:"Silencio absoluto roto solo por el viento, pisadas y ruidos ambientales",g:["The Long Dark","Iron Lung","Amnesia: The Bunker","Darkwood","Mundaun"]},
    {l:"D",t:"Música lo-fi, sonidos de naturaleza y melodías sumamente reconfortantes",g:["Kind Words (lo fi chill beats to write to)","Stardew Valley","Coffee Talk","Unpacking","A Short Hike","Swan Song","Smushi Come Home","D-topia","Melatonin","Night in the Woods","Venba"]}
  ]},
  { e:"🌌", t:"Si pudieras alterar una regla del universo en tu aventura…", o:[
    {l:"A",t:"Modificaría el tiempo (bucles temporales o cámaras lentas)",g:["Outer Wilds","Katana ZERO","Slay the Princess","Who's Lila?"]},
    {l:"B",t:"Alteraría la gravedad y la perspectiva para caminar por techos y paredes",g:["Superliminal","Viewfinder","Manifold Garden","Pseudoregalia","Jusant"]},
    {l:"C",t:"Ninguna regla física, prefiero controlar la genética y tener mutaciones extrañas",g:["Caves of Qud","Cult of the Lamb","Biomutant","Growing Up In The Caves"]},
    {l:"D",t:"No quiero magia ni poderes, prefiero la fría y cruda simulación de la realidad",g:["RimWorld","Factorio","Ostranauts","Highfleet","Manor Lords"]}
  ]},
  { e:"⏳", t:"¿Cómo manejas la presión cuando las cosas se complican?", o:[
    {l:"A",t:"Me da igual el pánico, reacciono por puro instinto y reflejos veloces",g:["Ultrakill","Neon White","Ghostrunner 2","Dead Cells","Hades","Hades II","Akane","Spiritfall","Vampire Survivors"]},
    {l:"B",t:"Me detengo a pensar de forma fría, analizando menús e inventarios minuciosamente",g:["Frostpunk 2","Against the Storm","Highfleet","Ostranauts","Loop Hero"]},
    {l:"C",t:"Me invade una ansiedad psicológica claustrofóbica difícil de controlar",g:["Milk inside a bag of milk","Amnesia: The Bunker","Iron Lung","SOMA"]},
    {l:"D",t:"Sé que no hay peligro real, así que lo tomo como un aprendizaje relajante",g:["Unpacking","Gris","Celeste","TOEM"]}
  ]},
  {
    e: "🌐", t: "¿Cómo te llevas con el idioma de Shakespeare (Inglés)?", o: [
      { l: "A", t: "No es un problema, juego en inglés perfectamente si el juego lo requiere", g: ["Who's Lila?", "Ostranauts", "Caves of Qud", "Milk inside a bag of milk", "Mainframe Industries", "Songs of Syx", "Hypnospace Outlaw", "Grave Seasons", "Disco Elysium", "Citizen Sleeper"] },
      { l: "B", t: "Prefiero que esté en español, pero si es de poca lectura (acción/arcade) me defiendo", g: ["Akane", "Ultrakill", "Neon White", "Katana ZERO", "Ghostrunner 2", "Dead Cells", "Hades", "Void Bastards", "Highfleet"] },
      { l: "C", t: "Nivel básico. Quiero mi juego 100% en español (o traducido por fans) para enterarme de la historia", g: ["A Short Hike", "Stardew Valley", "Sea of Stars", "Blasphemous", "Chants of Sennaar", "Dredge", "Omori", "Signalis", "Celeste", "Hollow Knight", "Unpacking", "Gris", "Spiritfarer"] }
  ]},
  {
    e: "🌲", t: "Te despiertas en medio de un bosque a medianoche, ¿qué llevas en la mano?", o: [
      { l: "A", t: "Una linterna dinamo que parpadea y una radio con estática", g: ["Amnesia: The Bunker", "Darkwood", "Signalis", "Phasmophobia", "Pacific Drive", "Iron Lung", "Mundaun"] },
      { l: "B", t: "Un mapa desgastado, una brújula y una cámara de fotos analógica", g: ["Outer Wilds", "Sable", "Firewatch", "A Short Hike", "Dordogne", "TOEM", "Umurangi Generation"] },
      { l: "C", t: "Un hacha de piedra, un plano de construcción y unas semillas", g: ["Stardew Valley", "Terraria", "Valheim", "Core Keeper", "Dinkum", "Manor Lords", "RimWorld"] },
      { l: "D", t: "Una espada rúnica incandescente o un rifle de plasma de alta tecnología", g: ["Hades", "Hollow Knight", "Dead Cells", "Blasphemous", "Nine Sols", "Ultrakill", "Ghostrunner 2", "Akane"] }
    ]
  },
  {
    e: "🧱", t: "¿Cómo prefieres que se construya el mundo a tu alrededor?", o: [
      { l: "A", t: "Generado procedimentalmente, infinito y lleno de sorpresas mecánicas", g: ["Terraria", "Valheim", "Core Keeper", "Factorio", "RimWorld", "Caves of Qud", "Void Bastards", "Loop Hero", "Slay the Spire", "Balatro"] },
      { l: "B", t: "Un laberinto interconectado tallado a mano donde cada rincón esconde un secreto", g: ["Hollow Knight", "Blasphemous", "Animal Well", "Tunic", "Pseudoregalia", "Crow Country", "Tormented Souls", "Signalis","Crushed in Time"] },
      { l: "C", t: "Un escenario lineal pero con una carga narrativa y artística abrumadora", g: ["Gris", "What Remains of Edith Finch", "Milk inside a bag of milk", "SOMA", "Sanitarium", "Pentiment", "1000xRESIST"] },
      { l: "D", t: "Un mundo abierto inmenso que invita a la contemplación y al viaje sin prisa", g: ["Sable", "A Short Hike", "Journey", "Abzû", "Eastshade", "Cloudheim", "Northern Journey", "Shedworksable (Sable)", "Calx", "Carto"] }
    ]
  },
  {
    e: "🎰", t: "El azar llama a tu puerta... ¿cómo respondes?", o: [
      { l: "A", t: "Calculo las probabilidades al milímetro, minimizando el riesgo con estrategia", g: ["Factorio", "RimWorld", "Manor Lords", "Frostpunk 2", "Against the Storm", "Songs of Syx", "Ostranauts", "Highfleet"] },
      { l: "B", t: "Abrazo el caos del mazo: que la suerte decida mi próximo movimiento", g: ["Balatro", "Slay the Spire", "Inscryption", "Loop Hero", "Buckshot Roulette", "Trashy Cashy","Slots & Diapers","Type Or Die"] },
      { l: "C", t: "Prefiero que no haya azar; que todo dependa de mi habilidad al mando", g: ["Hades", "Dead Cells", "Celeste", "Ultrakill", "Neon White", "Katana ZERO", "Ghostrunner 2", "Mullet MadJack"] },
      { l: "D", t: "El único azar que quiero es pescar un pez raro o encontrar un fósil", g: ["Stardew Valley", "Dave the Diver", "Dredge", "Coral Island", "Moonglow Bay", "Cozy Grove", "Webfishing"] }
    ]
  },
  {
    e: "🔮", t: "Si te ofrecieran un contrato con una entidad cósmica, firmarías para...", o: [
      { l: "A", t: "Automatizar una civilización entera y ver crecer los números sin fin", g: ["Factorio", "RimWorld", "Songs of Syx", "Manor Lords"] },
      { l: "B", t: "Resolver un crimen existencial en una ciudad decadente donde todos mienten", g: ["Disco Elysium", "Norco", "Shadows of Doubt", "Citizen Sleeper", "Pentiment", "Who's Lila?", "Dark Scrolls","Maseylia: Echoes of The Past","Shift At Midnight","Underchoice"] },
      { l: "C", t: "Convertirme en un dios menor en un mundo de fantasía oscura y desafiante", g: ["Hollow Knight", "Blasphemous", "GRIME", "Hades", "Salt and Sanctuary", "Nine Sols",  "Gothic 1 Remake","Cursemark","Witch's Apocalyptic Journey","Gastova: The Witches of Arkana"] },
      { l: "D", t: "Tener una cabaña eterna donde preparar pociones, cuidar plantas y leer el tarot", g: ["Strange Horticulture", "The Cosmic Wheel Sisterhood", "Potion Permit", "Wytchwood", "Stardew Valley", "Moonlight Peaks", "Wanderstop", "Arcadian Atlas", "Growing Up In The Caves", "Cloud Meadow","Beastro","House Flipper Remastered Collection","Idle Chapel","Interdimensional Vending Machine"] }
    ]
  }
];

// Variables del estado global de la APP
let cur = 0, ans = [], lastScores = {}, activeFilter = 'all';

// Función auxiliar para extraer etiquetas colectivas asociadas a los juegos de una opción sin repetirse
function getOptionTags(gamesList) {
  const tagsSet = new Set();
  gamesList.forEach(g => {
    const tags = getTag(g);
    tags.forEach(t => tagsSet.add(t));
  });
  return Array.from(tagsSet);
}

// ==========================================
// 3. RENDERIZADO DINÁMICO DEL TEST (PREGUNTAS)
// ==========================================
function render() {
  const q = Q[cur];
  const lbl = document.getElementById('qlabel');
  lbl.textContent = '';
  lbl.appendChild(document.createTextNode(`${q.e}  Pregunta `));
  const b = document.createElement('b'); b.textContent = cur + 1; lbl.appendChild(b);
  lbl.appendChild(document.createTextNode(` de ${Q.length}`));
  document.getElementById('qtext').textContent = q.t;

  const opts = document.getElementById('opts'); opts.innerHTML = '';
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
    
    const spanL = document.createElement('span'); spanL.className = 'opt-l'; spanL.textContent = opt.l;
    const spanT = document.createElement('span'); spanT.textContent = opt.t; spanT.style.flex = '1';
    
    btn.appendChild(spanL); 
    btn.appendChild(spanT);
    
    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'opt-tags';
    
    optTags.forEach(tag => {
      if (TAG_CONFIG[tag]) {
        const badge = document.createElement('span');
        badge.className = `gbadge ${TAG_CONFIG[tag].class}`;
        badge.textContent = TAG_CONFIG[tag].text;
        tagsContainer.appendChild(badge);
      }
    });
    
    btn.appendChild(tagsContainer);
    opts.appendChild(btn);
  });

  document.getElementById('prog').style.width = `${((cur + 1) / Q.length) * 100}%`;
  document.getElementById('qcount').textContent = `${cur + 1} / ${Q.length}`;
  document.getElementById('prevBtn').disabled = cur === 0;
  
  const nb = document.getElementById('nextBtn');
  nb.disabled = ans[cur] == null;
  nb.textContent = cur === Q.length - 1 ? 'Ver mi destino ☠' : 'Continuar →';
}

function nav(dir) {
  if (dir === 1 && cur === Q.length - 1) { showResults(); return; }
  cur = Math.max(0, Math.min(Q.length - 1, cur + dir));
  render();
}

// ==========================================
// 4. SISTEMA DE COINCIDENCIAS Y RESULTADOS
// ==========================================
function computeScores() {
  const s = {};

  // 1. Detectar si el usuario ha respondido a la pregunta del idioma y ha elegido "100% Español"
  // Buscamos la pregunta con el emoji del globo terráqueo 🌐
  const languageQuestionIndex = Q.findIndex(q => q.e === "🌐");
  const blocksEnglish = languageQuestionIndex !== -1 && ans[languageQuestionIndex] === 2; // Opción C (índice 2)

  Q.forEach((q, i) => {
    if (ans[i] != null && q.o[ans[i]]) {
      q.o[ans[i]].g.forEach(g => {
        // Validación crítica: si el juego existe en GAME_TAGS se procesa bajo su string exacto
        let matchedKey = Object.keys(GAME_TAGS).find(k => k.toLowerCase() === g.toLowerCase());
        let finalKey = matchedKey ? matchedKey : g;

        // 2. Si el usuario bloqueó el inglés y este juego tiene la etiqueta "only-english", lo ignoramos por completo
        const tags = GAME_TAGS[finalKey] || [];
        if (blocksEnglish && tags.includes("only-english")) {
          return; // Salta este juego, no le suma puntos
        }

        s[finalKey] = (s[finalKey] || 0) + 1;
      });
    }
  });
  return s;
}

function weightedRandom(scores) {
  const entries = Object.entries(scores);
  if (!entries.length) return [];
  entries.sort((a, b) => b[1] - a[1]);
  // Aplica ruido sólo dentro de grupos de misma puntuación para mezclarlos ligeramente
  const maxScore = entries[0][1];
  return entries.map(([game, score]) => {
    const noise = (Math.random() * 0.4) - 0.2;
    return { game, scoreReal: score, sortScore: score + noise };
  }).sort((a, b) => b.sortScore - a.sortScore);
}

// ── Estado de paginación ──
const PAGE_SIZE = 20;
let allRanked   = [];   // lista completa ordenada (para el filtro activo)
let shownCount  = 0;    // cuántas tarjetas hay pintadas ahora mismo

function showResults() {
  document.getElementById('quiz-section').style.display = 'none';
  document.getElementById('results-section').style.display = 'block';
  lastScores = computeScores();

  let totalHorror = 0, totalSummer = 0;
  Object.entries(lastScores).forEach(([g, scr]) => {
    const t = getTag(g);
    if (t.includes('horror')) totalHorror += scr;
    if (t.includes('summer')) totalSummer += scr;
  });

  const sub = document.getElementById('res-sub');
  sub.textContent = totalHorror > totalSummer
    ? "Tus respuestas resuenan con la frialdad del metal, el aislamiento y los susurros en la oscuridad. Las sombras han tejido esta selección para ti:"
    : "Buscas los rayos del sol, viajes nostálgicos y mundos que te abracen en tardes infinitas. El oráculo ha despejado los cielos para mostrarte tu rumbo:";

  renderGameList();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderGameList() {
  // Reconstruye la lista completa según el filtro activo
  const full = weightedRandom(lastScores);
  allRanked  = activeFilter === 'all'
    ? full
    : full.filter(({ game }) => getTag(game).includes(activeFilter));

  shownCount = 0;
  const list = document.getElementById('game-list');
  list.innerHTML = '';

  if (!allRanked.length) {
    const m = document.createElement('div');
    m.style.cssText = 'text-align:center;padding:2rem;color:var(--text3);font-family:Special Elite,cursive;font-size:13px;letter-spacing:1px;';
    m.textContent = activeFilter === 'all'
      ? 'Las sombras no encuentran nada aquí... empieza de cero.'
      : 'Las sombras no encuentran coincidencias con este filtro en tu destino actual...';
    list.appendChild(m);
    document.getElementById('load-more-wrap').style.display = 'none';
    document.getElementById('end-message').style.display    = 'none';
    return;
  }

  appendCards(PAGE_SIZE);
}

function appendCards(howMany) {
  const list = document.getElementById('game-list');
  const mx   = Math.max(...allRanked.map(r => r.scoreReal));
  const romanNums = ['I','II','III','IV','V','VI','VII','VIII','IX','X',
                     'XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX'];

  const slice = allRanked.slice(shownCount, shownCount + howMany);
  const globalOffset = shownCount; // rank absoluto antes de añadir este bloque

  slice.forEach(({ game, scoreReal }, i) => {
    const rank    = globalOffset + i;
    const tags    = getTag(game);
    const isHorror = tags.includes('horror');
    const pct     = mx > 0 ? Math.round((scoreReal / mx) * 100) : 0;

    const card = document.createElement('div');
    card.className = `gcard${isHorror ? ' horror-card' : ''}`;
    card.style.animationDelay = `${i * 0.03}s`;

    const rankDiv = document.createElement('div');
    rankDiv.className = `grank${rank === 0 ? ' grank-1' : rank === 1 ? ' grank-2' : rank === 2 ? ' grank-3' : ''}`;
    rankDiv.textContent = rank < romanNums.length ? romanNums[rank] : rank + 1;

    const infoDiv = document.createElement('div'); infoDiv.className = 'ginfo';
    const title   = document.createElement('div'); title.className = 'gtitle'; title.textContent = game;
    const meta    = document.createElement('div'); meta.className  = 'gmeta';

    const sc = document.createElement('span'); sc.className = 'gscore';
    sc.textContent = `${scoreReal} ${scoreReal === 1 ? 'coincidencia' : 'coincidencias'}`;
    meta.appendChild(sc);

    tags.forEach(tag => {
      if (TAG_CONFIG[tag]) {
        const badge = document.createElement('span');
        badge.className = `gbadge ${TAG_CONFIG[tag].class}`;
        badge.textContent = TAG_CONFIG[tag].text;
        meta.appendChild(badge);
      }
    });

    infoDiv.appendChild(title); infoDiv.appendChild(meta);

    const bw  = document.createElement('div'); bw.className = 'gbar-wrap';
    const bar = document.createElement('div');
    bar.className = `gbar ${isHorror ? 'gbar-horror' : 'gbar-normal'}`;
    bar.style.width = `${pct}%`;
    bw.appendChild(bar);

    card.appendChild(rankDiv); card.appendChild(infoDiv); card.appendChild(bw);
    list.appendChild(card);
  });

  shownCount += slice.length;
  updatePaginationUI();
}

function updatePaginationUI() {
  const remaining = allRanked.length - shownCount;
  const wrap      = document.getElementById('load-more-wrap');
  const endMsg    = document.getElementById('end-message');
  const countSpan = document.getElementById('lm-count');

  if (remaining > 0) {
    const next = Math.min(remaining, PAGE_SIZE);
    countSpan.textContent = `(${shownCount} de ${allRanked.length} — ${next} más)`;
    wrap.style.display   = 'block';
    endMsg.style.display = 'none';
  } else {
    wrap.style.display   = 'none';
    endMsg.style.display = shownCount > PAGE_SIZE ? 'block' : 'none';
  }
}

function loadMore() {
  const btn = document.getElementById('load-more-btn');
  btn.disabled = true;
  const list = document.getElementById('game-list');
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
  ['all', 'summer', 'horror', 'cozy', 'strategy', 'rpg', 'cyberpunk'].forEach(f => {
    const btn = document.getElementById(`filter-${f}`);
    if (!btn) return;
    btn.className = 'filter-btn';
    if (f === activeFilter) {
      if (f === 'horror') btn.classList.add('f-horror');
      else if (f === 'summer') btn.classList.add('f-summer');
      else if (f === 'cozy') btn.classList.add('f-cozy');
      else if (f === 'strategy') btn.classList.add('f-strategy');
      else if (f === 'rpg') btn.classList.add('f-rpg');
      else if (f === 'cyberpunk') btn.classList.add('f-cyberpunk');
      else btn.classList.add('active');
    }
  });
}

function rerollResults() {
  document.getElementById('game-list').style.opacity = '0.3';
  setTimeout(() => { 
    renderGameList(); 
    document.getElementById('game-list').style.opacity = '1'; 
  }, 300);
}

function restart() {
  cur = 0; 
  ans = new Array(Q.length).fill(null); 
  activeFilter = 'all';
  allRanked  = [];
  shownCount = 0;
  document.getElementById('load-more-wrap').style.display = 'none';
  document.getElementById('end-message').style.display    = 'none';
  document.getElementById('quiz-section').style.display = 'block';
  document.getElementById('results-section').style.display = 'none';
  render();
}

// Iniciar aplicación al cargar
render();