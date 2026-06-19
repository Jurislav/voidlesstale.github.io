---
title: Voidless Tale - Progress so far...
description: New changelog! Fixes and update.
pubDate: 2026-06-19T22:04
draft: false
tags:
  - Voidless Tale, Changelog, Update
---

Added:

- player movement with jump buffering, coyote time, double jumping, and one-way platform drop-through.
- sword combat with equipped weapon stats, active hit frames, damage, knockback, and attack animations.
- a 48-slot inventory with item stacking, drag and drop, equipment slots, and world item dropping.

![](/uploads/%7B21E332BE-E35C-4116-A6FA-CE0662BAF637%7D.png)

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
- /!showids command for listing registered weapon, item, skill, object, and mob IDs.

![](/uploads/pasted-image-1781896199074.png)

fixed:

- inventory and equipment UI clicks no longer pass through and trigger player attack animations.
- dragged inventory and equipment icons are centered on the mouse cursor instead of using their top-left corner.
- dragged item previews render above the inventory and equipment bar.
- dropped world item icons and Alt item labels use unshaded materials and remain visible under scene lighting.

![](/uploads/pasted-image-1781896146192.png)

- mob loot, absorb, damage, and floating text labels use unshaded materials and remain readable under scene lighting.
