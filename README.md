# Plexion

Synchronized multi-video player in a single HTML page.

## Run

```
node server.js
```

Open **http://localhost:3000**

## Supported Sources

- YouTube
- Vimeo
- Twitch (VOD video or live channel)
- Dailymotion
- Direct files: `.mp4`, `.webm`, `.mov`, etc.

## Keyboard Shortcuts

| Key      | Action              |
| -------- | ------------------- |
| `Space`  | Global Play / Pause |
| `↑`      | Volume +5%          |
| `↓`      | Volume -5%          |

## Controls

- **Play / Pause** — all videos from their current position
- **Restart** — resets all videos to 0:00
- **Resync** — aligns all videos to the position of video 1
- **Fullscreen** — displays only the videos, without UI
- **Seek bar, volume, and play/pause** — independent per video
- **+** button to add videos (up to 9)

