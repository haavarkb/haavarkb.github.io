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

## Fonts

Set in [Libron](https://github.com/nicoverbruggen/libron) by Nico Verbruggen, licensed under the SIL Open Font License. The OFL requires keeping the license with the font files; see the Libron repository for the license text.
