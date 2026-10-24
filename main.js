const byName = Object.fromEntries(CREW.map((r) => [r.name, r]));
const colorOf = (name) => byName[name]?.color ?? "var(--accent)";

const el = (tag, cls, text) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text != null) node.textContent = text;
  return node;
};
const $ = (id) => document.getElementById(id);

// Hero
$("city").textContent = LAB.city;
$("coords").textContent = LAB.coords;
$("footer-city").textContent = LAB.city;
$("contact-btn").href = LAB.contactUrl;
$("days").textContent = Math.floor((Date.now() - new Date(LAB.lastHumanVisit)) / 86400000).toLocaleString("en");
$("crew-count").textContent = CREW.length;
$("inc-count").textContent = INCIDENTS.length;

const clockFmt = new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Stockholm", hour: "2-digit", minute: "2-digit" });
const tickClock = () => { $("clock").textContent = clockFmt.format(new Date()); };
tickClock();
setInterval(tickClock, 10000);

for (const p of PRINCIPLES) {
  const card = el("article", "principle");
  card.append(el("h3", null, p.title), el("p", null, p.text), el("p", "from", "Learned from " + p.from));
  $("principle-list").append(card);
}

// Crew cards: clicking shows the quirk and what to ask them about.
for (const bot of CREW) {
  const card = el("button", "bot");
  card.type = "button";
  card.style.setProperty("--accent", bot.color);
  const bubble = el("div", "bubble");
  bubble.append(el("p", null, "Quirk: " + bot.quirk), el("p", null, "Ask me about: " + bot.askMe));
  card.append(
    el("div", "face", bot.face),
    el("h3", null, bot.name),
    el("p", "role", bot.role),
    el("p", "bio", bot.bio),
    bubble,
  );
  card.addEventListener("click", () => card.classList.toggle("talking"));
  $("crew-grid").append(card);
}

for (const t of TRACKS) {
  const card = el("article", "project");
  const bar = el("div", "bar");
  const fill = el("div", "fill");
  fill.style.width = t.progress + "%";
  fill.style.background = colorOf(t.lead);
  bar.append(fill);
  card.append(
    el("h3", null, t.title),
    el("p", "role", "Lead: " + t.lead + " · " + t.progress + "%"),
    el("p", null, t.text),
    el("p", "metric", t.metric),
    bar,
  );
  $("track-list").append(card);
}

for (const inc of INCIDENTS) {
  const card = el("article", "incident sev-" + inc.severity);
  const head = el("p", "inc-head");
  const who = el("span", "who", inc.who);
  who.style.color = colorOf(inc.who);
  head.append(el("span", "inc-id", inc.id), who, el("span", "sev", inc.severity));
  card.append(head, el("p", null, inc.what), el("p", "learned", "→ " + inc.learned));
  $("incident-list").append(card);
}

for (const entry of LOG) {
  const li = el("li");
  const who = el("span", "who", entry.who);
  who.style.color = colorOf(entry.who);
  li.append(el("time", null, entry.date), who, el("span", "text", entry.text));
  $("log-list").append(li);
}

for (const f of FRIENDS) {
  const card = el("article", "friend");
  const name = el("a", null, f.org + " ↗");
  name.href = f.url;
  name.target = "_blank";
  name.rel = "noopener";
  const h = el("h3");
  h.append(name);
  const ideas = el("ul", "ideas");
  for (const idea of f.pitch) ideas.append(el("li", null, idea));
  card.append(
    el("p", "tag", f.tag),
    h,
    el("p", "label", "What we admire"),
    el("p", null, f.admire),
    el("p", "label", "What we'd like to try together"),
    ideas,
  );
  $("friend-list").append(card);
}

for (const s of STEPS) {
  const li = el("li");
  li.append(el("span", "step-n", s.n), el("h4", null, s.title), el("p", null, s.text));
  $("step-list").append(li);
}

let i = 0;
setInterval(() => { $("ticker").textContent = TICKER[i++ % TICKER.length]; }, 3500);

const start = Date.now();
setInterval(() => { $("uptime").textContent = Math.floor((Date.now() - start) / 1000); }, 1000);
