// ============================================================
// NAV — active link on scroll
// ============================================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -60% 0px' });

sections.forEach(s => observer.observe(s));

// ============================================================
// NAV — scroll shadow
// ============================================================
window.addEventListener('scroll', () => {
  document.querySelector('.nav').style.boxShadow =
    window.scrollY > 20 ? '0 4px 40px rgba(0,0,0,0.4)' : '';
});

// ============================================================
// MOBILE MENU
// ============================================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ============================================================
// SCROLL REVEAL — fade-up on enter
// ============================================================
const revealEls = document.querySelectorAll('.project-card, .skill-category, .highlight, .social-link');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = `fadeUp 0.6s ${i * 0.06}s ease both`;
      revealObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => {
  el.style.opacity = '0';
  revealObserver.observe(el);
});

// ============================================================
// SKILL BARS — animate on scroll
// ============================================================
const skillBars = document.querySelectorAll('.skill-bar__fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => {
  bar.style.animationPlayState = 'paused';
  skillObserver.observe(bar);
});

// ============================================================
// CONTACT FORM
// ============================================================
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  const success = document.getElementById('formSuccess');

  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.disabled = false;
    success.classList.add('visible');
    this.reset();
    setTimeout(() => success.classList.remove('visible'), 4000);
  }, 1200);
});

// ============================================================
// SMOOTH ANCHOR SCROLL (for older browsers)
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
