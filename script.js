"use strict";

const en = {
  skip:"Skip to content",navProjects:"Projects",navServices:"Skills",navProfile:"Experience",navContact:"Contact",
  heroKicker:"WEB DEVELOPER / ALGIERS",heroTitleA:"Web design",heroTitleB:"with character.",
  heroText:"I’m Samy Asselah, a web developer and Mathematics and Computer Science student in Algiers. I build websites and web interfaces for businesses and independent professionals.",
  heroCta:"Explore my skills",heroContact:"Let’s talk about your project",heroStatus:"OPEN TO PROJECTS AND INTERNSHIPS",
  projectIndex:"SELECTED WORK",projectHeading:["Selected work","."],projectIntro:"Four examples of my work, from web development to visual algorithms.",
  horizonTag:"EVENT WEBSITE · WEB CHAIR",dawaaTag:"EVENT WEBSITE · WEB CHAIR",campusTag:"STUDENT PLATFORM · IN DEVELOPMENT",spatialTag:"EXPERIMENT · ALGORITHMS",
  servicesIndex:"SKILLS",servicesHeading:["What I do","."],servicesIntro:"From designing an interface to putting a site online.",
  service1:"Web development",service1Text:"I build responsive interfaces and connect websites to databases for content, accounts or registrations.",
  service2:"Design and usability",service2Text:"I organize content, develop visual identities and make websites easier to navigate, from new builds to redesigns.",
  service3:"Algorithms",service3Text:"I break problems down, choose appropriate data structures and explain my reasoning through exercises.",
  profileIndex:"EXPERIENCE & EDUCATION",profilePlace:"BASED IN ALGIERS, ALGERIA",
  profileLead:"Web developer and second-year Mathematics and Computer Science student at ESST Algiers.",
  profileText:"I like to understand how a tool will be used before I build it. My internships gave me a first look at how teams work, and tutoring taught me to explain technical ideas clearly.",
  internship:"INTERNSHIP",involvement:"CAMPUS INVOLVEMENT",
  biopharm:"Joined team meetings and learned how a company approaches the structure of a website.",
  frater:"Internship with the Algerian pharmaceutical group Frater-Razes.",
  esst:"Section representative and algorithms tutor for first-year students.",
  contactIndex:"CONTACT",contactTitle:["Let’s talk","."],
  contactText:"Have a website idea, a collaboration in mind or an internship opportunity? Get in touch on LinkedIn.",
  contactButton:"Message me on LinkedIn",backTop:"BACK TO TOP ↑",dialogRole:"My contribution"
};

const languageButton = document.querySelector(".language");
const nav = document.querySelector("nav");
const dialog = document.querySelector(".project-dialog");
const closeDialog = dialog.querySelector(".close-dialog");
const translations = Array.from(document.querySelectorAll("[data-i]"), (node) => ({
  node,
  original: Array.from(node.childNodes, (child) => child.cloneNode(true))
}));
let language = "fr";

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  for (const { node, original } of translations) {
    const value = en[node.dataset.i];
    if (language === "fr") {
      node.replaceChildren(...original.map((child) => child.cloneNode(true)));
    } else if (Array.isArray(value)) {
      const punctuation = document.createElement("span");
      punctuation.textContent = value[1];
      node.replaceChildren(value[0], punctuation);
    } else if (value) {
      node.textContent = value;
    }
  }
  languageButton.textContent = language === "fr" ? "EN" : "FR";
  languageButton.setAttribute("aria-label", language === "fr" ? "Switch to English" : "Passer en français");
  nav.setAttribute("aria-label", language === "fr" ? "Navigation principale" : "Main navigation");
  closeDialog.setAttribute("aria-label", language === "fr" ? "Fermer" : "Close");
  try {
    localStorage.setItem("portfolio-language", language);
  } catch {
    // Language switching works without storage.
  }
}

try {
  if (localStorage.getItem("portfolio-language") === "en") setLanguage("en");
} catch {
  // French remains the default.
}
languageButton.addEventListener("click", () => setLanguage(language === "fr" ? "en" : "fr"));


const projects = {
  horizon: {
    title: "Horizon",
    tags: ["PHP", "MySQL", "HTML / CSS / JS"],
    url: "https://horizon.esst.cloud/",
    fr: {
      label: "01 / SITE ÉVÉNEMENTIEL",
      summary: "Site du séminaire Algérie Horizon Numérique organisé par l’ESST et l’USTHB. La plateforme réunit la présentation de l’événement, son programme et les inscriptions étudiantes.",
      role: "Comme Web Chair, j’ai adapté la base technique de DAWAA aux besoins d’Horizon, notamment pour le programme, les inscriptions et l’administration."
    },
    en: {
      label: "01 / EVENT WEBSITE",
      summary: "Website for the Algérie Horizon Numérique seminar organized by ESST and USTHB. The platform brings together the event information, schedule and student registrations.",
      role: "As Web Chair, I adapted the DAWAA codebase for Horizon, including the schedule, registration and admin workflows."
    }
  },
  dawaa: {
    title: "DAWAA 2026",
    tags: ["PHP", "MySQL", "HTML / CSS / JS"],
    url: "https://dawaa.esst.cloud/",
    fr: {
      label: "02 / SÉMINAIRE SCIENTIFIQUE",
      summary: "Site du séminaire de l’ESST sur l’analyse des médicaments et l’évaluation des applications bien-être.",
      role: "Comme Web Chair, j’ai travaillé sur la vitrine, le parcours d’inscription et de dépôt des résumés, ainsi que les espaces d’administration et du comité scientifique."
    },
    en: {
      label: "02 / SCIENTIFIC SEMINAR",
      summary: "Website for the ESST seminar on pharmaceutical analysis and the evaluation of wellness applications.",
      role: "As Web Chair, I worked on the public website, registration and abstract submission flows, and the admin and scientific committee areas."
    }
  },
  docampus: {
    title: "DoCampus",
    tags: ["Next.js", "TypeScript", "Supabase"],
    fr: {
      label: "03 / PROJET EN DÉVELOPPEMENT",
      summary: "Une plateforme pour regrouper les ressources PDF de l’ESST par année, semestre et module.",
      role: "J’ai développé les fondations du catalogue et de l’authentification avec des comptes institutionnels. Le projet est en cours de développement."
    },
    en: {
      label: "03 / IN DEVELOPMENT",
      summary: "A platform designed to organize ESST course PDFs by year, semester and module.",
      role: "I built the foundations for the catalogue and institutional account sign-in. The project is still in development."
    }
  },
  spatial: {
    title: "Spatial Decryption",
    tags: ["Algorithmique", "Grilles 3×3"],
    enTags: ["Algorithms", "3×3 grids"],
    url: "https://github.com/Samy-Asl?tab=repositories",
    fr: {
      label: "04 / EXPÉRIMENTATION",
      summary: "Une exploration du chiffrement et du déchiffrement visuels à travers des motifs tracés sur une grille 3×3.",
      role: "J’ai exploré la représentation des suites de points et leur mise en mouvement pour rendre les motifs plus faciles à suivre."
    },
    en: {
      label: "04 / EXPERIMENT",
      summary: "An experiment in visual encryption and decryption using patterns drawn on a 3×3 grid.",
      role: "I explored how to represent point sequences and animate them so the patterns are easier to follow."
    }
  }
};

for (const button of document.querySelectorAll(".project-trigger")) {
  button.addEventListener("click", () => {
    const project = projects[button.dataset.project];
    const copy = project[language];
    dialog.querySelector(".dialog-label").textContent = copy.label;
    dialog.querySelector("#dialog-title").textContent = project.title;
    dialog.querySelector(".dialog-description").textContent = copy.summary;
    dialog.querySelector(".dialog-role").textContent = copy.role;
    const tags = language === "en" && project.enTags ? project.enTags : project.tags;
    dialog.querySelector(".dialog-stack").replaceChildren(...tags.map((text) => {
      const tag = document.createElement("span");
      tag.textContent = text;
      return tag;
    }));
    const link = dialog.querySelector(".dialog-link");
    link.hidden = !project.url;
    if (project.url) {
      link.href = project.url;
      const github = button.dataset.project === "spatial";
      link.querySelector("span").textContent = language === "fr"
        ? (github ? "Voir les dépôts GitHub" : "Visiter le site")
        : (github ? "Browse GitHub repositories" : "Visit the website");
    }
    dialog.showModal();
  });
}

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});


const canvas = document.querySelector("#sculpture");
const ctx = canvas.getContext("2d");

if (ctx) {
  const rows = 132;
  const sides = 22;
  const points = [];
  const faces = [];
  const fullTurn = 2 * Math.PI;
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const compact = matchMedia("(max-width: 490px)");
  const normalize = ([x, y, z]) => {
    const length = Math.hypot(x, y, z);
    return [x / length, y / length, z / length];
  };
  const cross = (a, b) => [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ];
  const knot = (t) => {
    const radius = 1.25 + 0.49 * Math.cos(3 * t);
    return [radius * Math.cos(2 * t), radius * Math.sin(2 * t), 0.62 * Math.sin(3 * t)];
  };

  for (let row = 0; row < rows; row += 1) {
    const t = row * fullTurn / rows;
    const center = knot(t);
    const next = knot(t + 0.001);
    const tangent = normalize(next.map((value, index) => value - center[index]));
    const normal = normalize(cross(tangent, [0, 0, 1]));
    const binormal = cross(tangent, normal);
    for (let side = 0; side < sides; side += 1) {
      const angle = side * fullTurn / sides + t;
      const radius = 0.29 + 0.035 * Math.cos(5 * t) + 0.022 * Math.cos(angle * 4);
      const direction = normal.map((value, index) => value * Math.cos(angle) + binormal[index] * Math.sin(angle));
      points.push({ center: center.map((value, index) => value + radius * direction[index]), direction });
      faces.push({
        vertices: [
          row * sides + side,
          ((row + 1) % rows) * sides + side,
          ((row + 1) % rows) * sides + (side + 1) % sides,
          row * sides + (side + 1) % sides
        ],
        row,
        side
      });
    }
  }

  let width = 0;
  let height = 0;
  let active = false;
  let animation = 0;
  let lastFrame = 0;
  let phase = 0;

  function draw() {
    if (!width || !height) return;
    const xAngle = 0.47 + Math.sin(phase * 0.8) * 0.14;
    const yAngle = -0.35 + Math.sin(phase) * 0.4;
    const zAngle = -0.23 + Math.sin(phase * 0.7) * 0.20;
    const [cx, sx] = [Math.cos(xAngle), Math.sin(xAngle)];
    const [cy, sy] = [Math.cos(yAngle), Math.sin(yAngle)];
    const [cz, sz] = [Math.cos(zAngle), Math.sin(zAngle)];
    const rotate = ([x, y, z]) => {
      const u = x * cy + z * sy;
      const depth = z * cy - x * sy;
      const v = y * cx - depth * sx;
      return [u * cz - v * sz, u * sz + v * cz, v * sx + depth * cx];
    };
    const scale = Math.min(width * (compact.matches ? 0.23 : 0.168), height * 0.243);
    const xOffset = width * (compact.matches ? 0.50 : 0.63);
    const yOffset = height * 0.52;
    const projected = points.map(({ center, direction }) => {
      const [x, y, z] = rotate(center);
      const perspective = 5.9 / (5.9 - z);
      return {
        x: xOffset + x * scale * perspective,
        y: yOffset + y * scale * perspective,
        z,
        direction: rotate(direction)
      };
    });
    for (const face of faces) {
      face.depth = face.vertices.reduce((total, vertex) => total + projected[vertex].z, 0);
    }
    faces.sort((a, b) => a.depth - b.depth);
    ctx.clearRect(0, 0, width, height);

    for (const face of faces) {
      const [a, b, c, d] = face.vertices.map((index) => projected[index]);
      const normal = a.direction.map((value, i) => (value + c.direction[i]) * 0.5);
      if (normal[2] < -0.37) continue;
      const key = Math.max(0, -0.48 * normal[0] - 0.66 * normal[1] + 0.60 * normal[2]);
      const rim = Math.pow(1 - Math.min(1, Math.abs(normal[2])), 3);
      const reflection = Math.pow(key, 7);
      const bands = face.row % 4 === 0 ? 1.12 : 1;
      const light = (13 + 46 * key + 33 * reflection + 8 * rim) * bands;
      const reflectionTone = Math.sin(face.row * fullTurn / rows * 3);
      const hue = reflectionTone > 0.38 ? 231 : 36;
      const saturation = 4 + Math.pow(Math.abs(reflectionTone), 2) * (9 + 11 * rim);
      const color = "hsl(" + hue + " " + saturation + "% " + Math.min(light, 94) + "%)";
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.lineTo(c.x, c.y);
      ctx.lineTo(d.x, d.y);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.lineWidth = 0.7;
      ctx.fill();
      ctx.stroke();
      if (face.row % 4 === 0 && normal[2] > 0.14) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(d.x, d.y);
        ctx.strokeStyle = "rgba(235, 235, 234, " + (0.10 + key * 0.24) + ")";
        ctx.lineWidth = 0.58;
        ctx.stroke();
      }
    }
  }

  function resize() {
    const bounds = canvas.getBoundingClientRect();
    width = bounds.width;
    height = bounds.height;
    const density = Math.min(devicePixelRatio || 1, 1.75);
    canvas.width = Math.round(width * density);
    canvas.height = Math.round(height * density);
    ctx.setTransform(density, 0, 0, density, 0, 0);
    draw();
  }

  function tick(time) {
    if (!active || reducedMotion.matches) {
      animation = 0;
      return;
    }
    if (!lastFrame) lastFrame = time;
    const elapsed = time - lastFrame;
    if (elapsed >= 32) {
      phase += Math.min(elapsed, 64) * 0.00033;
      lastFrame = time;
      draw();
    }
    animation = requestAnimationFrame(tick);
  }

  function updateAnimation() {
    if (active && !reducedMotion.matches && !animation) {
      lastFrame = 0;
      animation = requestAnimationFrame(tick);
    }
  }

  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(([entry]) => {
    active = entry.isIntersecting;
    updateAnimation();
  }).observe(canvas);
  reducedMotion.addEventListener("change", updateAnimation);
  resize();
}


