// Numbers last checked on Nexus, Thunderstore and GitHub: 17 Nov 2026.
export const statsDate = "November 2026";

export const profile = {
  name: "Bryan Cant",
  aliases: ["Sky", "SkyBreeze"],
  role: "Junior software developer",
  location: "Antwerp, Belgium",
  intro:
    "I'm a junior developer from Antwerp. I mostly write C# and .NET, but I'm just as comfortable in Java, TypeScript, Python or Rust. In my free time I make mods and tools for games, and some of them are used by thousands of players.",
  status: "Looking for a junior developer job, available right away.",
  spokenLanguages: "I speak Dutch and English fluently, and some French.",
  photo: {
    src: "/skythebro.png",
    alt: "Sky's avatar, a chibi character",
  },
  email: "bryancant@live.be",
  links: {
    github: "https://github.com/skythebro",
    githubSecond: "https://github.com/SkyKDG",
    linkedin: "https://www.linkedin.com/in/bryan-cant-a42b68348",
    nexus: "https://www.nexusmods.com/profile/therealskybro/mods",
    thunderstore: "https://thunderstore.io/c/v-rising/p/Skies/",
    kofi: "https://ko-fi.com/realskye",
  },
} as const;

export const stats = [
  { value: "60.4k", label: "unique downloads on Nexus" },
  { value: "31k", label: "downloads on Thunderstore" },
  { value: "20+", label: "mods and tools released" },
] as const;

export type Shot = {
  src: string;
  alt: string;
  caption: string;
};

export type Link = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  context: string;
  description: string;
  stack: string[];
  numbers?: string;
  links: Link[];
  shots?: Shot[];
};

export const featured: Project[] = [
  {
    id: "avalon-mod-manager",
    title: "Avalon Mod Manager",
    context: "Tainted Grail: Fall of Avalon",
    description:
      "Mods for this game keep their settings in config files you have to edit by hand. This adds a Mods tab to the game's own options menu and builds the settings screen for every installed mod automatically. All my other Tainted Grail mods use it.",
    stack: ["C#", "BepInEx", "Harmony", "Unity UI"],
    numbers: "16.8k unique downloads · 338 endorsements",
    links: [
      {
        label: "Nexus",
        href: "https://www.nexusmods.com/taintedgrailthefallofavalon/mods/90",
      },
    ],
    shots: [
      {
        src: "/foa/amm-90-updated-look.jpg",
        alt: "The Mods tab in the game's options menu, listing settings for installed mods",
        caption: "The Mods tab in the game's options menu",
      },
      {
        src: "/foa/amm-90-tooltips.jpg",
        alt: "A tooltip explaining a setting, styled like the game's own tooltips",
        caption: "Settings get the game's own tooltips",
      },
    ],
  },
  {
    id: "nestmates",
    title: "Nestmates",
    context: "IRON NEST: Heavy Turret Simulator",
    description:
      "Online co-op for a game built for one player. Up to five people crew the same turret over Steam: one calls the bearing on the map, another reloads, someone keeps the diesel going. Every gun, lever, dial and enemy is synced, the host runs the mission, and friends can join a mission that's already going. It's open source.",
    stack: ["C#", "BepInEx 6", "IL2CPP", "Steam networking"],
    numbers: "212 unique downloads · v1.0.3 · MIT",
    links: [
      { label: "GitHub", href: "https://github.com/skythebro/Nestmates" },
      { label: "Nexus", href: "https://www.nexusmods.com/ironnest/mods/90" },
    ],
    shots: [
      {
        src: "/shots/nestmates-crew.jpg",
        alt: "A crew member at the turret's elevation controls, with their name and station shown above them",
        caption: "A crewmate at the elevation controls",
      },
      {
        src: "/shots/nestmates-map.jpg",
        alt: "A crewmate standing at the tactical map table with bearing lines drawn on it",
        caption: "Calling the bearing on the tactical map",
      },
      {
        src: "/shots/nestmates-lobby.jpg",
        alt: "The Nestmates lobby window over the game's main menu, showing the lobby code, invite buttons and crew list",
        caption: "The co-op lobby with Steam invites",
      },
    ],
  },
  {
    id: "restored-land-coop",
    title: "Restored Land Co-op",
    context: "Dying Light: The Beast",
    description:
      "Co-op for the game's Restored Land mode, for up to four players. You join a friend the same ways the base game allows: the pause menu, a Steam invite or the public games list. Zombies you kill stay dead for everyone, late joiners included, and cleared areas and the map are shared while loot stays per player. I lost the original code, so version 2 is a full rebuild.",
    stack: ["ASI mod", "Reverse engineering", "Game networking"],
    numbers: "1.8k unique downloads · 21 endorsements · v2.0.1",
    links: [
      {
        label: "Nexus",
        href: "https://www.nexusmods.com/dyinglightthebeast/mods/821",
      },
    ],
    shots: [
      {
        src: "/shots/restoredland-coop.jpg",
        alt: "A player standing on a hill in the Restored Land overlooking a village and mountains",
        caption: "Playing the Restored Land in co-op",
      },
      {
        src: "/shots/restoredland-public-games.jpg",
        alt: "The game's public games list with a Restored Land co-op game at the top",
        caption: "Restored Land games in the public games list",
      },
      {
        src: "/shots/restoredland-shared-map.jpg",
        alt: "The in-game map of Old Town with the explored area revealed",
        caption: "The guest sees the host's explored map",
      },
    ],
  },
  {
    id: "better-movement",
    title: "Better Movement",
    context: "Tainted Grail: Fall of Avalon",
    description:
      "Reworks sprinting, sliding, dashing and jumping so moving around feels less stiff. It comes with a few presets, and every value can be tweaked in game.",
    stack: ["C#", "BepInEx", "Harmony"],
    numbers: "13.1k unique downloads · 223 endorsements",
    links: [
      {
        label: "Nexus",
        href: "https://www.nexusmods.com/taintedgrailthefallofavalon/mods/102",
      },
    ],
    shots: [
      {
        src: "/foa/movement-102-slidin.jpg",
        alt: "The player sliding down a dirt path",
        caption: "Sliding down a path",
      },
    ],
  },
  {
    id: "nms-rs",
    title: "NMS.rs",
    context: "No Man's Sky",
    description:
      "A mod loader and a pack of quality-of-life mods, written in Rust. It brings bigger inventory grids, crafting straight from your storage, item search and more. A small manager app installs and updates everything, and each change can be switched on or off in game. I rebuilt it from scratch after the older Python version.",
    stack: ["Rust", "Reverse engineering"],
    numbers: "801 unique downloads · v4.0.6",
    links: [
      { label: "GitHub", href: "https://github.com/skythebro/NMS.rs" },
      { label: "Nexus", href: "https://www.nexusmods.com/nomanssky/mods/4600" },
    ],
    shots: [
      {
        src: "/shots/nmsrs-manager.jpg",
        alt: "The NMS.rs manager app with a list of mods, each with an on/off switch",
        caption: "The manager app",
      },
      {
        src: "/shots/nmsrs-ingame-settings.jpg",
        alt: "The Mods page in No Man's Sky's options menu with settings for Picker Tweaks and Refiner Guard",
        caption: "Every mod has its own settings in game",
      },
    ],
  },
  {
    id: "wyrd-sight",
    title: "Wyrd Sight",
    context: "Tainted Grail: Fall of Avalon",
    description:
      "Makes loot, containers, plants and ore glow so you stop walking past them. Colours show rarity, and you can set the range and colour for each kind of item.",
    stack: ["C#", "BepInEx", "Harmony"],
    numbers: "10.8k unique downloads · 204 endorsements",
    links: [
      {
        label: "Nexus",
        href: "https://www.nexusmods.com/taintedgrailthefallofavalon/mods/94",
      },
    ],
    shots: [
      {
        src: "/foa/wyrd-94-rarity-colors.jpg",
        alt: "Items on a shelf glowing in their rarity colours",
        caption: "Items glow in their rarity colour",
      },
    ],
  },
  {
    id: "better-ui",
    title: "Better UI",
    context: "Tainted Grail: Fall of Avalon",
    description:
      "A bunch of inventory improvements: search, junk marking, rarity colours, clearer tooltips and extra loadout pages. It works with mouse and keyboard as well as a controller.",
    stack: ["C#", "BepInEx", "Harmony", "Unity UI"],
    numbers: "8.4k unique downloads · 170 endorsements",
    links: [
      {
        label: "Nexus",
        href: "https://www.nexusmods.com/taintedgrailthefallofavalon/mods/111",
      },
    ],
    shots: [
      {
        src: "/foa/betterui-111-rarity-colors.jpg",
        alt: "Inventory grid with items tinted by rarity and stats shown on each item",
        caption: "Rarity colours and stats on items",
      },
      {
        src: "/foa/betterui-111-potion-subcategories.jpg",
        alt: "Potion bag split into health, mana, stamina and other rows",
        caption: "Potions sorted into groups",
      },
    ],
  },
  {
    id: "icarus-workshop",
    title: "Icarus Workshop",
    context: "Icarus · desktop app",
    description:
      "A mod manager for Icarus. It merges several mods into one file the game can load, lets you edit mods, download from the community database and share your mod list with friends. There's also a small companion app for people who run a dedicated server.",
    stack: ["Python", "PySide6", "GitHub Actions"],
    numbers: "Latest release v1.5.4",
    links: [
      {
        label: "Download",
        href: "https://github.com/SkyKDG/imm-workshop-releases/releases/latest",
      },
      { label: "Nexus", href: "https://www.nexusmods.com/icarus/mods/304" },
    ],
    shots: [
      {
        src: "/shots/workshop-downloads.jpg",
        alt: "Icarus Workshop's download page, a searchable list of community mods with version and status columns",
        caption: "Browsing and downloading mods",
      },
    ],
  },
  {
    id: "avalon-atlas",
    title: "Avalon Atlas",
    context: "Tainted Grail: Fall of Avalon",
    description:
      "A minimap that uses the game's own hand-drawn maps, with fog of war and a top-down view inside buildings. Press F8 to drag the map and the rest of the HUD wherever you want.",
    stack: ["C#", "BepInEx", "Harmony"],
    numbers: "1.2k unique downloads · 24 endorsements",
    links: [
      {
        label: "Nexus",
        href: "https://www.nexusmods.com/taintedgrailthefallofavalon/mods/265",
      },
    ],
    shots: [
      {
        src: "/foa/atlas-265-overworld-minimap.jpg",
        alt: "Round minimap in the corner of the screen showing a castle courtyard",
        caption: "The minimap in the overworld",
      },
      {
        src: "/foa/atlas-265-hud-edit-mode.jpg",
        alt: "HUD edit mode with outlined boxes around the quest tracker, bars and minimap",
        caption: "Moving the HUD around with F8",
      },
    ],
  },
  {
    id: "better-mounts",
    title: "Better Mounts",
    context: "Tainted Grail: Fall of Avalon",
    description:
      "Gives your horse more to do: bonding, breeding, stamina and stables, plus a Mount tab on the character screen.",
    stack: ["C#", "BepInEx", "Harmony"],
    numbers: "2.6k unique downloads · 44 endorsements",
    links: [
      {
        label: "Nexus",
        href: "https://www.nexusmods.com/taintedgrailthefallofavalon/mods/101",
      },
    ],
    shots: [
      {
        src: "/foa/mounts-101-inventory-mount-menu.jpg",
        alt: "A white horse with a menu to pet, rename or stable it",
        caption: "Interacting with your horse",
      },
    ],
  },
  {
    id: "take-home",
    title: "Take Home",
    context: "Icarus",
    description:
      "Normally Icarus only lets you bring workshop items back to the space station and deletes everything else. With this you can take tools, resources, food or gear home too, either when you leave a mission or through the exotic delivery pod. You pick which kinds of items come along.",
    stack: ["Game data modding"],
    numbers: "352 unique downloads · 7 endorsements",
    links: [{ label: "Nexus", href: "https://www.nexusmods.com/icarus/mods/306" }],
    shots: [
      {
        src: "/shots/takehome-delivery-pod.jpg",
        alt: "The exotic delivery pod screen with crafted items and tools loaded as cargo",
        caption: "Sending crafted items home in the delivery pod",
      },
    ],
  },
];

// In priority order. The Hytale mods come first while they're my main focus.
export const inProgress: Project[] = [
  {
    id: "hytale-mounts",
    title: "Hytale mounts mod",
    context: "Hytale · private, work in progress",
    description:
      "Makes mounts more interesting. Every mount gets its own quirks, you can breed them, and there's a lot more variety between them.",
    stack: ["Java", "Hytale modding"],
    links: [],
  },
  {
    id: "hytale-nemesis",
    title: "Hytale nemesis system",
    context: "Hytale · private, work in progress",
    description:
      "A nemesis system for the Hytale world, in the style of Shadow of War. You fight NPCs the way you do in that game, or other players if you're up for PvP.",
    stack: ["Java", "Hytale modding"],
    links: [],
  },
  {
    id: "avalon-coop",
    title: "AvalonCoop",
    context: "Tainted Grail: Fall of Avalon",
    description:
      "Unofficial online co-op for a game that was only made for one player. The host runs the world and other players join as clients. Connecting, syncing players and animations already work. Next up are combat, inventories and NPCs, and after that Steam lobbies.",
    stack: ["C#", "BepInEx", "HarmonyX", "LiteNetLib", "Networking"],
    links: [],
  },
];

export type SmallProject = {
  title: string;
  context: string;
  description: string;
  href: string;
};

export const smaller: SmallProject[] = [
  {
    title: "StationeersXR",
    context: "Stationeers · C# · VR",
    description:
      "I made this so my dad could play Stationeers in VR. Your hands follow the controllers, menus work with a laser pointer, and your inventory sits on your wrist like a watch.",
    href: "https://www.nexusmods.com/stationeers/mods/19",
  },
  {
    title: "Riding Club Championships server",
    context: "Python · reverse engineering",
    description:
      "The official servers shut down, so I figured out how the game talks to them and wrote my own server to make it playable again.",
    href: "https://github.com/skythebro/Riding-Club-Championships-Server-Emulator",
  },
  {
    title: "V Rising mods",
    context: "C# · Thunderstore",
    description:
      "BloodRefill, ResourceStashWithdrawal, PotionsHaveContainers and VComforts. I kept them working through the game's big updates. 31k downloads together.",
    href: "https://thunderstore.io/c/v-rising/p/Skies/",
  },
  {
    title: "DYSMANTLE save editor",
    context: "Python",
    description: "A save editor for DYSMANTLE.",
    href: "https://github.com/skythebro/DYSMANTLESaveEdit",
  },
  {
    title: "Expanded Inventory and Stacks",
    context: "Dying Light: The Beast",
    description: "Much bigger stack sizes for items and crafting parts.",
    href: "https://www.nexusmods.com/dyinglightthebeast/mods/863",
  },
  {
    title: "Appearance Mirror",
    context: "Tainted Grail: Fall of Avalon",
    description:
      "Change how your character looks after you've already started, from a table in your house.",
    href: "https://www.nexusmods.com/taintedgrailthefallofavalon/mods/313",
  },
  {
    title: "Seed Presets",
    context: "Plants vs. Zombies: Replanted",
    description:
      "Save your plant picks in five preset slots and have them picked for you at the start of every level.",
    href: "https://www.nexusmods.com/plantsvszombiesreplanted/mods/13",
  },
  {
    title: "LocalModBridge",
    context: "Big Ambitions",
    description:
      "Lets local mods load on copies of the game where Steam Workshop doesn't run.",
    href: "https://www.nexusmods.com/bigambitions/mods/23",
  },
];

export type Job = {
  when: string;
  title: string;
  place: string;
  description: string;
};

export const experience: Job[] = [
  {
    when: "Feb – Jul 2026",
    title: "Junior IT",
    place: "C. Steinweg Belgium",
    description:
      "Wrote tools in C#, VBA and Power Query that pull logistics data out of messy exports and clean it up, so people no longer had to copy it over by hand. I also helped with day-to-day IT.",
  },
  {
    when: "Mar – Jun 2025",
    title: "Intern",
    place: "Apvine",
    description:
      "Worked in an Agile team. I did the functional analysis and then automated document generation with Java and Mendix.",
  },
  {
    when: "2021 – 2025",
    title: "Bachelor in Applied Computer Science",
    place: "Karel de Grote University College",
    description: "Application development track. Graduated with distinction.",
  },
];

export const skills = [
  {
    title: "Languages",
    items: ["C#", "Java", "TypeScript", "JavaScript", "Python", "Rust", "SQL"],
  },
  {
    title: "Frameworks",
    items: [".NET", "React", "Next.js", "PySide6", "Mendix"],
  },
  {
    title: "Game modding",
    items: ["BepInEx", "Harmony", "Unity", "dnSpy / ILSpy", "Reverse engineering"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub Actions", "Docker", "Power Query"],
  },
] as const;
