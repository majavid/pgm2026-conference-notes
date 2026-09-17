# PGM 2026 – Conference Diary (Valencia, Spain)

My notes and reflections from PGM 2026 in Valencia, Spain (September 8–11, 2026).

**Live site:** https://majavid.github.io/pgm2026-conference-notes/

## What's in this repository

- `index.md` — home page
- `day1.md` … `day4.md` — one page per conference day, each with a photo carousel at the bottom
- `_layouts/default.html` — custom page layout (PGM 2026 logo in the header, no "View on GitHub" button)
- `assets/logoPGM2026.png` — the conference logo
- `assets/css/album.css`, `assets/js/album.js` — styling and code for the photo carousel
- `_config.yml` — site settings (Cayman theme)

## How to publish (GitHub Pages)

1. Create a new **public** repository on GitHub named `pgm2026-conference-notes`.
2. Upload **everything in this folder, keeping the folder structure** (`_layouts/`, `assets/`, etc.).
   In the browser: **Add file → Upload files**, and drag the whole folder contents in.
3. Go to **Settings → Pages**.
4. Under "Build and deployment": **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)** → **Save**.
5. After a minute or two the site is live at
   `https://majavid.github.io/pgm2026-conference-notes/`

## How to fill in the photo albums

Each day page has a photo carousel that shows your Google Drive photos one at a
time with **Previous / Next** buttons. The carousel just needs the list of photo
**file IDs** for that day, pasted into the `data-photos` attribute:

```html
<div class="photo-album"
     data-folder="https://drive.google.com/drive/folders/..."
     data-photos='["FILE_ID_1", "FILE_ID_2", "FILE_ID_3"]'>
</div>
```

Your folders are already shared publicly, which is all the sharing setup needed.

### Fast way: grab all IDs of a folder at once

1. Open the folder's *embedded view* in your browser (one per day):
   - Day 1: https://drive.google.com/embeddedfolderview?id=1jJYqJsQqIh-28tFAwQLR9marPzmAGw73
   - Day 2: https://drive.google.com/embeddedfolderview?id=1tHSGkCoKG5MDTeXQCsqA3OJavrSGUruW
   - Day 3: https://drive.google.com/embeddedfolderview?id=1-z-sM1-nAPZe9vKCH29JYpdUgL_gshMw
   - Day 4: https://drive.google.com/embeddedfolderview?id=1QKlUouhmypT243e2ItbdV1cnK7ifJDHC
2. Press **F12** (or right-click → Inspect) and open the **Console** tab.
3. Paste this one line and press Enter:

   ```js
   JSON.stringify([...document.querySelectorAll('.flip-entry')].map(e => e.id.replace('entry-','')))
   ```

4. It prints something like `["1AbC...","1DeF...", ...]` — copy that whole array
   (without the outer quotes, if your browser adds them) and paste it as the value
   of `data-photos` in the day's page.

### Manual way: one photo at a time

1. In Drive, right-click a photo → **Share** → **Copy link**. The link looks like
   `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`.
2. Copy the `FILE_ID` (the long string between `/d/` and `/view`) and add it to
   the `data-photos` list.

The order of IDs in the list is the order the photos appear in the carousel.
Until a page's list is filled in, it shows "Photo album coming soon" with a link
to the Drive folder as a fallback.

### Notes

- Photos are served via `https://lh3.googleusercontent.com/d/FILE_ID`, which
  works for files shared as "Anyone with the link – Viewer."
- If Google ever changes Drive hot-linking, the most reliable fallback is to
  download the photos into an `images/day1/` folder in this repository and list
  local paths instead — happy to help set that up if needed.
