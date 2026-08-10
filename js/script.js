// ==========================================================
// X MEDICAL — script.js
// Mobile menu toggle + clickable dropdown menu
// ==========================================================

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile hamburger toggle ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // --- Clickable dropdown (Services) ---
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(function (dropdown) {
    const toggle = dropdown.querySelector('.dropdown-toggle');

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('open');

      // Close any other open dropdowns first
      dropdowns.forEach(function (d) { d.classList.remove('open'); });

      if (!isOpen) {
        dropdown.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      } else {
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close dropdown / mobile menu when clicking anywhere else
  document.addEventListener('click', function () {
    dropdowns.forEach(function (d) { d.classList.remove('open'); });
  });

  // Close mobile menu after a link is tapped
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }
});
