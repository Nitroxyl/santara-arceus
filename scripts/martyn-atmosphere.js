/* Decorative living and confined lights for Martyn's dream.
   A fixed seed ensures the scene is consistent on replay. */
(() => {
  const free = document.getElementById("mt-drifting-field");
  const bound = document.getElementById("mt-framed-field");
  if (!free || !bound) return;

  let seed = 657014;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const colors = [
    { shade:"#eacfff", glow:"#eacfff68", ring:"#eacfff65" },
    { shade:"#c5e8ff", glow:"#c5e8ff68", ring:"#c5e8ff65" },
    { shade:"#ffe1ca", glow:"#ffe1ca68", ring:"#ffe1ca65" },
    { shade:"#d5d3ff", glow:"#d5d3ff68", ring:"#d5d3ff65" }
  ];
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 54; i++) {
    const mote = document.createElement("span");
    const tone = colors[Math.floor(rand() * colors.length)];
    mote.className = "mt-mote";
    mote.style.setProperty("--x", (4 + rand()*92).toFixed(2) + "%");
    mote.style.setProperty("--y", (5 + rand()*86).toFixed(2) + "%");
    mote.style.setProperty("--size", (2 + rand()*3).toFixed(1) + "px");
    mote.style.setProperty("--shade", tone.shade);
    mote.style.setProperty("--glow", tone.glow);
    mote.style.setProperty("--ring", tone.ring);
    mote.style.setProperty("--speed", (5 + rand()*10).toFixed(2) + "s");
    mote.style.setProperty("--delay", (-rand()*12).toFixed(2) + "s");
    fragment.appendChild(mote);
  }
  free.appendChild(fragment);

  const ordered = document.createDocumentFragment();
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 7; col++) {
      const light = document.createElement("span");
      light.className = "mt-captive";
      light.style.setProperty("--x", (14 + col*12) + "%");
      light.style.setProperty("--y", (20 + row*19) + "%");
      ordered.appendChild(light);
    }
  }
  bound.appendChild(ordered);
})();
