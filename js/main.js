/* =========================================================
   HABIBS — interactions
   Vanilla JS · no dependencies
   ========================================================= */
(function () {
  "use strict";

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canHover = window.matchMedia("(hover: hover)").matches;

  /* ---------- year ---------- */
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Loader ---------- */
  const loader = document.getElementById("loader");
  const bar = document.getElementById("loaderBar");
  const count = document.getElementById("loaderCount");
  let p = 0;
  const tick = setInterval(() => {
    p += Math.random() * 18;
    if (p >= 100) { p = 100; clearInterval(tick); }
    if (bar) bar.style.width = p + "%";
    if (count) count.textContent = Math.floor(p);
    if (p === 100) {
      setTimeout(() => {
        loader && loader.classList.add("done");
        document.body.classList.add("loaded");
        startReveals();
      }, 350);
    }
  }, 160);

  /* ---------- Custom cursor ---------- */
  const cursor = document.getElementById("cursor");
  const dot = document.getElementById("cursorDot");
  if (cursor && canHover && !reduce) {
    let mx = 0, my = 0, cx = 0, cy = 0;
    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    });
    (function loop() {
      cx += (mx - cx) * 0.18; cy += (my - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll('a, button, [data-cursor="hover"], .svc').forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
    });
  }

  /* ---------- Nav hide on scroll down ---------- */
  const nav = document.getElementById("nav");
  let lastY = 0;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (nav) {
      if (y > lastY && y > 400) nav.classList.add("hide");
      else nav.classList.remove("hide");
    }
    lastY = y;
  }, { passive: true });

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  if (burger && menu) {
    burger.addEventListener("click", () => {
      menu.classList.toggle("open");
      nav.classList.toggle("burger-open");
    });
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        nav.classList.remove("burger-open");
      })
    );
  }

  /* ---------- Reveal on scroll ---------- */
  function startReveals() {
    const items = document.querySelectorAll(".reveal-up, .reveal-line");
    if (reduce) { items.forEach((i) => i.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          const el = e.target;
          const sibs = Array.from(el.parentElement.children).filter((c) =>
            c.classList.contains("reveal-up")
          );
          const idx = sibs.indexOf(el);
          el.style.transitionDelay = (idx > 0 ? idx * 0.08 : 0) + "s";
          el.classList.add("in");
          io.unobserve(el);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    items.forEach((i) => io.observe(i));
  }

  /* ---------- Count-up stats ---------- */
  const counters = document.querySelectorAll("[data-count]");
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.count;
      const dur = 1600;
      const t0 = performance.now();
      function step(now) {
        const k = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.floor(eased * target);
        if (k < 1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      requestAnimationFrame(step);
      cio.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => cio.observe(c));

  /* ---------- Parallax ---------- */
  const para = document.querySelectorAll("[data-parallax]");
  if (!reduce) {
    window.addEventListener("scroll", () => {
      const vh = window.innerHeight;
      para.forEach((el) => {
        const r = el.getBoundingClientRect();
        const speed = parseFloat(el.dataset.parallax);
        const offset = (r.top + r.height / 2 - vh / 2) * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
    }, { passive: true });
  }

  /* ---------- Services hover image ---------- */
  const svcHover = document.getElementById("svcHover");
  const svcGradients = {
    "hair-colour": "radial-gradient(circle at 30% 30%, #ff5a4d, transparent 45%), linear-gradient(135deg,#1a0c0c,#e10600)",
    "keratin": "radial-gradient(circle at 70% 20%, #e10600, transparent 50%), linear-gradient(160deg,#0c0a0a,#3a0a08)",
    "hair-spa": "radial-gradient(circle at 50% 80%, #ff8076, transparent 45%), linear-gradient(135deg,#2a0908,#b30500)",
    "haircut": "radial-gradient(circle at 20% 60%, #ff2d20, transparent 55%), linear-gradient(120deg,#120a0a,#e10600)",
    "facial": "radial-gradient(circle at 80% 30%, #ff5a4d, transparent 50%), linear-gradient(150deg,#0c0a0a,#7a0200)",
    "massage": "radial-gradient(circle at 40% 70%, #e10600, transparent 50%), linear-gradient(140deg,#1a0c0c,#3a0a08)",
  };
  if (svcHover && canHover) {
    let mx = 0, my = 0, hx = 0, hy = 0, active = false;
    document.querySelectorAll(".svc").forEach((svc) => {
      svc.addEventListener("mouseenter", () => {
        active = true;
        svcHover.style.backgroundImage = svcGradients[svc.dataset.img] || "";
        svcHover.classList.add("show");
      });
      svc.addEventListener("mouseleave", () => {
        active = false;
        svcHover.classList.remove("show");
      });
    });
    window.addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; });
    (function loop() {
      hx += (mx - hx) * 0.12; hy += (my - hy) * 0.12;
      if (active) svcHover.style.left = hx + "px", (svcHover.style.top = hy + "px");
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- Open / closed state ---------- */
  const openState = document.getElementById("openState");
  if (openState) {
    const h = new Date().getHours();
    const open = h >= 9 && h < 21;
    openState.textContent = open ? "● Open now" : "● Closed · Opens 9 AM";
    openState.style.color = open ? "#0c0a0a" : "rgba(255,255,255,.85)";
  }

  /* ---------- Smooth anchor (respect reduced motion) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      }
    });
  });
})();
