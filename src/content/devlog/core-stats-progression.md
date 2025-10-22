# Core stats & progression

22 October 2025

Biggest systems update yet! Here’s what landed in this slice:

## Core stats & progression
- **StatsModel v3** now tracks TotalXP, OverflowXP, HP/MP vitals, and derives MaxHP/MaxMP from BaseStatsConf defaults (100/100 base with +2.5× VIT/INT). Level-ups auto-heal by default with a config toggle.
- **StatsSerialization** picks up every new v3 field, including current HP/MP, so saves reflect combat readiness.
- **StatsManager** loads the XP table JSON, binds the QueryLevel model, backfills lifetime XP, and enforces level caps and titles.

## Save system
- **PlayerSaveData v3** ships alongside a SaveService migration that upgrades legacy files, mirrors defaults into `user://`, and keeps the new stat fields intact.

## Player & combat feel
- **Player.cs** walk animation only plays with live movement input while grounded; attack states now override walk/idle cleanly, preventing walk-while-attack desyncs and snapping back correctly.
- Maintains one-way platform drop-through, jump buffer, and coyote-time helpers.
- Hooks HUD, StatsUI, and InventoryUI into live stats data.
- Adds `/!player restore` console command to instantly refill HP/MP.

## UI/UX polish
- **StatsUI & InventoryUI** become draggable windows with persisted positions and a 50px offscreen allowance to avoid awkward clamping.
- **ChatUI** gets refactored node exports for the same behavior with tidier bindings.
- **PlayerHudUI** scaffold arrives: portrait, level label, HP/MP texture bars, and live value labels wired to StatsModel updates.

## Enemies & physics
- **Dave.cs** now defers per-animation hurtbox updates to dodge “flushing queries” errors while tightening idle/hurt/down/recover/despawn flow, plus anchored blink and name tag visuals.

## Commands & QoL
- Console expands with `/!give`, `/!xp add`, `/!tp`, `/!getpos`, `/!add stat`, `/!sub stat`, `/!reset stats`, alongside the new `/!player restore`.

EquipBar scene is next—stay tuned!
