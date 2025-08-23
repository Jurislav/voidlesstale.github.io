# Voidless Tale

_A 2D pixel-art action RPG of sin, power, and redemption — traverse mirrored realms of Heaven & Hell, loot or **absorb** your enemies’ skills, and uncover who you were._

**Website:** https://www.voidlesstale.com  
**Wishlist / Follow:** **Steam (placeholder)** · **itch.io (placeholder)**

---

## TL;DR
Side-scrolling action RPG inspired by Ragnarok Online & MapleStory. You begin in **Purgatory** beneath a massive tree; scattered paper **memories** reveal the sins of your past. Each sin (S.A.L.I.G.I.A.) gates a boss and domain in both **Heaven** and **Hell**. Choose to **loot** items or **absorb** skills from enemies. Reach **Level 1000** to become a **Demigod** (you literally float).

---

## Key Features
- **Dual Realms:** Heaven and Hell with **8 layers each**; mirrored domains for every sin.  
- **Loot _or_ Absorb:** Defeat enemies/bosses and either loot gear or absorb their skills for deep buildcraft.  
- **Epic Progression:** Level **1–1000**, +3 stat points per level; at **1000** you transform into a **Demigod** (float, endgame tier).  
- **Repeatable Boss Fights:** Re-run sin bosses for mastery, drops, and alternate outcomes.  
- **Everything Has Value:** No junk drops — every item ties into crafting, keys, or builds.  
- **Modding-First:** Official mod support and the **Voidless Smith** tool for weapon parts, palettes, and JSON exports.

---

## Core Loop
1. **Find a Sin Memory** (paper scrap) → reveals the corresponding boss **gate**.  
2. **Unlock Key Recipe** by interacting with the gate/door.  
3. **Gather & Craft** the required key.  
4. Ensure both the **memory** and **crafted key** are in your inventory.  
5. **Enter Boss Fight** → on completion you’re teleported back to the gate and can repeat the loop.

---

## Realms & Domains
Domains (by S.A.L.I.G.I.A. order) with Heaven/Hell duality:

- **Superbia (Pride):** Heaven — Radiant Spires & Mirror Halls · Hell — Shattered Thrones & Jagged Abyss  
- **Avaritia (Greed):** Heaven — Vaulted Golden Libraries · Hell — Cursed Treasure Troves  
- **Luxuria (Lust):** Heaven — Perfumed Gardens of Temptation · Hell — Flesh-Tangled Catacombs  
- **Invidia (Envy):** Heaven — Gilded Parade Galleries · Hell — Faceless Shadow Corridors  
- **Gula (Gluttony):** Heaven — Ever-Flowing Manna Fountains · Hell — Rotting Feast Halls  
- **Ira (Wrath):** Heaven — Courtyards of Righteous Flame · Hell — Burning Wastelands of Rage  
- **Acedia (Sloth):** Heaven — Dreamed Cathedrals of Slumber · Hell — Decaying Graveyard Stillness  
- **SALIGIA (Final):** Heaven — **Solagia**, Crown of False Ascension · Hell — **Malagia**, Throne of the Abyss Within

---

## Boss Lineup (Heaven vs Hell)
- **Superbia:** Seraphiel, the Radiant Mirror · Vantagon, the Crown of Scorn  
- **Avaritia:** Aurum, Keeper of Divine Vaults · Gorevault, Lord of Hollow Coins  
- **Luxuria:** Celestara, the Perfumed Temptress · Vermissa, Flesh of Desire  
- **Invidia:** Luminel, the Gilded Shadow · Drosselgheist, the Covetous Maw  
- **Gula:** Feastriel, Maw of the Manna Storm · Bilebloom, the Devourer Root  
- **Ira:** Judicar, the Flaming Virtue · Rendros, Blade of Endless Rage  
- **Acedia:** Soporiel, the Dimming Star · Nullora, the Sighing Husk  
- **SALIGIA (Final):** Solagia (Heaven) · Malagia (Hell)

**Sinful Duality (Endgame):** Combine rare drops from both final SALIGIA versions to craft a **Teleport Stone** that unlocks the **Sinful Duality** phase. Requires level/stats and a crafted key assembled from SALIGIA drops.

---

## Progression & Items
- **Leveling:** 1 → 1000; at 1000 you become a **Demigod** (floats, endgame perks).  
- **Stat Points:** +3 per level; allocate to mold your build.  
- **Rarities:** Common · Uncommon · Rare · Epic · Legendary · **Relic** · **Demigod** (endgame).  
- **Inventory Tabs:** Equipment, Materials, Memories, Keys.  
- **Movement & Combat:** Side-scrolling platformer feel (MapleStory vibe) with action combat.

---

## Story Premise
You’re dead. You awaken in a limbo forest beneath a colossal tree. Across the world, **scraps of paper** reveal the truth: each memory exposes a **sin** you committed. The final twist — **SALIGIA looks like you**. In the end, choose to **rule Heaven**, **rule Hell**, or **escape** back to life (at a cost).

---

## Modding & **Voidless Smith**
- **Purpose:** Standalone tool to design/tint/export weapon sprites and configs.  
- **Parts Folders:** `parts/blade`, `parts/hilt`, `parts/pomel` (intentional spelling).  
- **Exports:** PNG + JSON (UTF-8). Filenames are slugged with **underscores**.  
- **Data Rules:** `AttackSpeed` stored as **decimal (2dp)**. Stats/names drawn from a RandomData pool.  
- **Roadmap:** In-editor preview/sandbox, one-click export into mod folder, `.voidmod` packaging/Workshop.

---

## Roadmap (Selected)
- [ ] Veinshard ore mining → craft with **Veinshards** & **Skill Essences**  
- [ ] Teleporter plate system for platform traversal  
- [ ] Modular character rig + paper-doll gear swapping & dyeable palettes  
- [ ] Inventory + Stats UI; XP/Leveling; dummy enemy & combat loop  
- [ ] Crafting bench; Key crafting flow for sin gates  
- [ ] Devlog & presskit pages on the site

---

## Website / Tech
- **Site:** Astro + Tailwind (dark-grey + purple gradient panels).  
- **Game:** Godot (2D), Aseprite for pixel art.  
- **This Repo:** Contains the promotional site; content drawn from the GDD.  
- **Placeholders:** Steam & itch.io buttons are intentionally unlinked until live.

---

## Press & Contact
- **Presskit:** _Coming soon_  
- **Contact:** _Coming soon_  
- **Socials:** _Coming soon_

---

## License

**Split licensing:**
- Website code: MIT (see `LICENSE`).
- Story/characters/art/audio/logos: All Rights Reserved (see `ASSETS_LICENSE.md`).
- Tools (Voidless Smith): All Rights Reserved (see `TOOLS_LICENSE.md`).
- Trademarks: see `TRADEMARKS.md`.
