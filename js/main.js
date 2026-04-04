(function () {
  "use strict";

  const CONFIG = {
    textSliceDelay: 750,       // ms before "SEE THE VARSITY SHOW" slices down
    bubbleBounceDelay: 750,    // ms before bubble bounces into header position
    headerScrollThreshold: 0.4, // fraction of hero height scrolled before header appears
  };

  const heroTextTrack = document.getElementById("heroTextTrack");
  const heroBubble = document.getElementById("heroBubble");
  const scrollCue = document.getElementById("scrollCue");
  const siteHeader = document.getElementById("siteHeader");
  const heroSection = document.getElementById("hero");


  function startTextSlice() {
    if (!heroTextTrack) return;

    setTimeout(() => {
      heroTextTrack.classList.add("is-visible");
    }, CONFIG.textSliceDelay);
  }


  function startBubbleBounce() {
    if (!heroBubble) return;

    setTimeout(() => {
      if (siteHeader && siteHeader.classList.contains("is-visible")) return;
      heroBubble.classList.add("is-visible");
    }, CONFIG.bubbleBounceDelay);
  }


  function setupScrollCue() {
    if (!scrollCue) return;

    const cueDelay = Math.max(CONFIG.textSliceDelay, CONFIG.bubbleBounceDelay) + 900;
    let cueShown = false;

    function markCueReady() {
      if (cueShown) return;
      cueShown = true;
      scrollCue.classList.add("is-visible");
      window.removeEventListener("scroll", markCueReadyOnScroll);
    }

    function markCueReadyOnScroll() {
      if (window.scrollY > 0) {
        markCueReady();
      }
    }

    setTimeout(markCueReady, cueDelay);
    window.addEventListener("scroll", markCueReadyOnScroll, { passive: true });
    markCueReadyOnScroll();
  }


  function setupHeaderScroll() {
    if (!siteHeader || !heroSection) return;
    let hasShownHeader = false;

    function onScroll() {
      if (hasShownHeader) return;

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const threshold = heroBottom * CONFIG.headerScrollThreshold;

      if (window.scrollY > threshold) {
        siteHeader.classList.add("is-visible");
        if (heroBubble) {
          heroBubble.classList.remove("is-visible");
        }
        hasShownHeader = true;
        window.removeEventListener("scroll", onScroll);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }


  document.addEventListener("DOMContentLoaded", () => {
    startTextSlice();
    startBubbleBounce();
    setupScrollCue();
    setupHeaderScroll();
  });

})();
