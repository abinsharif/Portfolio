// ...existing code (this file is new; includes the site's previously inline script) ...

AOS.init({ once: true, duration: 750 });

// skill bars animation when section visible
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.getElementById('htmlBar').style.width = '70%';
      document.getElementById('cssBar').style.width = '80%';
      document.getElementById('jsBar').style.width = '80%';
      document.getElementById('pyBar').style.width = '85%';
      document.getElementById('cBar').style.width = '60%';
      document.getElementById('pentestBar').style.width = '70%';
      // ring animation
      animateRing(92);
      skillObserver.disconnect();
    }
  });
}, { threshold: 0.35 });
skillObserver.observe(document.getElementById('skills'));

// circular ring draw (simple)
function animateRing(target) {
  const ring = document.getElementById('ring1');
  const inner = ring.querySelector('.inner');
  const pct = document.getElementById('ringPct');
  let cur = 0;
  const id = setInterval(() => {
    cur++;
    pct.textContent = cur + '%';
    ring.style.background = 'conic-gradient(var(--accent1) 0% ' + cur + '%, rgba(255,255,255,0.03) ' + cur + '% 100%)';
    if (cur >= target) clearInterval(id);
  }, 10);
}

// parallax-ish hero gradient transform on scroll
const heroBg = document.getElementById('heroBg');
window.addEventListener('scroll', () => {
  const sc = window.scrollY;
  // subtle scale and rotation on scroll
  const s = 1 + Math.min(sc / 3000, 0.06);
  const r = Math.min(sc / 120, 6);
  if (heroBg) {
    heroBg.style.transform = `scale(${s}) rotate(${r}deg)`;
    heroBg.style.opacity = String(Math.max(0.14, 1 - sc / 900));
  }
});

// small entrance micro-animations for project cards (stagger)
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.proj-card');
  cards.forEach((c, i) => {
    c.style.opacity = 0;
    setTimeout(() => {
      c.style.transition = 'opacity 600ms ease, transform 600ms ease';
      c.style.opacity = 1;
      c.style.transform = 'translateY(0)';
    }, 150 + i * 120);
  });
});

// Accessibility: remove :focus-outline while keeping keyboard outlines
(function(){
  const handleFirstTab = (e) => {
    if (e.key === 'Tab') document.body.classList.add('user-is-tabbing');
  };
  window.addEventListener('keydown', handleFirstTab, { once: true });
})();
