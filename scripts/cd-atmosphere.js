/* Purely decorative dream motes, seeded for consistent replay. */
(() => {
  const field = document.getElementById("cd-particles");
  if (!field) return;
  let seed = 360112;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 75; i++) {
    const mote = document.createElement("span");
    mote.className = "cd-snowflake";
    mote.style.setProperty("--x", (3 + rand() * 94).toFixed(2) + "%");
    mote.style.setProperty("--y", (3 + rand() * 93).toFixed(2) + "%");
    mote.style.setProperty("--size", (1.3 + rand() * 3.1).toFixed(2) + "px");
    mote.style.setProperty("--duration", (4 + rand() * 9).toFixed(2) + "s");
    mote.style.setProperty("--delay", (-rand() * 14).toFixed(2) + "s");
    fragment.appendChild(mote);
  }
  field.appendChild(fragment);
})();
