# Lookout Salon & Academy — Website

An awwwards-style, single-page marketing site for **Lookout Salon & Academy**
in Kandivali West, Mumbai. Built with a bold **red + white + black** identity
inspired by editorial wine-brand layouts: oversized display typography,
full-bleed colour sections, and smooth scroll-driven motion.

## ✨ Highlights

- **Animated preloader** with progress counter
- **Custom blend-mode cursor** (desktop) with hover states
- **Sticky nav** that hides on scroll-down, plus a full-screen mobile menu
- **Hero** with giant `LOOKOUT` lockup, live rating, and scroll cue
- **Infinite marquee** of services
- **Smooth momentum scrolling** (Lenis) across the whole page
- **Scroll progress bar**, **parallax** layers, and **velocity-reactive** gallery zoom
- **Scroll reveals** + **count-up stats** via `IntersectionObserver`
- **Services list** with a cursor-following image card on hover
- **Parallax** section watermarks & gallery cards
- **Real salon details** — address, phone, hours, Google reviews (4.4 / 1,184)
- **Live open/closed** badge based on the visitor's local time
- Fully **responsive** and **reduced-motion friendly**

## 🗂 Structure

```
habibs_salon/
├── index.html        # markup & content
├── css/style.css     # all styling, theme tokens, responsive rules
├── js/main.js        # cursor, loader, reveals, parallax, menu
└── README.md
```

## 🚀 Run locally

No build step — it's plain HTML/CSS/JS. Just open `index.html`, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

Fonts load from Google Fonts; everything else (textures, gallery imagery) is
generated with CSS so the site works with no image assets.

## 🌐 Deploy (GitHub Pages)

A workflow at `.github/workflows/deploy-pages.yml` builds and publishes the
site automatically on every push to `main` or the feature branch. It uses the
official GitHub Pages Actions and auto-enables Pages on first run.

If your repo settings block Actions from enabling Pages, do it once manually:
**Settings → Pages → Build and deployment → Source: GitHub Actions**, then
re-run the workflow. The live URL appears in the workflow run and under
Settings → Pages (typically `https://<user>.github.io/habibs_salon/`).

## 🎨 Theme

Edit the tokens at the top of `css/style.css`:

```css
:root {
  --red:  #e10600;
  --white:#ffffff;
  --ink:  #0c0a0a;
}
```

## 📍 Salon

> Shop 15/16, Oshwal Niwas, Mahavir Nagar, Kandivali West,
> Mumbai, Maharashtra 400067 · 📞 098209 91227 · Open daily 9 AM – 9:30 PM
> · [lookoutsalonandacademy.in](https://lookoutsalonandacademy.in) · 🏳️‍🌈 LGBTQ+ friendly
