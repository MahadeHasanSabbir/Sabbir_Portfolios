/* =====================================================
   script.js — readable version
   Features:
   1. Dark / light theme toggle (saved in localStorage)
   2. Mobile hamburger menu
   3. Smooth scrolling for anchor links
   4. Typing animation in the hero
   5. Scroll-reveal animations
   6. Projects slider (Swiper)
   7. Contact form: real submit with success/error feedback
   8. Active nav link highlighting on scroll
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. Theme toggle ---------- */
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  /* ---------- 2. Mobile menu ---------- */
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('hidden');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        closeMobileMenu();
      } else {
        mobileMenu.classList.remove('hidden');
        iconOpen.classList.add('hidden');
        iconClose.classList.remove('hidden');
        menuToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close the menu after tapping a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  /* ---------- 3. Smooth scrolling ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ---------- 4. Typing animation ---------- */
  const typedEl = document.getElementById('typed-text');
  if (typedEl) {
    const phrases = ['Back-end Developer', 'PHP & Laravel Specialist'];
    let text = '';
    let phraseIndex = 0;
    let deleting = false;

    function type() {
      const current = phrases[phraseIndex % phrases.length];

      text = deleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);

      typedEl.textContent = text;

      let delay = deleting ? 50 : 100;

      if (!deleting && text === current) {
        delay = 3000;          // pause when the full phrase is typed
        deleting = true;
      } else if (deleting && text === '') {
        deleting = false;
        phraseIndex++;
        delay = 500;
      }

      setTimeout(type, delay);
    }

    type();
  }

  /* ---------- 5. Scroll-reveal animations ---------- */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);   // animate once, then stop watching
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document
    .querySelectorAll('.animate-on-scroll, .animate-left, .animate-right, .animate-scale')
    .forEach(el => observer.observe(el));

  /* ---------- 6. Projects slider ---------- */
  function initSwiper(attempt = 0) {
    const container = document.querySelector('.projectsSwiper');
    if (container && typeof Swiper !== 'undefined') {
      new Swiper('.projectsSwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        autoHeight: true,
        grabCursor: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: {
          1024: { slidesPerView: 1.1, spaceBetween: 30 }
        }
      });
    } else if (attempt < 20) {
      // Swiper script may still be loading; retry shortly
      setTimeout(() => initSwiper(attempt + 1), 200);
    }
  }
  initSwiper();

  /* ---------- 7. Contact form (Netlify, AJAX) ---------- */
  const form = document.querySelector('.contact-form');
  if (form) {
    const button = form.querySelector('button[type="submit"]');
    const status = document.getElementById('form-status');

    function showStatus(message, ok) {
      if (!status) return;
      status.textContent = message;
      status.classList.remove('hidden');
      status.className = ok
        ? 'mt-4 text-sm font-medium rounded-lg p-3 bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300'
        : 'mt-4 text-sm font-medium rounded-lg p-3 bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300';
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const originalLabel = button.innerHTML;
      button.disabled = true;
      button.classList.add('opacity-70');
      button.innerHTML = 'Sending...';

      try {
        const formData = new FormData(form);
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        });

        if (response.ok) {
          showStatus("Message sent. I'll get back to you soon!", true);
          form.reset();
        } else {
          showStatus('Something went wrong. Please email me directly instead.', false);
        }
      } catch (err) {
        showStatus('Could not send the message. Check your connection and try again.', false);
      } finally {
        button.disabled = false;
        button.classList.remove('opacity-70');
        button.innerHTML = originalLabel;
      }
    });
  }

  /* ---------- 8. Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let currentId = '';
    sections.forEach(section => {
      if (window.pageYOffset >= section.offsetTop - 150) {
        currentId = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  }, { passive: true });

});
