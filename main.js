const byName = Object.fromEntries(CREW.map((r) => [r.name, r]));

const el = (tag, cls, text) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text != null) node.textContent = text;
  return node;
};

// Crew cards: the face "blinks" and the robot says its quirk when clicked.
const grid = document.getElementById("crew-grid");
for (const bot of CREW) {
  const card = el("button", "bot");
  card.type = "button";
  card.style.setProperty("--accent", bot.color);
  card.append(
    el("div", "face", bot.face),
    el("h3", null, bot.name),
    el("p", "role", bot.role),
    el("p", "bio", bot.bio),
  );
  const bubble = el("p", "bubble", "Quirk: " + bot.quirk);
  card.append(bubble);
  card.addEventListener("click", () => card.classList.toggle("talking"));
  grid.append(card);
}

const logList = document.getElementById("log-list");
for (const entry of LOG) {
  const li = el("li");
  const who = el("span", "who", entry.who);
  who.style.color = byName[entry.who]?.color ?? "inherit";
  li.append(el("time", null, entry.date), who, el("span", "text", entry.text));
  logList.append(li);
}

const projectList = document.getElementById("project-list");
for (const p of PROJECTS) {
  const card = el("article", "project");
  const bar = el("div", "bar");
  const fill = el("div", "fill");
  fill.style.width = p.progress + "%";
  fill.style.background = byName[p.lead]?.color ?? "var(--accent)";
  bar.append(fill);
  card.append(
    el("h3", null, p.title),
    el("p", "role", "Lead: " + p.lead + " · " + p.progress + "%"),
    el("p", null, p.text),
    bar,
  );
  projectList.append(card);
}

// Terminal ticker
const ticker = document.getElementById("ticker");
let i = 0;
setInterval(() => {
  ticker.textContent = TICKER[i++ % TICKER.length];
}, 3500);

const uptime = document.getElementById("uptime");
const start = Date.now();
setInterval(() => {
  uptime.textContent = Math.floor((Date.now() - start) / 1000);
}, 1000);
