---
title: The progress continues and goes well...
description: My dream game development is going crazy and now i start to see real progress
pubDate: 2026-06-25T21:55
draft: false
tags:
  - Voidless Tale, Maplestory, 2D RPG, Platformer
---

##### Implemented:

- player movement with jump buffering, coyote time, double jumping, and one-way platform drop-through.
- sword combat with equipped weapon stats, active hit frames, damage, knockback, and attack animations.
- a 48-slot inventory with item stacking, drag and drop, equipment slots, and world item dropping.
- world item pickups with floating icons and item names displayed while holding Alt.
- three veinshard equipment slots with MP costs, cooldowns, and projectile skill casting.
- the Darkball projectile skill with magic damage, knockback, lifetime, and hit limits.
- Forest Slime combat with configurable health, animations, corpse interaction, and drop tables.
- tap-to-loot and hold-to-absorb corpse interactions that can reward items, XP, VF, and veinshard skills.
- player stats, stat points, HP and MP scaling, MP regeneration, XP progression, and level rewards.
- workbench crafting with recipe requirements, recipe unlocking, and inventory ingredient checks.
- gate interactions with recipe, key item, and memory requirements plus destination teleporting.
- save and load support for position, camera, inventory slots, equipment, veinshards, stats, VF, recipes, and memory flags.
- developer console commands for saving, spawning, teleporting, giving items or VF, editing stats, crafting, and reloading databases.
- /!showids command for listing registered weapon, ammo, item, skill, object, and mob IDs.
- modular two-handed bow equipment with mouse aiming, constrained aim angles, draw, hold, and release animation states.
- per-animation bow equipment angles and configurable bow, arrow, and frame-based projectile positioning offsets.
- a reusable ammunition database for arrows and future bullets.
- wooden arrows that stack to 99, are consumed from inventory, and appear nocked while drawing the bow.
- launched arrow projectiles with gravity, ranged and optional magic damage, knockback, and terrain collision removal.

##### Fixed:

- inventory and equipment UI clicks no longer pass through and trigger player attack animations.
- dragged inventory and equipment icons are centered on the mouse cursor instead of using their top-left corner.
- dragged item previews render above the inventory and equipment bar.
- dropped world item icons and Alt item labels use unshaded materials and remain visible under scene lighting.
- mob loot, absorb, damage, and floating text labels use unshaded materials and remain readable under scene lighting.
- two-handed bows reserve and mirror the right equipment slot while still allowing a sword to replace the bow.
- equipped bows now refresh ranged stats using their configured attack values.
- nocked and launched arrows now update their facing correctly when the player turns.
- items granted through the developer command are saved immediately, including ammunition stacks.
