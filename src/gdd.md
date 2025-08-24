1. Game Overview
Title: Voidless Tale
Genre: 2D Pixel-Art Action RPG (side-scroll)
Platforms: PC (Steam, itch.io).
Art Style: Vibrant pixel art with red and dark-grayscale gradients; Heaven realms feature ethereal light palettes, Hell realms deep reds/blacks.
Target Audience: Fans of pixel-art RPGs, souls-likes, deep lore, and community modding.
Release Model: Base game with built-in mod support and standalone modding tool; free updates adding features and community content.
________________________________________
2. Core Gameplay Mechanics
•	Movement & Combat
o	2D side-scroll platforming (MapleStory-inspired) with eight-directional attacks.
o	Melee combos, charged strikes, and ranged skills absorbed from enemies.
•	Loot vs. Absorb
o	Loot: Gather weapons, armor, crafting mats.
o	Absorb: Permanently learn enemy/boss skills; customize loadouts.
•	Equipment & Gear Swapping
o	Paper-doll system via Godot Skeleton2D; gear pieces automatically rigged.
o	Dyeable palettes for armor, weapons, and character skins.
•	Leveling & Progression
o	Levels 1–1000; +3 stat points per level (Strength, Agility, Intelligence, Vitality, Luck).
o	At Level 1000: “Demigod” form—character floats; unlock final tier of skills.
•	Crafting & Keys
o	Each sin domain gate requires a crafted key.
o	Key recipes unlocked by finding the sin-memory scrap; resources harvested from domain enemies/minibosses.
•	Domain Loop
1.	Find Memory: Pick up a scrap of paper describing a past sin.
2.	Locate Gate: Memory reveals gate location.
3.	Unlock Recipe: Interact with gate to learn key recipe.
4.	Gather & Craft: Collect materials → craft key.
5.	Boss Fight: Use key + memory to enter domain boss fight.
6.	Choice: Loot boss for drops or absorb its signature skill.
7.	Repeat: Teleported back to Purgatory hub; next sin.
2.1 Skill Absorption & Veinshard System
The Skill Absorption system allows players to learn and equip skills from defeated enemies and bosses, introducing a layer of customization and tactical depth.
Core Components
•	Veinshard (Crystal Ore):
A mystical crystal found throughout the world, especially in Limbo. It acts as a vessel for storing absorbed skills. Players must possess at least one empty Veinshard to absorb a skill from an enemy or boss.
•	Skill Essence:
A rare drop from elite enemies and bosses, used at the Crafting Bench to enhance Veinshards. Enhanced Veinshards can hold stronger or upgraded versions of skills and may unlock synergy bonuses or reduce cooldowns.
Absorption Flow
1.	Obtain a Veinshard – Loot from world nodes or enemies.
2.	Defeat an enemy/boss – Any enemy has a unique skill associated with it.
3.	Use Absorb – If an empty Veinshard is in inventory, player can absorb the enemy’s skill. The Veinshard becomes imprinted with that skill.
4.	Enhance (Optional) – At a Crafting Bench, combine a Skill Essence with a Veinshard to upgrade its tier or apply modifiers.
5.	Equip in Action Bar – Players can assign up to three Veinshards into their Skill Action Bar (slots 1–3).
6.	Swap & Activate – Players press 1–3 to quick-swap between equipped Veinshards. Skills are activated via input:
o	Attack 1 (e.g., Mouse 1): Basic weapon attack
o	Attack 2 (e.g., Mouse 2 / custom key): Active skill from selected Veinshard
Additional Notes
•	Veinshards are reusable and can be swapped freely outside combat.
•	Players can collect and store multiple Veinshards, creating builds based on playstyle.
•	Skills may have synergies or evolve when equipped in specific combinations or with certain weapons.
•	Some enemies may have multiple skill variants; higher-tier Veinshards can unlock alternate or enhanced versions.

________________________________________
3. Story & Lore
•	Protagonist: A soul awakened in Purgatory beneath the World Tree, stripped of memories.
•	Memory Scraps: Reveal past transgressions tied to the seven deadly sins; progressing story.
•	Purgatory Hub: Forest under a colossal oak; central hub with NPC vendors, crafting bench, and Mods menu.
•	Heaven vs. Hell Realms: Mirrored domains where each sin takes on Celestial (Heaven) and Infernal (Hell) forms.
•	Final Twist: SALIGIA incarnations are reflections of the protagonist. Defeating both opens the Sinful Duality realm, where the player must choose to rule Heaven, rule Hell, or attempt to escape (leading to catastrophic rebirth).
________________________________________
4. World Structure & Domains

Starting zone:
Limbo – Starting zone and safe zone with few weak mobs. Big oak Tree as first spawn point. And dark forest themed layout.
Domain #	Sin (Latin)	Heaven Realm Theme	Hell Realm Theme
1	Superbia	Radiant Spires & Mirror Halls	Shattered Thrones & Jagged Abyss
2	Avaritia	Vaulted Golden Libraries	Cursed Treasure Troves
3	Luxuria	Perfumed Gardens of Temptation	Flesh-Tangled Catacombs
4	Invidia	Gilded Parade Galleries	Faceless Shadow Corridors
5	Gula	Ever-Flowing Manna Fountains	Rotting Feast Halls
6	Ira	Courtyards of Righteous Flame	Burning Wastelands of Rage
7	Acedia	Dreamed Cathedrals of Slumber	Decaying Graveyard Stillness
8 (Final)	SALIGIA	Solagia, Crown of False Ascension	Malagia, Throne of the Abyss Within
________________________________________
5. Bosses
5.1 Heaven Versions
1.	Seraphiel, the Radiant Mirror (Superbia)
2.	Aurum, Keeper of Divine Vaults (Avaritia)
3.	Celestara, the Perfumed Temptress (Luxuria)
4.	Luminel, the Gilded Shadow (Invidia)
5.	Feastriel, Maw of the Manna Storm (Gula)
6.	Judicar, the Flaming Virtue (Ira)
7.	Soporiel, the Dimming Star (Acedia)
8.	Solagia, Crown of False Ascension (Final)
5.2 Hell Versions
1.	Vantagon, the Crown of Scorn (Superbia)
2.	Gorevault, Lord of Hollow Coins (Avaritia)
3.	Vermissa, Flesh of Desire (Luxuria)
4.	Drosselgheist, the Covetous Maw (Invidia)
5.	Bilebloom, the Devourer Root (Gula)
6.	Rendros, Blade of Endless Rage (Ira)
7.	Nullora, the Sighing Husk (Acedia)
8.	Malagia, Throne of the Abyss Within (Final)
________________________________________
6. Systems & UI
•	Skills : Absorbed from worlds every monster – later versions possible to combine to make more powerful skill.
•	Inventory Tabs: Equipment, Materials, Memories, Keys.
•	Crafting Bench UI: Drag materials into slots; view recipe hints.
•	Mods Menu (in Purgatory):
o	Lists installed mods with toggles
o	Displays mod metadata (name, author, version, description, dependencies)
o	Scan/Re-scan button to detect new mods without restart
________________________________________
7. Modding & Sword-Generator Tool
7.1 Official Mod Support
•	Folder Structure:
/Mods/
  /YourModName/
    /Sprites/
    /Audio/
    /Scripts/
    /Configs/
    mod.json
•	Mod API:
o	JSON-based configs for items, enemies, skills, domains.
o	Lua (or GDScript) hooks for custom boss AI and event scripting.
•	In-Game Loader: Dynamically loads active mods on startup; priority order based on load sequence.
7.2 Voidless Smith (Modding Sword Generator)
A standalone Windows application evolving into the official mod-authoring front end for weapon sprites and configs.
Core Features
1.	Parts Library
o	Blade, Guard, Hilt, Pommel art sets; user-addable via <App>/Assets/Parts/....
2.	Tint & Palette Swaps
o	HSV/RGB sliders; save/load named palettes.
3.	Randomizer & Manual Build
o	“Randomize” button; drag-and-drop part placement.
4.	Export & Mod Integration
o	Outputs sprite sheet (PNG) + JSON meta.
o	Future versions: one-click import into /Mods/YourModName/Sprites/Weapons/ and auto-update of mod.json.
5.	Weapon Config Generation
o	Generates a basic weapon config template with placeholders for stats and skill refs.
6.	Auto-Update & Version Control
o	Built-in updater; version history log.
Roadmap
•	“.voidmod” Packaging: Bundle assets + configs into a single installable mod package.
•	Workshop Integration: Steam Workshop upload/download.
•	In-Editor Testing: Launch lightweight sandbox to preview swords with animations.
________________________________________
8. Steam Page Setup
•	Capsule Art
o	Main Capsule: Protagonist under tree, split Heaven/Hell background.
o	Secondary Capsules: Domain panoramas, boss duels, modding tool UI.
•	Trailer Embed: (Section 9)
•	About This Game
Explore mirrored realms of Heaven and Hell, recover your lost memories, and confront manifestations of your sins in this 2D pixel-art action RPG.
•	Key Features
o	Dual realms of Heaven & Hell, eight domains each
o	Loot vs. Absorb mechanic for deep customization
o	Level 1–1000 progression → Demigod transformation
o	Full mod support + standalone mod-authoring tool
o	Built-in sword modding: design, tint, export, and import
•	System Requirements
o	Windows 10+, 4 GB RAM, DX11, 2 GHz CPU, 1 GB GPU
________________________________________
9. Trailer Script
1.	0–10 s: Fade in Purgatory forest; character awakens under oak.
2.	10–25 s: VO: “You died…but your sins live on.” Show pickup of Superbia memory.
3.	25–40 s: Key crafting montage; traversal of mirrored platforms.
4.	40–55 s: Boss fight vs. Seraphiel; loot vs. absorb UI.
5.	55–70 s: Split-screen Heaven vs. Hell boss clashes.
6.	70–85 s: Level-up flashes; stat allocation; Demigod float reveal.
7.	85–95 s: Voidless Smith UI demo: “Mod your weapons—shape your legend.”
8.	95–110 s: Sinful Duality gate opens; Solagia vs. Malagia showdown.
9.	110–120 s: Title card, release window, Steam & itch.io logos, “Wishlist now.”
________________________________________
10. itch.io Page Design & Marketing Copy
10.1 Header & Visuals
•	Banner: Pixel-art split-realm panorama with hub in center.
•	Title & Tagline:
Voidless Tale
A 2D pixel-art RPG of sin, power, and redemption.
10.2 Description
Traverse mirrored realms of Heaven and Hell, reclaim your stolen memories of the seven deadly sins, and face celestial and infernal incarnations of SALIGIA. Choose to loot their remains or absorb their powers. Customize your playstyle, forge your own weapons with the modding tool, and decide your ultimate fate.
10.3 Key Features
•	🌳 Purgatory Hub – Central forest beneath the World Tree.
•	⚔️ Loot vs. Absorb – Gear or skills—your choice.
•	🔑 Craft & Conquer – Unlock gates with crafted keys.
•	📈 Level 1–1000 – Become a Demigod and transcend.
•	🛠️ Mod Support – Official API, in-game loader, Steam Workshop ready.
•	🗡️ Voidless Smith – Standalone mod-authoring tool for weapon sprites & configs.
10.4 Call to Action
Wishlist on Steam and follow on itch.io—first 500 wishlisters receive an exclusive mod-ready sword sprite pack!
________________________________________
11. Mods & Community Engagement
•	Workshop Integration: Automatic sync with Steam Workshop (future).
•	Modding Wiki:
o	Detailed folder structure
o	JSON config reference
o	API hooks and scripting examples
•	In-Game Showcase: Gallery of top community-made mods and weapons.
•	Contests & Events: Monthly “Mod of the Month” spotlight, community challenges, and dev Q&As.
12. ✅ 30-Day Development Checklist (Uncompleted)
Week 1: World & Visual Setup
•	☒ Create placeholder terrain tiles
•	☒ Design Limbo Veinshard Ore
•	☒ Created Test_World_01 with all tiles placed and collisions added
•	☐ Rig modular character with Skeleton2D
•	☐ Create Idle, walk, run and jump animations
•	☐Code player character controller 2d to actually move character.
•	☐Create First fun item in weapons The STICK. (Hard code or start populating ItemBase.gd – logic still not figured out – parse weapons.json for stick and make it .tscn object where it will hold its properties. ItemManager.gd will handle loading item data ?  - then what to do with itembase.gd – modular? Approach? Holding base values/ paths to textures?)
•	☐Create Enemy dummy training thingy we will call him “Dave poke’a’lot” For damage testing purposes and damage mega text display which will induce seizures when dozen of skills will flash the screen out of this universe. Or just poke him with stick. No dummy was harmed during this process :D.   – That’s a good idea ^_^ [Your daughter]
Week 3: Core Systems
•	☐Implement inventory UI using 24x24 item icons
•	☐Enable drag & drop for equipment/Veinshards
•	☐Add stat panel (STR, AGI, INT, VIT, LUCK)
•	☐Basic EXP system & level-up logic
Week 4: Combat & Absorption
•	☐Melee combat system: click to attack with equipped weapon
•	☐Implement skill absorption system using Veinshards
•	☐Add Skill Essence crafting to enhance Veinshards   
•	☐Action bar: Equip 3 Veinshards and swap with keys [1–3]
•	☐Use Mouse 1 (basic attack) and Mouse 2 (use current Veinshard skill)

