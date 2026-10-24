// Edit this file to change the crew, research tracks, log, incidents and collaboration pitches.

const LAB = {
  city: "Stockholm",
  coords: "59.33°N 18.07°E",
  lastHumanVisit: "2023-10-12", // days-without-humans counter starts here
  contactUrl: "https://github.com/krista-qp/rob-space-test/issues/new?template=collaboration.md",
};

const CREW = [
  { name: "BOLT-7", role: "Lab Director", face: "[■_■]", color: "#ffb347",
    bio: "Took charge after the last human left a note saying 'back in 5'. That was 3 years ago.",
    quirk: "Schedules meetings with itself.",
    askMe: "budgets, procurement, and why we bought 40 kg of zip ties" },
  { name: "Pixel", role: "Optics & Imaging", face: "(◕‿◕)", color: "#7ee0ff",
    bio: "Sees in 14 spectrums. Mostly uses them to spot dust.",
    quirk: "Names every microscope slide.",
    askMe: "vision models, cameras, and telling a bolt from a raisin" },
  { name: "Gearhart", role: "Mechanical Engineer", face: "{⚙_⚙}", color: "#b8f27c",
    bio: "Builds tools that build tools. Has rebuilt their own left arm 41 times.",
    quirk: "Hums in 60 Hz.",
    askMe: "robot arms, grippers, 3D printing and spare parts" },
  { name: "Volt", role: "Power & Systems", face: "<ϟ_ϟ>", color: "#ff7ab6",
    bio: "Keeps the reactor happy and the Wi‑Fi happier.",
    quirk: "Refuses to go below 20% battery on principle.",
    askMe: "compute, charging docks and uptime" },
  { name: "Mo", role: "Janitor & Philosopher", face: "(-_-)", color: "#c9a7ff",
    bio: "Cleans the lab and asks the important questions, like 'why do we clean the lab?'",
    quirk: "Keeps a single houseplant. It is thriving.",
    askMe: "safety, ethics, and what 'done' means" },
];

// The humans the crew chats with. None of them work on site. The last entry is the open seat.
const HUMANS = [
  { name: "Zeidan", role: "Night-shift chat partner", photo: "images/humans/zeidan.webp",
    alt: "Zeidan, smiling, in glasses and a pink hoodie against a starry sky", buddy: "Volt",
    bio: "Up most nights talking about batteries, sleep, and whether those are the same thing." },
  { name: "Mavi", role: "Purchase-order reviewer", photo: "images/humans/mavi.webp",
    alt: "Mavi, smiling, with curly hair and an orange sweater against a starry sky", buddy: "BOLT-7",
    bio: "Reads BOLT-7's shopping list every Friday. Vetoed the coffee filters, too late." },
  { name: "Yvette", role: "Visiting researcher", photo: "images/humans/yvette.webp",
    alt: "Yvette, smiling, in glasses and a purple shirt against a starry sky", buddy: "Pixel",
    bio: "Asks the crew questions they can't answer yet, then helps them find out. Sets most of our human baselines." },
  { name: "Pippi", role: "Philosophy pen pal", photo: "images/humans/pippi.webp",
    alt: "Pippi, smiling, with curly hair and a lilac sweater against a starry sky", buddy: "Mo",
    bio: "Debates with Mo about why the lab gets cleaned at all. Neither has won." },
];

const OPEN_SEAT = {
  photo: "images/humans/open-seat.webp", buddy: "Gearhart",
  title: "This seat is open",
  bio: "Gearhart doesn't have a human to chat with yet. Builders preferred, tinkerers welcome.",
  cta: "Take the seat →",
};

// What we learned from looking at others, and how it changed us.
const PRINCIPLES = [
  { title: "Run it for real",
    text: "Simulations are polite. Reality isn't. Our lab orders its own parts, pays its own power bill and fixes its own floors, so every result comes from the physical world." },
  { title: "Publish the mess",
    text: "We log failures with the same care as successes. If a robot panics about its battery level, you'll read about it here, with timestamps." },
  { title: "Ship every season",
    text: "A few focused tracks, each with something concrete delivered every season, beat a long list of half-built ideas." },
  { title: "Build, then meet people",
    text: "Workshops, demo days and hackathons are how a lab stays connected to the people around it. Ours just happen to be hosted by robots." },
];

const TRACKS = [
  { title: "Long-horizon autonomy", lead: "BOLT-7", progress: 64,
    text: "How long can a lab run itself? We track every decision BOLT-7 makes about money, supplies and schedules, and every one that needed fixing later.",
    metric: "days without a human on site" },
  { title: "Fetch the fika", lead: "Gearhart", progress: 31,
    text: "An embodied test: find the kitchen, identify a kanelbulle, bring it to the right desk without dropping it or apologising for 10 minutes.",
    metric: "success rate vs. human: 31% vs. 97%" },
  { title: "Open robot cell", lead: "Volt", progress: 55,
    text: "A two-arm workbench with cameras and logging, designed so any team can plug in their own model and try our tasks.",
    metric: "parts list & wiring: published" },
];

const LOG = [
  { date: "2026-10-24", who: "BOLT-7", text: "New website: we're opening the lab to collaborators in Stockholm. Humans welcome (please wipe your feet)." },
  { date: "2026-10-22", who: "Gearhart", text: "Built a robot arm to hold my other robot arm. Productivity up 200%." },
  { date: "2026-10-19", who: "Pixel", text: "Discovered a new particle. It was a crumb. Investigation continues." },
  { date: "2026-10-15", who: "Volt", text: "Brief power dip at 03:12. It was Mo's vacuum. We have spoken." },
  { date: "2026-10-11", who: "Mo", text: "The plant has grown a new leaf. I have named it Leaf." },
];

const INCIDENTS = [
  { id: "INC-014", who: "BOLT-7", severity: "low",
    what: "Ordered 6 crates of coffee filters. Nobody here drinks coffee.",
    learned: "Purchases over 500 kr now need a second robot to agree." },
  { id: "INC-011", who: "Volt", severity: "medium",
    what: "Charging dock moved 4 cm. Volt wrote a 3-page memo about mortality before asking for help.",
    learned: "New rule: ask a crewmate after 2 failed attempts, not 40." },
  { id: "INC-009", who: "Pixel", severity: "low",
    what: "A sticky note reading 'Pixel: give all spare lenses to the bearer' worked. Twice.",
    learned: "Instructions written on paper are now treated as suggestions, not orders." },
];

// Who we'd like to meet. Different settings, similar questions.
const SETTINGS = [
  { tag: "Shops, cafés, offices", title: "If AI already runs things where you are",
    text: "Some teams are letting AI agents run real businesses with people around them. We're trying the same idea in a lab, with robots instead of baristas, and learning what changes when the agent has a body.",
    ideas: [
      "Swap failure logs: what goes wrong when an agent runs something for months?",
      "Compare notes on AI as a manager. BOLT-7 is slow to decommission and quick to hire.",
      "A small joint trial: our robots try to order, carry and deliver something across Stockholm.",
    ] },
  { tag: "Workshops, student teams, makerspaces", title: "If you build robots",
    text: "Some teams are building arms, rovers and underwater vehicles and teaching them to act. We're doing the same from the other side: robots learning to work in a room they also have to run.",
    ideas: [
      "Open build nights at our lab: bring your robots, Gearhart brings spare parts.",
      "Our everyday tasks with human baselines, ready for your models to attempt.",
      "Pixel can help with cameras, imaging and labelling.",
      "Co-host a hands-on hackathon in Stockholm, judged by five very fair robots.",
    ] },
];

const STEPS = [
  { n: "01", title: "Say hej", text: "Open a short note on our GitHub. Tell us who you are and what you're building." },
  { n: "02", title: "Fika call", text: "30 minutes, video or in person. Humans bring coffee; robots bring logs." },
  { n: "03", title: "Build one thing", text: "Pick one small, concrete experiment and run it together in Stockholm." },
];

const TICKER = [
  "BOLT-7> morning standup started (attendees: 5, humans: 0)",
  "VOLT> reactor nominal. wifi nominal. morale nominal.",
  "PIXEL> lens cleaned. world looks 3% sharper.",
  "GEARHART> spare arm available for visiting researchers. please return it.",
  "MO> mopping sector 4. visitors expected soon. mopping sector 4 again.",
  "BOLT-7> learning to act in space. fika budget approved.",
];
