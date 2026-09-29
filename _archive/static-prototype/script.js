document.addEventListener("DOMContentLoaded", () => {
  const whatsapp = document.createElement("a");
  whatsapp.href = "https://wa.me/85222223333";
  whatsapp.className = "whatsapp-float";
  whatsapp.target = "_blank";
  whatsapp.rel = "noopener noreferrer";
  whatsapp.setAttribute("aria-label", "WhatsApp 聯絡我們");
  whatsapp.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
  document.body.appendChild(whatsapp);

  // Mobile nav: reuse .nav-links inside .nav-left; clone for toggle target
  const toggle = document.querySelector(".menu-toggle");
  let navLinks = document.querySelector(".nav-left .nav-links");

  if (toggle && navLinks) {
    const inBlog = window.location.pathname.includes("/blog/");
    const prefix = inBlog ? "../" : "";
    const ensureMobileLink = (href, label) => {
      const file = href.split("/").pop();
      if ([...navLinks.querySelectorAll("a")].some((a) => a.getAttribute("href")?.endsWith(file))) {
        return;
      }
      const li = document.createElement("li");
      li.className = "nav-mobile-only";
      li.innerHTML = `<a href="${href}">${label}</a>`;
      navLinks.appendChild(li);
    };
    ensureMobileLink(`${prefix}blog/index.html`, "部落格");
    ensureMobileLink(`${prefix}contact.html`, "聯絡我們");

    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // Hero carousel
  document.querySelectorAll("[data-carousel]").forEach((root) => {
    const slides = [...root.querySelectorAll(".hero-slide")];
    if (slides.length < 2) return;

    const dotsWrap = root.querySelector(".carousel-dots");
    const prev = root.querySelector(".carousel-nav.prev");
    const next = root.querySelector(".carousel-nav.next");
    let index = slides.findIndex((s) => s.classList.contains("is-active"));
    if (index < 0) index = 0;
    let timer;

    const go = (i) => {
      index = (i + slides.length) % slides.length;
      slides.forEach((s, n) => s.classList.toggle("is-active", n === index));
      if (dotsWrap) {
        [...dotsWrap.children].forEach((d, n) =>
          d.classList.toggle("is-active", n === index)
        );
      }
    };

    if (dotsWrap) {
      dotsWrap.innerHTML = "";
      slides.forEach((_, n) => {
        const b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", `第 ${n + 1} 張`);
        if (n === index) b.classList.add("is-active");
        b.addEventListener("click", () => {
          go(n);
          restart();
        });
        dotsWrap.appendChild(b);
      });
    }

    prev?.addEventListener("click", () => {
      go(index - 1);
      restart();
    });
    next?.addEventListener("click", () => {
      go(index + 1);
      restart();
    });

    const restart = () => {
      clearInterval(timer);
      timer = setInterval(() => go(index + 1), 5600);
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) restart();

    root.addEventListener("mouseenter", () => clearInterval(timer));
    root.addEventListener("mouseleave", () => {
      if (!reduce) restart();
    });
  });

  // Horizontal strip carousel
  document.querySelectorAll("[data-strip]").forEach((track) => {
    const section = track.closest(".strip-section") || track.parentElement;
    const prev = section.querySelector("[data-strip-prev]");
    const next = section.querySelector("[data-strip-next]");
    const step = () => Math.min(320, track.clientWidth * 0.8);

    prev?.addEventListener("click", () => {
      track.scrollBy({ left: -step(), behavior: "smooth" });
    });
    next?.addEventListener("click", () => {
      track.scrollBy({ left: step(), behavior: "smooth" });
    });
  });

  const form = document.querySelector(".contact-form form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("感謝您的查詢！我們會盡快回覆您。");
      form.reset();
    });
  }
});
