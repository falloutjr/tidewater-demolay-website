/* main.js – Tidewater Chapter, Order of DeMolay */

// Dynamic footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav   = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close nav when a link is clicked
siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact form – client-side validation & submission feedback
const form   = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = '';
  status.className   = 'form-note';

  const name    = form.name.value.trim();
  const email   = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    status.textContent = 'Please fill in all fields.';
    status.classList.add('error');
    return;
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    status.textContent = 'Please enter a valid email address.';
    status.classList.add('error');
    return;
  }

  // Simulate form submission (replace with real backend / service when ready)
  status.textContent = 'Thank you! Your message has been received. We\'ll be in touch soon.';
  status.classList.add('success');
  form.reset();
});
