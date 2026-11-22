// Shared visual-novel engine. Each player's story is loaded only on their page.
export function launch(story) {
  const $ = (id) => document.getElementById(id);
  const root = document.documentElement;
  root.style.setProperty("--accent", story.accent);
  root.style.setProperty("--accent-rgb", story.accentRgb);
  document.title = story.name + " · A Dream Beyond Time | Santara";

  $("player-name").textContent = story.name;
  $("starter-name").textContent = story.starter;
  $("intro-title").textContent = story.introTitle || "A dream beyond time";
  $("ending-name").textContent = story.name;

  const shared = [
    { speaker: "THE DREAM", text: "You fall asleep beneath the familiar skies of Luma Town. Then the walls and ceiling are gone. In their place is a boundless sky, filled with stars that do not move." },
    { speaker: "???", text: story.name + "." },
    { speaker: "???", text: "Be at peace. You have not left your home. I have invited only your dreaming mind into this place between moments." },
    { speaker: "THE DREAM", text: "A ring of golden light turns in the distance. Within it, a radiant figure emerges, a presence you know from the oldest stories of your world." },
    { speaker: "ARCEUS", text: "I am Arceus. Before this land had a name, before the first dawn broke across its seas, I was. Tonight, I have come to speak with you." },
    { speaker: "ARCEUS", text: "Do not be afraid. I have no command to place upon you. There is simply something you must be given the freedom to hear." }
  ];
  const closing = [
    { speaker: "ARCEUS", text: "When morning comes, take your partner and go to Professor Meranti's laboratory in Luma Town. You will find familiar faces there. You have walked beside them before; today you will begin a different road together." },
    { speaker: "ARCEUS", text: "Whatever follows will belong to you. I will not write it in your place." },
    { speaker: "ARCEUS", text: "Go forth, then. The world is yours to discover, and tomorrow is yours to shape. Awaken, " + story.name + "." }
  ];
  // A player may supply a fully authored prologue and epilogue.
  // All default prologues acknowledge that the players already have their Pokémon.
  let scenes = [...(story.opening ?? shared), ...story.scenes, ...(story.closing ?? closing)];
  let index = 0;
  let writing = false;
  let displayed = false;
  let frame = null;
  let currentCharacters = [];
  const visited = new Set();
  const history = [];
  let instantText = false;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function finishTyping() {
    if (!writing) return;
    if (frame !== null) cancelAnimationFrame(frame);
    $("dialogue-text").textContent = currentCharacters.join("");
    writing = false;
    showControls();
  }

  function showControls() {
    const step = scenes[index];
    if (!visited.has(step)) {
      visited.add(step);
      history.push({ speaker: step.speaker, text: step.text });
    }
    if (step.choices && !step.selected) {
      $("choices").replaceChildren();
      for (const choice of step.choices) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "choice";
        button.textContent = choice.label;
        button.addEventListener("click", (event) => {
          event.stopPropagation();
          if (step.selected) return;
          step.selected = true;
          scenes.splice(index + 1, 0, { speaker: "ARCEUS", text: choice.response });
          $("choices").classList.add("hidden");
          advance();
        });
        $("choices").append(button);
      }
      $("choices").classList.remove("hidden");
      $("next").classList.add("hidden");
      $("dialogue-hint").textContent = "Choose your response";
      $("choices").querySelector("button")?.focus({preventScroll:true});
    } else {
      $("choices").classList.add("hidden");
      $("next").classList.remove("hidden");
      $("dialogue-hint").textContent = "Click here or press Space to continue";
    }
  }

  function render() {
    if (index >= scenes.length) { complete(); return; }
    if (frame !== null) cancelAnimationFrame(frame);
    const step = scenes[index];
    $("choices").classList.add("hidden");
    $("next").classList.add("hidden");
    $("speaker").textContent = step.speaker;
    $("experience").dataset.scene = step.scene || "normal";
    $("experience").dataset.voice = step.speaker === "???" ? "mystery" : step.speaker === "THE DREAM" ? "narration" : "arceus";
    $("sigil-label").textContent = step.speaker === "???" ? "A VOICE" : step.speaker === "THE DREAM" ? "BEYOND SLEEP" : "ARCEUS";
    $("dialogue-text").classList.toggle("narration", step.speaker === "THE DREAM");
    $("dialogue-text").textContent = "";
    $("dialogue-hint").textContent = "Listening…";
    $("step-count").textContent = String(index + 1).padStart(2, "0") + " / " + String(scenes.length).padStart(2,"0");
    currentCharacters = Array.from(step.text);
    writing = true;
    if (reducedMotion || instantText) { finishTyping(); return; }
    let started = null;
    const duration = Math.min(2350, Math.max(800, currentCharacters.length * 22));
    function tick(timestamp) {
      if (started === null) started = timestamp;
      const count = Math.min(currentCharacters.length, Math.floor((timestamp - started) / duration * currentCharacters.length));
      $("dialogue-text").textContent = currentCharacters.slice(0, count).join("");
      if (count < currentCharacters.length) frame = requestAnimationFrame(tick);
      else { frame = null; writing = false; showControls(); }
    }
    frame = requestAnimationFrame(tick);
  }

  function advance() {
    if (!displayed) return;
    if (writing) { finishTyping(); return; }
    const step = scenes[index];
    if (step?.choices && !step.selected) return;
    index += 1;
    render();
  }

  function complete() {
    displayed = false;
    $("dialogue-ui").classList.add("hidden");
    $("ending").classList.remove("hidden");
    $("hud-chapter").textContent = "THE MORNING AWAITS";
    $("experience").dataset.voice = "narration";
    $("experience").dataset.scene = "ending";
    $("replay").focus({preventScroll:true});
  }

  $("start").addEventListener("click", () => {
    $("intro").classList.add("hidden");
    $("dialogue-ui").classList.remove("hidden");
    $("hud-chapter").textContent = "A DREAM BEYOND TIME";
    $("experience").classList.add("started", "dream-entering");
    $("experience").dataset.voice = "narration";
    displayed = true;
    render();
  });
  $("next").addEventListener("click", (event) => { event.stopPropagation(); advance(); });
  $("dialogue-panel").addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    advance();
  });
  document.addEventListener("keydown", (event) => {
    if (!displayed || ![" ", "Enter"].includes(event.key)) return;
    if (event.target.closest("button")) return; // Let buttons handle their own keyboard activation.
    event.preventDefault();
    advance();
  });
  const memoryDialog = $("memory-dialog");
  const memoryLines = $("memory-lines");
  $("memory-button").addEventListener("click", () => {
    if (writing) finishTyping();
    memoryLines.replaceChildren();
    for (const line of history) {
      const entry = document.createElement("article");
      entry.className = "memory-entry";
      const name = document.createElement("span");
      name.className = "memory-speaker";
      name.textContent = line.speaker;
      const text = document.createElement("p");
      text.className = "memory-text";
      text.textContent = line.text;
      entry.append(name, text);
      memoryLines.append(entry);
    }
    memoryDialog.showModal();
  });
  $("memory-close").addEventListener("click", () => memoryDialog.close());

  $("instant-button").addEventListener("click", () => {
    instantText = !instantText;
    $("instant-button").setAttribute("aria-pressed", String(instantText));
    $("instant-button").textContent = "Instant text: " + (instantText ? "on" : "off");
    if (instantText && writing) finishTyping();
  });

  $("replay").addEventListener("click", () => window.location.reload());
}