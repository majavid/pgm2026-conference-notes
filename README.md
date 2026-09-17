# PGM 2026 – Conference Diary (Valencia, Spain)

My notes and reflections from PGM 2026 in Valencia, Spain (September 8–11, 2026).

**Live site:** https://majavid.github.io/pgm2026-conference-notes/

## How to publish this site (GitHub Pages)

1. Create a new **public** repository on GitHub named `pgm2026-conference-notes`.
2. Upload all the files in this folder (`_config.yml`, `index.md`, `day1.md` … `day4.md`, `README.md`) to the repository root. You can do this in the browser: **Add file → Upload files**.
3. Go to the repository's **Settings → Pages**.
4. Under "Build and deployment," set **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)**, and click **Save**.
5. Wait a minute or two; your site will be live at
   `https://majavid.github.io/pgm2026-conference-notes/`

## How to add your Google Drive photos

Each day page (`day1.md` … `day4.md`) has a **Photo Album** section at the bottom.

### Option A (simplest): link to the Drive folder

1. In Google Drive, right-click the day's photo folder → **Share** → set **General access** to **Anyone with the link → Viewer**.
2. Click **Copy link**.
3. In the day's page, replace `PASTE_YOUR_GOOGLE_DRIVE_FOLDER_LINK_HERE` with that link.

Visitors will click the link and see the whole album in Drive.

### Option B: embed photos directly on the page

For each photo you want to show on the page itself:

1. In Drive, right-click the image → **Share** → **Anyone with the link → Viewer** → **Copy link**.
   The link looks like:
   `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
2. Copy the `FILE_ID` part (the long string between `/d/` and `/view`).
3. In the day's page, add one line per photo:

   ```html
   <img src="https://lh3.googleusercontent.com/d/FILE_ID" alt="Short description" width="600">
   ```

You can combine both options: embed a few favorite shots and link to the full folder below them.

> Note: Google occasionally changes how Drive images can be hot-linked. If an embedded image ever stops loading, the folder link (Option A) will always keep working. For maximum reliability, you can also download the photos, put them in an `images/` folder in the repository, and reference them as `<img src="images/photo1.jpg" width="600">`.
