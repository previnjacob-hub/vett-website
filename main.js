// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => mobileNav.classList.toggle('open'));
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));
}

// Pricing tabs
function switchTab(type) {
  const apt = document.getElementById('plans-apartment');
  const land = document.getElementById('plans-land');
  if (apt) apt.style.display = type === 'apartment' ? 'grid' : 'none';
  if (land) land.style.display = type === 'land' ? 'grid' : 'none';
  document.querySelectorAll('.ptab').forEach((btn, i) => {
    btn.classList.toggle('active', (i === 0 && type === 'apartment') || (i === 1 && type === 'land'));
  });
}

// FAQ accordion
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}
