// Elements 
const menuBtn = document.getElementById('menuBtn');
const navPanel = document.getElementById('navPanel');
const navOverlay = document.getElementById('navOverlay');
const navClose = document.getElementById('navClose');
const formSection = document.getElementById('register'); // Registration section

// Mobile Navigation 
function openNav() {
  navPanel.classList.add('open');
  navPanel.setAttribute('aria-hidden', 'false');
  navOverlay.classList.add('visible');
  navOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  navPanel.classList.remove('open');
  navPanel.setAttribute('aria-hidden', 'true');
  navOverlay.classList.remove('visible');
  navOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// event listeners
menuBtn?.addEventListener('click', openNav);
navClose?.addEventListener('click', closeNav);
navOverlay?.addEventListener('click', closeNav);

// nav-panel clicked
document.querySelectorAll('.nav-panel-links a').forEach(a => {
  a.addEventListener('click', closeNav);
});

// Smooth Scroll 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const targetId = anchor.getAttribute('href');
    if (targetId && targetId !== '#') {
      e.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Registration  
if (formSection) {
  const inputs = formSection.querySelectorAll('input, select, textarea');
  
  inputs.forEach(field => {
    // Make sure pointer events are active
    field.style.pointerEvents = 'auto';

    // Close nav if open so overlay does not block
    field.addEventListener('focus', () => {
      closeNav();
    });
  });
}

// inputs clickable if overlay somehow stays
navOverlay.addEventListener('transitionend', () => {
  if (formSection) {
    formSection.querySelectorAll('input, select, textarea').forEach(field => {
      field.style.pointerEvents = 'auto';
    });
  }
});
