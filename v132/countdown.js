(function () {
  "use strict";

  // May 1, 2026 at 7:00 PM ET (UTC-4 during EDT)
  const TARGET = new Date("2026-05-01T19:00:00-04:00");

  const els = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
  };

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    const now = Date.now();
    let diff = TARGET.getTime() - now;

    if (diff <= 0) {
      diff = 0;
    }

    const totalSec = Math.floor(diff / 1000);
    const d = Math.floor(totalSec / 86400);
    const h = Math.floor((totalSec % 86400) / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;

    els.days.textContent = pad(d);
    els.hours.textContent = pad(h);
    els.minutes.textContent = pad(m);
    els.seconds.textContent = pad(s);

    if (diff > 0) {
      requestAnimationFrame(tick);
    }
  }

  document.addEventListener("DOMContentLoaded", tick);
})();
