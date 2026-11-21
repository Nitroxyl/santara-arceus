/* Purely decorative, deterministic star motes. Text/dialogue is handled by
   the shared engine; this script never modifies player choices or story. */
(() => {
  const sky = document.getElementById("hins-stars");
  if (!sky) return;

  let seed = 120493;
  const next = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 57; i++) {
    const mote = document.createElement("span");
    mote.className = "hins-particle";
    mote.style.setProperty("--x", (4 + next() * 92).toFixed(2) + "%");
    mote.style.setProperty("--y", (4 + next() * 89).toFixed(2) + "%");
    mote.style.setProperty("--s", (1 + next() * 2.2).toFixed(2) + "px");
    mote.style.setProperty("--delay", (-next() * 12).toFixed(2) + "s");
    mote.style.setProperty("--dur", (3 + next() * 8).toFixed(2) + "s");
    fragment.appendChild(mote);
  }
  sky.appendChild(fragment);
})();
