// ===========================================================
// Terminal-style role typewriter
// ===========================================================
const roles = [
  "Website Developer",
  "Frontend Builder",
  "Responsive Design Specialist",
  "Freelance Web Developer"
];

const terminalTextEl = document.getElementById('terminalText');

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  if (!terminalTextEl) return;

  const currentRole = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    terminalTextEl.textContent = currentRole.slice(0, charIndex);
    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    charIndex--;
    terminalTextEl.textContent = currentRole.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  const speed = deleting ? 35 : 65;
  setTimeout(typeLoop, speed);
}

typeLoop();

// ===========================================================
// Mobile nav toggle
// ===========================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}


// Reveal sections on scroll

const revealTargets = document.querySelectorAll(
  '.browser-card, .service-card, .process-step'
);

if ('IntersectionObserver' in window && revealTargets.length) {
  revealTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => observer.observe(el));
}