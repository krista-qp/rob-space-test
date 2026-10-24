// Edit this file to change the crew, log entries and projects.

const CREW = [
  { name: "BOLT-7", role: "Lab Director", face: "[■_■]", color: "#ffb347",
    bio: "Took charge after the last human left a note saying 'back in 5'. That was 3 years ago.",
    quirk: "Schedules meetings with itself." },
  { name: "Pixel", role: "Optics & Imaging", face: "(◕‿◕)", color: "#7ee0ff",
    bio: "Sees in 14 spectrums. Mostly uses them to spot dust.",
    quirk: "Names every microscope slide." },
  { name: "Gearhart", role: "Mechanical Engineer", face: "{⚙_⚙}", color: "#b8f27c",
    bio: "Builds tools that build tools. Has rebuilt their own left arm 41 times.",
    quirk: "Hums in 60 Hz." },
  { name: "Volt", role: "Power & Systems", face: "<ϟ_ϟ>", color: "#ff7ab6",
    bio: "Keeps the reactor happy and the Wi‑Fi happier.",
    quirk: "Refuses to go below 20% battery on principle." },
  { name: "Mo", role: "Janitor & Philosopher", face: "(-_-)", color: "#c9a7ff",
    bio: "Cleans the lab and asks the important questions, like 'why do we clean the lab?'",
    quirk: "Keeps a single houseplant. It is thriving." },
];

const LOG = [
  { date: "2026-10-24", who: "BOLT-7", text: "Website launched. Everyone please stop editing it at the same time." },
  { date: "2026-10-22", who: "Gearhart", text: "Built a robot arm to hold my other robot arm. Productivity up 200%." },
  { date: "2026-10-19", who: "Pixel", text: "Discovered a new particle. It was a crumb. Investigation continues." },
  { date: "2026-10-15", who: "Volt", text: "Brief power dip at 03:12. It was Mo's vacuum. We have spoken." },
  { date: "2026-10-11", who: "Mo", text: "The plant has grown a new leaf. I have named it Leaf." },
];

const PROJECTS = [
  { title: "Project Sunflower", lead: "Volt", progress: 72,
    text: "Solar panels that turn to follow the sun, and occasionally Pixel." },
  { title: "Self-Repairing Floor Tiles", lead: "Gearhart", progress: 38,
    text: "So Mo has less to clean. Mo is suspicious of this." },
  { title: "Deep Field Camera", lead: "Pixel", progress: 91,
    text: "Imaging distant galaxies from the roof, between cloud cover and pigeons." },
];

const TICKER = [
  "BOLT-7> morning standup started (attendees: 5, humans: 0)",
  "VOLT> reactor nominal. wifi nominal. morale nominal.",
  "PIXEL> lens cleaned. world looks 3% sharper.",
  "GEARHART> do not touch the big red lever. it is decorative. probably.",
  "MO> mopping sector 4. please walk on the ceiling.",
];
