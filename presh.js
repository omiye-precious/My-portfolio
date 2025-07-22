document.addEventListener("DOMContentLoaded", () => {
  // Typing animation
  const roles = ["Front-End Developer", "Web Designer", "WordPress Expert"];
  let i = 0;
  let j = 0;
  let currentRole = "";
  let isDeleting = false;
  const typingElement = document.getElementById("typing");

  function type() {
    if (i < roles.length) {
      if (!isDeleting && j <= roles[i].length) {
        currentRole = roles[i].substring(0, j++);
      } else if (isDeleting && j >= 0) {
        currentRole = roles[i].substring(0, j--);
      }

      typingElement.textContent = currentRole;

      if (j === roles[i].length) isDeleting = true;
      if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
      }

      setTimeout(type, isDeleting ? 100 : 150);
    }
  }

  type();

  // Theme toggle
  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") document.body.classList.add("dark-mode");

  // Set current year
  document.getElementById("year").textContent = new Date().getFullYear();
});
// Highlight active link on scroll
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (
      section.offsetTop - 80 <= scrollPos &&
      section.offsetTop + section.offsetHeight - 80 > scrollPos
    ) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});
// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.querySelector(".nav-links").classList.toggle("show");
});
