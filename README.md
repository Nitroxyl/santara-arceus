# Santara — A Dream Beyond Time

Four individual, interactive Arceus dream introductions for the Santara Pokémon tabletop campaign. This is a static site: **one repository, four player links, no backend, no build step.**

## Player links

When GitHub Pages is enabled for the `main` branch at `/ (root)`, these URLs will be live:

| Player | Starter | Link |
| --- | --- | --- |
| Hins | Riolu | https://nitroxyl.github.io/santara-arceus/players/hins/ |
| Chao Dong (CD) | Snorunt | https://nitroxyl.github.io/santara-arceus/players/cd/ |
| Martyn | Froakie | https://nitroxyl.github.io/santara-arceus/players/martyn/ |
| Rizqi | Axew | https://nitroxyl.github.io/santara-arceus/players/rizqi/ |

The landing page deliberately does not list player links, to avoid casually exposing anyone else's introduction.

## Hosting

1. In GitHub, open **Settings → Pages** for this repository.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select **main** and **/ (root)**, then save.
4. Open a personal link above once GitHub Pages has published the site.

## Editing

- `stories/hins.js`, `stories/cd.js`, `stories/martyn.js`, and `stories/rizqi.js`: dialogue, choices, and responses.
- `scripts/experience.js`: shared dialogue engine and opening/closing sequence.
- `styles/site.css`: shared visual design, mobile layout, and animations.
- `players/<name>/index.html`: the four standalone entry points.

The currently written dialogue is an **initial draft**, not locked-in campaign canon. Starter and player mapping is set, but legendary connections and major future plot points are deliberately left unspoiled.

## Privacy note

GitHub Pages serves public files. Separate links discourage accidental spoilers but are **not** private or password-protected. Anyone with access to the repository can read all four stories. The `noindex` directive is only a request to search engines.

## Accessibility and controls

Click **Enter the dream** to begin. Click the dialogue panel or press Space/Enter to continue. Pressing continue while text is appearing immediately reveals the full sentence. Each encounter includes an optional dialogue choice and a replay control. Reduced-motion preferences disable the typing and decorative animations.

This site uses original HTML/CSS visuals and does not require copyrighted Pokémon images or external audio.
