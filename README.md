# Habibs Hair & Beauty Salon — Website

An awwwards-style, single-page marketing site for **Habibs Hair & Beauty Salon**
in Warje / Karvenagar, Pune. Built with a bold **red + white + black** identity
inspired by editorial wine-brand layouts: oversized display typography,
full-bleed colour sections, and smooth scroll-driven motion.

## ✨ Highlights

- **Animated preloader** with progress counter
- **Custom blend-mode cursor** (desktop) with hover states
- **Sticky nav** that hides on scroll-down, plus a full-screen mobile menu
- **Hero** with giant `HABIBS` lockup, live rating, and scroll cue
- **Infinite marquee** of services
- **Scroll reveals** + **count-up stats** via `IntersectionObserver`
- **Services list** with a cursor-following image card on hover
- **Parallax** section watermarks & gallery cards
- **Real salon details** — address, phone, hours, Google reviews (4.1 / 946)
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

> Kakade Plaza, 2, Warje Malwadi Rd, Warje Jakat Naka, Karvenagar,
> Pune, Maharashtra 411052 · 📞 070306 61661 · Open daily 9 AM – 9 PM
