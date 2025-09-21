✔ Placeholder tiles & Test_World_01 finished with collisions.

✔ Designed Veinshard Ore in Limbo.

✔ Character sprite pipeline finalized:

Frame size: 32×64

Layers: arm_R, Eyes, Head, Torso, Legs, arm_L

Tags: walk, idle, jump, air, land, atk_1H_R, arm_R_hold, arm_L_hold

Pivot: feet at (32,119)

Export: strips + JSON (frame tags, layer mapping, anchors).

✔ Player controller coded in C# (Godot 4.4.1). Features now working:

Idle, walk, jump, air, land animations synced.

Coyote time, jump buffering, double jump.

Drop-through one-way platforms (↓ + Jump).

Facing/flip logic corrected (weapons mirror on grip).

✔ Camera system: pixel-perfect scaling, zoom ×3/×4, level clamping.

✔ Weapon system foundation:

sword.tscn built (Pivot, Blade, Hilt, Pomel, Hitbox).

Sword.cs loads JSON configs and assembles parts dynamically.

JSON schema extended:

pivot_px (true grip point)

offset_px (global nudge)

offset_blade/hilt/pomel (per-part placement)

flip_mirror (controls left/right mirroring)

Weapons scale to 0.5 of source art (allows high-detail sprites).

Hitbox toggles only during active attack frames from JSON.

Tested with steel_sword_basic.json and the_stick.json.

Planed Next:
we pick up with Dave poke’a’lot: a simple CharacterBody2D or Area2D that takes hits from the sword’s active frames, shows floating damage text, and acts as a punching bag.
