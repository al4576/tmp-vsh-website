(function () {
  "use strict";

  const DATA_URL = "./ial-diamond.json";

  function inferYear(details) {
    const match = String(details || "").match(/\b(20\d{2})\b/);
    return match ? match[1] : "";
  }

  function inferPhotoPathByYear(year) {
    return year ? "../assets/ial/" + year + ".jpg" : "";
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderSteps(items, stepsEl) {
    stepsEl.innerHTML = items
      .map(function (item, idx) {
        const name = escapeHtml(item.name || "Untitled");
        const details = escapeHtml(item.details || "");
        const activeClass = idx === 0 ? " is-active" : "";
        return (
          '<article class="diamond-step' +
          activeClass +
          '" data-image="' +
          escapeHtml(item.photo || "") +
          '">' +
          '<h3 class="diamond-name">' +
          name +
          "</h3>" +
          '<p class="diamond-details">' +
          details +
          "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function normalizeItems(payload) {
    function withResolvedPhoto(item) {
      if (!item || typeof item !== "object") return item;
      const year = item.year || inferYear(item.details);
      return {
        year: year ? Number(year) : undefined,
        name: item.name,
        details: item.details,
        photo: item.photo || inferPhotoPathByYear(year),
      };
    }

    function sortNewestFirst(items) {
      return items.sort(function (a, b) {
        const ay = Number(a && a.year) || 0;
        const by = Number(b && b.year) || 0;
        return by - ay;
      });
    }

    if (Array.isArray(payload)) {
      return sortNewestFirst(payload.map(withResolvedPhoto));
    }

    if (payload && Array.isArray(payload.items)) {
      return sortNewestFirst(payload.items.map(withResolvedPhoto));
    }

    if (payload && typeof payload === "object") {
      return sortNewestFirst(Object.entries(payload).map(function (entry) {
        const name = entry[0];
        const details = entry[1];
        const year = inferYear(details);
        return {
          year: year ? Number(year) : undefined,
          name: name,
          details: details,
          photo: inferPhotoPathByYear(year),
        };
      }));
    }

    return [];
  }

  function wireScrollBehavior(stepsEl, imageEl) {
    const steps = Array.from(stepsEl.querySelectorAll(".diamond-step"));
    if (!steps.length) return;
    let activeStep = null;
    let ticking = false;

    function activate(step) {
      if (!step || step === activeStep) return;
      activeStep = step;
      steps.forEach(function (s) {
        s.classList.toggle("is-active", s === step);
      });
      const nextImage = step.dataset.image || "";
      if (nextImage) {
        imageEl.src = nextImage;
        imageEl.alt = step.querySelector(".diamond-name")?.textContent || "IAL Diamond feature image";
        imageEl.classList.remove("is-hidden");
      } else {
        imageEl.removeAttribute("src");
        imageEl.alt = "";
        imageEl.classList.add("is-hidden");
      }
    }

    activate(steps[0]);

    function pickStepByViewport() {
      const focusY = window.innerHeight * 0.42;
      let bestStep = steps[0];
      let bestDistance = Infinity;

      steps.forEach(function (step) {
        const rect = step.getBoundingClientRect();
        const stepCenter = rect.top + rect.height / 2;
        const distance = Math.abs(stepCenter - focusY);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestStep = step;
        }
      });

      activate(bestStep);
      ticking = false;
    }

    function onScrollOrResize() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(pickStepByViewport);
      }
    }

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
  }

  async function initScrollyDiamond() {
    const stepsEl = document.getElementById("diamondSteps");
    const imageEl = document.getElementById("diamondImage");
    if (!stepsEl || !imageEl) return;

    try {
      const res = await fetch(DATA_URL, { cache: "no-store" });
      if (!res.ok) throw new Error("Could not load data.");
      const payload = await res.json();

      const items = normalizeItems(payload);
      if (!Array.isArray(items) || items.length === 0) {
        throw new Error("No entries in JSON.");
      }

      renderSteps(items, stepsEl);
      wireScrollBehavior(stepsEl, imageEl);
    } catch (err) {
      console.warn("[scrolly-diamond]", err);
      stepsEl.innerHTML =
        '<article class="diamond-step is-active">' +
        '<h3 class="diamond-name">IAL Diamond</h3>' +
        '<p class="diamond-details">Could not load award history. If you opened this page directly from Finder, run it through a local server so JSON fetch works.</p>' +
        "</article>";
      imageEl.removeAttribute("src");
      imageEl.alt = "";
      imageEl.classList.add("is-hidden");
    }
  }

  document.addEventListener("DOMContentLoaded", initScrollyDiamond);
})();
