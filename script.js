// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Theme Toggle
const toggleBtn = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme
if(localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  html.classList.toggle('dark');

  if(html.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = '🌙';
  }
});

// Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right, .animate-scale').forEach(el => {
  observer.observe(el);
});

// Enhanced form interactions
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (form) {
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');

    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
      });

      input.addEventListener('blur', () => {
        if (!input.value) {
          input.parentElement.classList.remove('focused');
        }
      });
    });

    // Handle form submission
    form.addEventListener('submit', (e) => {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalHTML = submitBtn.innerHTML;
      
      // Show loading state
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-70');
      submitBtn.innerHTML = '<svg class="w-5 h-5 animate-spin inline-block" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 5.293a1 1 0 011.414 0A7 7 0 0016.414 10a1 1 0 11-2 0 5 5 0 10-2 0 1 1 0 112 0 7 7 0 11-9.414-6.707 1 1 0 010 1.414z" clip-rule="evenodd"></path></svg> Sending...';
      
      // The form will be submitted to Netlify by default
      // Revert button state after timeout
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-70');
        submitBtn.innerHTML = originalHTML;
      }, 2000);
    });
  }
});