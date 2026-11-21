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
    { speaker: "THE DREAM", text: "The familiar streets of Luma Town dissolve into silence. There is no horizon here, only a sky that stretches in every direction." },
    { speaker: "???", text: story.name + "." },
    { speaker: "???", text: "Be at ease. You have not been taken from your world. This is only a moment between one heartbeat and the next." },
    { speaker: "ARCEUS", text: "I have watched countless journeys begin. Not all of them require a prophecy. Some begin quite simply, with the courage to greet a new morning." }
  ];
  const closing = [
    { speaker: "ARCEUS", text: "When morning comes, seek the laboratory in Luma Town. There is someone waiting to meet you, and familiar faces who will walk the road beside you." },
    { speaker: "ARCEUS", text: "What follows will belong to you. I will not write it in your place." },
    { speaker: "ARCEUS", text: "Now, awaken, " + story.name + "." }
  ];
  let scenes = [...shared, ...story.scenes, ...closing];
  let index = 0;
  let writing = false;
  let displayed = false;
  let frame = null;
  let currentCharacters = [];
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
    $("sigil-label").textContent = step.speaker === "???" ? "A VOICE" : step.speaker === "THE DREAM" ? "BEYOND SLEEP" : "ARCEUS";
    $("dialogue-text").classList.toggle("narration", step.speaker === "THE DREAM");
    $("dialogue-text").textContent = "";
    $("dialogue-hint").textContent = "Listening…";
    $("step-count").textContent = String(index + 1).padStart(2, "0") + " / " + String(scenes.length).padStart(2,"0");
    currentCharacters = Array.from(step.text);
    writing = true;
    if (reducedMotion) { finishTyping(); return; }
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
    $("replay").focus({preventScroll:true});
  }

  $("start").addEventListener("click", () => {
    $("intro").classList.add("hidden");
    $("dialogue-ui").classList.remove("hidden");
    $("hud-chapter").textContent = "A DREAM BEYOND TIME";
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
  $("replay").addEventListener("click", () => window.location.reload());
}