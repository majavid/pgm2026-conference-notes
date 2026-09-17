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

## Photo albums

The four day pages already contain all photo IDs from the four Google Drive
folders (extracted on September 17, 2026), so the carousels work out of the box:

- Day 1 (Sep 8): 16 photos
- Day 2 (Sep 9): 47 photos
- Day 3 (Sep 10): 57 photos
- Day 4 (Sep 11): 42 photos

Photos are served directly from Google Drive via
`https://lh3.googleusercontent.com/d/FILE_ID`, which works because the folders
are shared as "Anyone with the link – Viewer." **Keep the folders shared**, and
don't delete or move the photos, or the carousel images will stop loading.

### Adding a photo later

If you add a new photo to one of the Drive folders, it will NOT appear on the
site automatically (Drive doesn't let a webpage list a folder's contents). To
add it: right-click the photo in Drive → Share → Copy link, take the FILE_ID
(the long string between `/d/` and `/view`), and add it to the `data-photos`
list at the bottom of that day's page, in the position where you want it to
appear.

### If Drive hot-linking ever breaks

Google occasionally changes how Drive images can be embedded. If the carousels
ever stop showing images, the most reliable fix is to download the photos into
an `images/day1/` … `images/day4/` folder in this repository and switch the
carousel to local paths — happy to help set that up if needed.
