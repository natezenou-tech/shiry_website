// script.js — שירי | יועצת שינה ומדריכת הנקה
// Nav scroll state, mobile menu toggle, FAQ accordion, scroll fade-in reveal

document.addEventListener('DOMContentLoaded', function () {
  // Navbar shadow on scroll
  var navbar = document.getElementById('navbar');
  function onScroll() {
    if (window.scrollY > 8) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
  onScroll();
  window.addEventListener('scroll', onScroll);

  // Mobile hamburger menu
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // Mark active nav link
  var current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(function (other) {
        other.classList.remove('open');
      });
      if (!isOpen) item.classList.add('open');
    });
  });

  // Scroll fade-in reveal
  var faders = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    faders.forEach(function (el) { observer.observe(el); });
  } else {
    faders.forEach(function (el) { el.classList.add('visible'); });
  }

  // Contact form (front-end only — no backend wired up)
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('תודה! ההודעה נשלחה. שירי תחזור אליך בהקדם.');
      form.reset();
    });
  }
});
