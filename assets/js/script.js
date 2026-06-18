/**
 * ArcticOrvex Technologies - Main JavaScript
 * Handles navigation, scroll animations, and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  initNavigation();
  initScrollReveal();
  initParticleEffect();
  initSmoothScroll();
  initNavbarScroll();
  initFormValidation();
});

/* ============================================
   NAVIGATION
   ============================================ */

function initNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-links a');

  if (!menuToggle || !navLinks) return;

  // Toggle mobile menu
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking a link
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/* ============================================
   NAVBAR SCROLL EFFECT
   ============================================ */

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add/remove scrolled class for background change
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}

/* ============================================
   SCROLL REVEAL ANIMATIONS
   ============================================ */

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length === 0) return;

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optionally unobserve after revealing
        // revealObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
}

/* ============================================
   PARTICLE EFFECT (Hero Section)
   ============================================ */

function initParticleEffect() {
  const container = document.querySelector('.particles');
  if (!container) return;

  const particleCount = 25;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random properties
    const size = Math.random() * 3 + 1;
    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 10;
    const opacity = Math.random() * 0.3 + 0.1;

    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
      opacity: ${opacity};
    `;

    container.appendChild(particle);
  }
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navHeight = document.querySelector('.navbar')?.offsetHeight || 72;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ============================================
   FORM VALIDATION
   ============================================ */

function initFormValidation() {
  const form = document.querySelector('.contact-form form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const subject = form.querySelector('#subject');
    const message = form.querySelector('#message');

    let isValid = true;

    // Reset previous errors
    form.querySelectorAll('.form-error').forEach(el => el.remove());
    form.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(el => {
      el.style.borderColor = '';
    });

    // Validate name
    if (!name?.value.trim()) {
      showFieldError(name, 'Please enter your name');
      isValid = false;
    }

    // Validate email
    if (!email?.value.trim()) {
      showFieldError(email, 'Please enter your email');
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      showFieldError(email, 'Please enter a valid email address');
      isValid = false;
    }

    // Validate subject
    if (!subject?.value.trim()) {
      showFieldError(subject, 'Please enter a subject');
      isValid = false;
    }

    // Validate message
    if (!message?.value.trim()) {
      showFieldError(message, 'Please enter your message');
      isValid = false;
    } else if (message.value.trim().length < 10) {
      showFieldError(message, 'Message must be at least 10 characters');
      isValid = false;
    }

    if (isValid) {
      // Show success message
      showFormSuccess(form);
      form.reset();
    }
  });
}

function showFieldError(field, message) {
  if (!field) return;
  field.style.borderColor = '#EF4444';

  const errorEl = document.createElement('span');
  errorEl.classList.add('form-error');
  errorEl.textContent = message;
  errorEl.style.cssText = 'color: #EF4444; font-size: 0.75rem; margin-top: 0.25rem; display: block;';

  field.parentNode.appendChild(errorEl);
}

function showFormSuccess(form) {
  // Remove any existing success message
  form.querySelectorAll('.form-success').forEach(el => el.remove());

  const successEl = document.createElement('div');
  successEl.classList.add('form-success');
  successEl.innerHTML = `
    <div style="
      background: rgba(56, 189, 248, 0.1);
      border: 1px solid rgba(56, 189, 248, 0.3);
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    ">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <span style="color: #38BDF8; font-size: 0.875rem; font-weight: 500;">
        Thank you! Your message has been sent. We'll get back to you soon.
      </span>
    </div>
  `;

  form.insertBefore(successEl, form.firstChild);

  // Auto-remove success message after 5 seconds
  setTimeout(() => {
    successEl.remove();
  }, 5000);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
