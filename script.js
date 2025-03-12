const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

function updateTheme() {
  const currentTheme =
    document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    themeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
  }
}

themeToggle.addEventListener("click", () => {
  const currentTheme =
    document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateTheme();
});

// Initialize theme
const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);
updateTheme();

// Custom Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.querySelectorAll("a, button, input").forEach((el) => {
  el.addEventListener("mouseenter", () =>
    cursor.classList.add("hovered")
  );
  el.addEventListener("mouseleave", () =>
    cursor.classList.remove("hovered")
  );
});

// Initialize AOS
AOS.init({ duration: 1000, once: true });

// Particles.js Config
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#6C63FF" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { speed: 2 },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
  },
});
