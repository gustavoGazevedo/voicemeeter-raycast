# Voicemeeter Raycast Extension

Raycast extension for Voicemeeter strip and bus control on Windows.

## Commands

- `Mute`: toggle, mute, and unmute with selectable stale-state behavior.
- `Volume`: quick step controls (`+1`, `+0.5`, `-0.5`, `-1`) and absolute dB input.
- `Profiles`: global presets with per-target overrides.
- `Status`: connection status and current mute/volume snapshot.

## Setup

1. Install dependencies:
   - `npm install`
2. Start development:
   - `npm run dev`
3. In Raycast:
   - Set extension preferences as needed.
   - Use in-command quick settings to adjust mute behavior, undo TTL, and executable path.

## Notes

- Windows-only.
- Uses Voicemeeter Remote API through `ffi-napi`.
- No background daemon process.
