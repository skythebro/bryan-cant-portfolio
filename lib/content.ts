export const profile = {
  name: "Bryan Cant",
  aliases: ["Sky", "SkyBreeze"],
  location: "Belgium · Antwerp",
  region: "Antwerp",
  role: "Junior software engineer",
  headline:
    "I automate logistics data in C# and ship product UIs that people actually click. In-game, on the desktop, and on the web.",
  status: "Available immediately",
  seeking:
    "Junior software / fullstack / Java / .NET / React. Hybrid OK.",
  languages: [
    { code: "NL", label: "Dutch", level: "Fluent" },
    { code: "EN", label: "English", level: "Fluent" },
    { code: "FR", label: "French", level: "Average" },
  ],
  photo: {
    src: "/skythebro.png",
    alt: "Skythebro avatar for Bryan Cant. A chibi character used as Sky's public identity.",
  },
  email: "bryancant@live.be",
  links: {
    github: "https://github.com/skythebro",
    githubSchool: "https://github.com/SkyKDG",
    linkedin: "https://www.linkedin.com/in/bryan-cant-a42b68348",
    nexus: "https://www.nexusmods.com/users/35213225",
    nexusNext: "https://next.nexusmods.com/profile/therealskybro",
    thunderstore: "https://thunderstore.io/c/v-rising/p/Skies/",
    kofi: "https://ko-fi.com/realskye",
  },
  nexusAuthor: "therealskybro",
  nexusUserId: "35213225",
} as const;

export const heroTags = [
  "C#",
  "Java",
  "TypeScript",
  "React",
  ".NET",
  "Python",
  "BepInEx",
  "PySide6",
] as const;

export const proofStrip = [
  { value: "~50.8k", label: "unique Nexus downloads" },
  { value: "~16", label: "Nexus mods shipped" },
  { value: "11,165", label: "Better Movement unique DLs" },
  { value: "1.5.3", label: "Icarus Workshop" },
] as const;

export type Persona = "systems" | "mods" | "ui";

export type Metric = {
  value: string;
  label: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectShot = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  id: string;
  personas: Persona[];
  title: string;
  kicker: string;
  summary: string;
  impact?: string;
  highlights?: string[];
  tags: string[];
  metrics?: Metric[];
  links: ProjectLink[];
  shots?: ProjectShot[];
  status?: "wip" | "shipped";
  featured?: boolean;
  priority?: number;
  badge?: string;
};

export const projects: Project[] = [
  {
    id: "steinweg",
    personas: ["systems"],
    title: "Steinweg logistics automation",
    kicker: "C. Steinweg Belgium NV · Junior IT · Feb–Jul 2026",
    summary:
      "Problem: logistics data lived in messy, repeating streams. Architecture: C#, VBA, and Power Query jobs that extract, reshape, and hand the data off. Impact: fewer manual transfers, software first — AD/GPO/RDSH, Meraki, and Zscaler sat beside that work, not in front of it.",
    tags: ["C#", "VBA", "Power Query", "SQL", "Windows"],
    links: [],
    status: "shipped",
    priority: 36,
  },
  {
    id: "apvine",
    personas: ["systems"],
    title: "Document generation automation",
    kicker: "Apvine · Internship · Mar–Jun 2025",
    summary:
      "Functional analysis in an Agile team, then Java and Mendix to automate document generation. Process first, then the smallest implementation that actually runs.",
    tags: ["Java", "Mendix", "Functional analysis", "Agile"],
    links: [],
    status: "shipped",
  },
  {
    id: "phygital",
    personas: ["systems", "ui"],
    title: "Phygital youth participation",
    kicker: "KdG Integratieproject · .NET + TypeScript",
    summary:
      "Team-built platform so young people can file ideas and track them, while municipalities run camera-assisted questionnaires. Hierarchy: platform → subplatform → theme → survey. Roles for head admin, managers, and facilitators. Public snapshot is .NET with a TypeScript client (SignalR, on-device camera).",
    tags: [".NET", "C#", "TypeScript", "SignalR"],
    links: [{ label: "GitHub", href: "https://github.com/skythebro/IP1KDG" }],
    status: "shipped",
  },
  {
    id: "java-kafka",
    personas: ["systems"],
    title: "Java backend, REST + Kafka",
    kicker: "KdG team coursework",
    summary:
      "Team Java backend with REST endpoints and Kafka-backed analytics. Coursework, not a product launch — real service boundaries and a message pipeline, not a tutorial CRUD page.",
    tags: ["Java", "REST", "Kafka"],
    links: [],
    status: "shipped",
  },
  {
    id: "better-ui",
    personas: ["ui", "mods"],
    title: "Better UI",
    kicker: "Nexus 111 · therealskybro · BepInEx 5 Mono + Harmony",
    summary:
      "Inventory and equipment UX — search, junk, rarity, tooltips, overlays, keyboard and controller. Extra Loadouts live here (`ExtraLoadoutPagesEnabled`), not as a separate product. Socket and transmog overlays on gear.",
    highlights: [
      "Extra Loadouts off by default: +4 / +8 / +12 rows plus Quick Slots 2, stored per character.",
      "Search, junk marking, rarity, tooltips, stat overlays — KBM and controller.",
      "Socket and transmog overlays on the equipment sheet.",
    ],
    tags: ["C#", "BepInEx 5 Mono", "Harmony", "Unity UI"],
    links: [
      {
        label: "Nexus 111",
        href: "https://www.nexusmods.com/taintedgrailthefallofavalon/mods/111",
      },
    ],
    shots: [
      {
        src: "/foa/betterui-111-rarity-colors.jpg",
        alt: "Better UI inventory grid with rarity-tinted tiles and stat overlays on gear and consumables.",
        caption: "Rarity colors + stat overlays",
      },
      {
        src: "/foa/betterui-111-potion-subcategories.jpg",
        alt: "Better UI potion bag split into Health, Mana, Stamina, and Miscellaneous rows.",
        caption: "Potion bag subcategories",
      },
    ],
    status: "shipped",
    featured: true,
    priority: 40,
    badge: "UX proof",
  },
  {
    id: "avalon-manager",
    personas: ["mods", "ui"],
    title: "Avalon Mod Manager",
    kicker: "Nexus 90 · Options → MODS",
    summary:
      "In-game Options → MODS tab. Live BepInEx config: auto-discovers ConfigEntries, nested groups, native PrefOption UI. Sky’s other FoA mods use it so players stay out of .cfg files.",
    highlights: [
      "Auto-discovers ConfigEntries — no hand-edited .cfg for players.",
      "Nested groups rendered with native PrefOption widgets.",
      "Shared settings surface for Better UI, Movement, Atlas, Wyrd Sight, Mounts.",
    ],
    tags: ["C#", "BepInEx 5 Mono", "Harmony", "Unity UI"],
    links: [
      {
        label: "Nexus 90",
        href: "https://www.nexusmods.com/taintedgrailthefallofavalon/mods/90",
      },
    ],
    shots: [
      {
        src: "/foa/amm-90-updated-look.jpg",
        alt: "Avalon Mod Manager Options MODS tab listing nested PrefOption rows for installed FoA mods.",
        caption: "Options → MODS — PrefOption rows",
      },
      {
        src: "/foa/amm-90-tooltips.jpg",
        alt: "Avalon Mod Manager native tooltip explaining fall-damage modes next to sliders and toggles.",
        caption: "Native setting tooltips",
      },
    ],
    status: "shipped",
    featured: true,
    priority: 38,
    badge: "UX proof",
  },
  {
    id: "avalon-atlas",
    personas: ["mods", "ui"],
    title: "Avalon Atlas",
    kicker: "Nexus 265 · minimap / HUD / FOW",
    summary:
      "Minimap on authored overworld maps, interior top-down camera, fog of war per character, entity radar. F8 opens a HUD layout editor.",
    highlights: [
      "Authored overworld maps, not a generic radar blob.",
      "Interior top-down cam + per-character FOW.",
      "F8 HUD layout editor — players place the map, not the modder.",
    ],
    tags: ["C#", "BepInEx 5 Mono", "Harmony", "HUD"],
    links: [
      {
        label: "Nexus 265",
        href: "https://www.nexusmods.com/taintedgrailthefallofavalon/mods/265",
      },
    ],
    shots: [
      {
        src: "/foa/atlas-265-overworld-minimap.jpg",
        alt: "Avalon Atlas circular overworld minimap on a castle courtyard with authored map geometry.",
        caption: "Authored overworld minimap",
      },
      {
        src: "/foa/atlas-265-hud-edit-mode.jpg",
        alt: "Avalon Atlas F8 HUD layout editor showing quest tracker, bounty and trespassing bars, and compass minimap frames.",
        caption: "F8 HUD layout editor",
      },
    ],
    status: "shipped",
    featured: true,
    priority: 36,
    badge: "UX proof",
  },
  {
    id: "appearance-mirror",
    personas: ["ui", "mods"],
    title: "Appearance Mirror",
    kicker: "Nexus 313 · housing-table appearance",
    summary:
      "Mid-game character creator from a housing table. The prompt splits Decor vs Appearance.",
    highlights: [
      "Housing-table entry: Decor vs Appearance.",
      "Ships from TaintedGrailModWorkspace as Nexus 313.",
    ],
    tags: ["C#", "BepInEx 5 Mono", "Harmony", "Unity UI"],
    links: [
      {
        label: "Nexus 313",
        href: "https://www.nexusmods.com/taintedgrailthefallofavalon/mods/313",
      },
    ],
    status: "shipped",
    priority: 30,
  },
  {
    id: "wyrd-sight",
    personas: ["mods", "ui"],
    title: "Wyrd Sight",
    kicker: "Nexus 94 · loot / plant / storage glow",
    summary:
      "Glow, spotlight, and holographic outlines for loot, containers, corpses, plants, and ores. Containers take rarity color. Per-category radius and color, plus pulse and particles. Avalon Mod Manager plus live cfg reload.",
    highlights: [
      "Rarity-colored containers; per-category radius and color.",
      "Pulse and particles on top of glow / spotlight / holo outlines.",
      "AMM settings and live cfg reload.",
    ],
    tags: ["C#", "BepInEx 5 Mono", "Harmony"],
    links: [
      {
        label: "Nexus 94",
        href: "https://www.nexusmods.com/taintedgrailthefallofavalon/mods/94",
      },
    ],
    shots: [
      {
        src: "/foa/wyrd-94-rarity-colors.jpg",
        alt: "Wyrd Sight rarity-colored glows on shelf items inside a wooden interior.",
        caption: "Rarity-colored loot glow",
      },
    ],
    status: "shipped",
    priority: 24,
    badge: "UX proof",
  },
  {
    id: "better-mounts",
    personas: ["mods", "ui"],
    title: "Better Mounts",
    kicker: "Nexus 101 · character-sheet Mount tab",
    summary:
      "Bonding, breeding, stamina, and stables. A Mount tab on the character sheet. Totem fast-travel vs Stable Actions, plus DigOut / totem dialogue.",
    highlights: [
      "Mount tab on the character sheet — not a hidden debug pane.",
      "Totem fast-travel vs Stable Actions are separate jobs.",
      "DigOut and totem dialogue.",
    ],
    tags: ["C#", "BepInEx 5 Mono", "Harmony"],
    links: [
      {
        label: "Nexus 101",
        href: "https://www.nexusmods.com/taintedgrailthefallofavalon/mods/101",
      },
    ],
    shots: [
      {
        src: "/foa/mounts-101-inventory-mount-menu.jpg",
        alt: "Better Mounts in-world mount prompt: pet, rename, stable, or leave, with bond and stamina on a saddled white horse.",
        caption: "In-world mount actions",
      },
    ],
    status: "shipped",
    priority: 20,
    badge: "UX proof",
  },
  {
    id: "better-movement",
    personas: ["mods", "ui"],
    title: "Better Movement",
    kicker: "Nexus 102 · scrape ~30 Aug 2026",
    summary:
      "Sprint, slide, dash, and jump overhaul with presets. In-game settings through Avalon Mod Manager.",
    tags: ["C#", "BepInEx 5 Mono", "Harmony"],
    metrics: [
      { value: "11,165", label: "unique DLs" },
      { value: "177", label: "endorsements" },
    ],
    links: [
      {
        label: "Nexus 102",
        href: "https://www.nexusmods.com/taintedgrailthefallofavalon/mods/102",
      },
    ],
    shots: [
      {
        src: "/foa/movement-102-slidin.jpg",
        alt: "Better Movement slide: the player character low on a fog-red dirt path toward a distant ridge.",
        caption: "Slide on the overworld path",
      },
    ],
    status: "shipped",
    priority: 18,
  },
  {
    id: "interior-bonfire",
    personas: ["mods", "ui"],
    title: "Interior Bonfire",
    kicker: "Nexus 314 · rest-only indoor camp",
    summary:
      "Rest-only indoor portable camp. No fast-travel pin.",
    tags: ["C#", "BepInEx 5 Mono", "Harmony"],
    links: [
      {
        label: "Nexus 314",
        href: "https://www.nexusmods.com/taintedgrailthefallofavalon/mods/314",
      },
    ],
    status: "shipped",
    priority: 14,
  },
  {
    id: "nexus-suite",
    personas: ["mods"],
    title: "Nexus suite — therealskybro",
    kicker: "Tainted Grail: FoA · BepInEx 5 Mono + Harmony",
    summary:
      "About 16 published mods, ~50.8k unique downloads across the account. FoA catalog ships from a private TaintedGrailModWorkspace. Same C# / BepInEx 5 Mono / Harmony toolchain.",
    tags: ["C#", "BepInEx 5 Mono", "Harmony", "Git"],
    metrics: [
      { value: "~16", label: "mods" },
      { value: "~50.8k", label: "unique DLs" },
    ],
    links: [
      { label: "Nexus profile", href: profile.links.nexus },
    ],
    status: "shipped",
  },
  {
    id: "thunderstore",
    personas: ["mods"],
    title: "V Rising — Thunderstore team Skies",
    kicker: "Server + client BepInEx mods",
    summary:
      "Maintained and updated community mods through Gloomrot / 1.0 / Oakveil. BloodRefill (feed-kill blood rules), ResourceStashWithdrawal (middle-click recipe pulls from stash + tooltip counts), PotionsHaveContainers (empty flasks come back), VComforts (QoL pack). Source lives across skythebro/VMods and per-mod repos.",
    tags: ["C#", "BepInEx", "V Rising"],
    metrics: [
      { value: "~11k", label: "Stash Withdrawal" },
      { value: "~10k", label: "BloodRefill" },
      { value: "~6k", label: "Potions" },
      { value: "~2.8k", label: "VComforts" },
    ],
    links: [
      { label: "Thunderstore", href: profile.links.thunderstore },
      { label: "VMods", href: "https://github.com/skythebro/VMods" },
    ],
    status: "shipped",
  },
  {
    id: "icarus-workshop",
    personas: ["mods", "ui", "systems"],
    title: "Icarus Workshop",
    kicker: "Desktop + server agent · PySide6 · v1.5.3",
    summary:
      "Windows mod manager for Icarus: merge EXMOD packs, edit, pull the community database, share profiles, stage UE4SS. Optional IMM Server Agent on a dedicated box. GitHub Actions ships onedir zips; source stays private, releases are public.",
    tags: ["Python", "PySide6", "GitHub Actions"],
    metrics: [{ value: "1.5.3", label: "latest release" }],
    links: [
      {
        label: "Releases",
        href: "https://github.com/SkyKDG/imm-workshop-releases/releases/tag/v1.5.3",
      },
    ],
    status: "shipped",
  },
  {
    id: "avalon-coop",
    personas: ["systems", "mods"],
    title: "AvalonCoop / tgfoa-multiplayer",
    kicker: "Unofficial FoA co-op · SkyKDG · listen-server",
    summary:
      "Unofficial co-op for Tainted Grail: FoA (Unity). C# BepInEx + HarmonyX listen-server: the host authors world state; guests are clients. Modular net — LiteNetLib LAN/loopback now (swappable ITransport); SteamNetworkingSockets / P2P / lobbies planned Phase 2.",
    highlights: [
      "Scene-free harness: connect → authority → remote avatar @ 20 Hz → local-only input → anim relay.",
      "Route steps 0–5 Proven. Next: host-auth combat hits, then inventory, NPC/world, Steam, playable vertical slice.",
      "Host/Join lobby + MP-tagged saves. Remotes are TPP ghost views, not a second Hero.",
      "Per-player flavor dialogue vs host-auth quest talks.",
    ],
    tags: ["C#", "BepInEx", "HarmonyX", "LiteNetLib", "Unity"],
    links: [
      { label: "SkyKDG", href: profile.links.githubSchool },
    ],
    status: "wip",
    featured: true,
    priority: 34,
    badge: "Systems",
  },
  {
    id: "workspaces",
    personas: ["mods"],
    title: "Active C# workspaces",
    kicker: "TaintedGrailModWorkspace (private) · BigAmbitionsWorkspace",
    summary:
      "Confirmed FoA Nexus mods ship from a private TaintedGrailModWorkspace (BepInEx 5 Mono + Harmony), including Appearance Mirror 313 and Interior Bonfire 314. Unpublished scaffolding — not claimed live: AvalonComfort, AvalonUtilitySpells, DualTwoHanded. BigAmbitionsWorkspace is the other C# bench.",
    tags: ["C#", "BepInEx 5 Mono", "Harmony"],
    links: [
      { label: "Nexus therealskybro", href: profile.links.nexus },
    ],
    status: "wip",
  },
  {
    id: "care-ui",
    personas: ["ui"],
    title: "Care-platform UI",
    kicker: "KdG exam project · React + TypeScript",
    summary:
      "React/TypeScript interface for patient help, room moves, medication, and notes. Shipped with a written usability report (help-button findability, room transfer, prescriptions, rich-text notes). School work, treated like a product.",
    tags: ["React", "TypeScript", "Usability"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/skythebro/KDGBryanReactWebsite",
      },
    ],
    status: "shipped",
  },
  {
    id: "st-maria",
    personas: ["ui"],
    title: "Graphic & web design training",
    kicker: "St-Maria · 2020–2021",
    summary:
      "One year of graphic design and web design before the informatics bachelor. Layout, type, and interface structure — the reason Better UI and Workshop look like products, not debug overlays.",
    tags: ["Graphic design", "Web design"],
    links: [],
    status: "shipped",
  },
];

export const stackDomains = [
  {
    id: "languages",
    title: "Languages",
    items: ["C#", "Java", "TypeScript / JavaScript", "Python", "SQL"],
  },
  {
    id: "frontend",
    title: "Frontend / UI",
    items: [
      "React",
      "HTML / CSS",
      "PySide6",
      "Game UI injection",
      "Unity PrefOption / HUD",
    ],
  },
  {
    id: "modding",
    title: "Low-level / modding",
    items: [
      "BepInEx 5 Mono",
      "Harmony / HarmonyX",
      "Unity plugin architecture",
      "LiteNetLib (swappable ITransport)",
      "Git release pipelines",
    ],
  },
  {
    id: "tooling",
    title: "Tooling",
    items: ["Git", "Docker (basis)", "CI (GitHub Actions)"],
  },
  {
    id: "infra",
    title: "Infra (secondary)",
    items: ["Windows / AD basics", "Networking"],
    note: "Present, not the lead.",
  },
] as const;

export type TimelineItem = {
  id: string;
  kind: "edu" | "job" | "release";
  when: string;
  title: string;
  detail: string;
};

export const timeline: TimelineItem[] = [
  {
    id: "workshop-153",
    kind: "release",
    when: "2026-09",
    title: "Icarus Workshop 1.5.3",
    detail:
      "Desktop manager + server agent. Nexus sign-in, Credential Manager tokens, GitHub Actions zips.",
  },
  {
    id: "steinweg-job",
    kind: "job",
    when: "2026-02 → 2026-07",
    title: "Junior IT — C. Steinweg Belgium NV",
    detail:
      "C# / VBA / Power Query on logistics data. AD, GPO, RDSH, Meraki, Zscaler as supporting ops.",
  },
  {
    id: "kdg-grad",
    kind: "edu",
    when: "2021–2025",
    title: "KdG — Bachelor Toegepaste Informatica",
    detail:
      "Applicatieontwikkeling. Graduated with distinction (onderscheiding).",
  },
  {
    id: "apvine-job",
    kind: "job",
    when: "2025-03 → 2025-06",
    title: "Internship — Apvine",
    detail: "Functional analysis, Agile, Java/Mendix document automation.",
  },
  {
    id: "foa-mods",
    kind: "release",
    when: "2025",
    title: "FoA Nexus catalog",
    detail:
      "Confirmed Nexus: AMM 90, Wyrd Sight 94, Better Mounts 101, Better Movement 102 (11,165 unique / 177 endorsements, scrape ~30 Aug 2026), Better UI 111, Avalon Atlas 265, Appearance Mirror 313, Interior Bonfire 314.",
  },
  {
    id: "vrising",
    kind: "release",
    when: "2023–2025",
    title: "V Rising — team Skies",
    detail:
      "Thunderstore updates through Gloomrot and 1.0. BloodRefill, stash withdrawal, potions, VComforts.",
  },
  {
    id: "st-maria-edu",
    kind: "edu",
    when: "2020–2021",
    title: "St-Maria — Graphic Design & Web Design",
    detail: "Visual and interface training immediately before the bachelor.",
  },
  {
    id: "mater",
    kind: "edu",
    when: "2020",
    title: "Mater Salvatoris — Ondernemen en IT",
    detail: "Secondary-track ondernemen & IT.",
  },
];

/** Lead/featured card only when this desk is the project's primary persona. */
export function isFeaturedLead(project: Project, persona: Persona) {
  return Boolean(project.featured) && project.personas[0] === persona;
}

export const personas: {
  id: Persona;
  label: string;
  hint: string;
}[] = [
  {
    id: "systems",
    label: "Systems & Full-Stack",
    hint: "Listen-server, integrations, backends",
  },
  {
    id: "mods",
    label: "Mods, Tools & RE",
    hint: "BepInEx, desktop tooling, live users",
  },
  {
    id: "ui",
    label: "UI & Product Design",
    hint: "Better UI, AMM, Atlas. With shots",
  },
];
