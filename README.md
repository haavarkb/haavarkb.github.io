# Personal academic website

A minimal, e-reader-style CV site. Plain HTML and CSS, no build step.

## Edit

- `index.html` holds all content. Search for the placeholder text ("Your Name", "Journal Name", etc.) and replace it.
- `style.css` holds the look. Colours are tokens at the top (`:root`), so changing the paper tone or accent is a one-line edit.
- Drop your CV in as `cv.pdf` next to `index.html`.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publish on GitHub Pages

1. Create a repository named `yourusername.github.io` (or any name for a project site).
2. Push these files to the `main` branch.
3. In the repository, go to Settings → Pages, choose "Deploy from a branch", select `main` and `/ (root)`.
4. Your site appears at `https://yourusername.github.io` after a minute or two.

## Photos

The page has a portrait spot in the About section and an optional row of extra photos below it. They stay hidden until the files exist, so nothing looks broken.

1. Make a folder called `photos` in the repository.
2. Upload your pictures with these exact names: `portrait.jpg` (portrait orientation works best), and optionally `photo-1.jpg`, `photo-2.jpg`, `photo-3.jpg`.
3. Edit the captions and `alt` text in `index.html` (search for "Caption" and "Short description").

Tips: resize to about 1200 pixels on the long side and keep each file under roughly 300 KB so the page stays fast. Remove location data (EXIF) from photos you do not want to share exactly where they were taken. To add more photos, copy a `<figure class="photo">` block inside `<div class="gallery">`.

## Fonts

Set in [Libron](https://github.com/nicoverbruggen/libron) by Nico Verbruggen, licensed under the SIL Open Font License. The OFL requires keeping the license with the font files; see the Libron repository for the license text.
