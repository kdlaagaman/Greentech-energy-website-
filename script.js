// ============================================================
// PAGE NAVIGATION
// ============================================================

// Switch visible page and highlight the correct nav link
function go(id) {

  // Hide all pages
  document.querySelectorAll('.page').forEach(function(page) {
    page.classList.remove('on');
  });

  // Remove active class from all nav links
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function(link) {
    link.classList.remove('act');
  });

  // Show selected page
  var page = document.getElementById('pg-' + id);
  if (page) {
    page.classList.add('on');
  }

  // Highlight desktop nav link
  var desktopLink = document.getElementById('nl-' + id);
  if (desktopLink) {
    desktopLink.classList.add('act');
  }

  // Highlight mobile nav link
  var mobileLink = document.getElementById('ml-' + id);
  if (mobileLink) {
    mobileLink.classList.add('act');
  }

  // Scroll to top smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


// ============================================================
// MOBILE MENU
// ============================================================

// Toggle mobile menu open/close
function toggleMenu() {

  var menu = document.getElementById('mobile-menu');
  var button = document.getElementById('hamburger');

  menu.classList.toggle('open');
  button.classList.toggle('open');

  // Prevent background scrolling when menu is open
  if (menu.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}


// Close mobile menu
function closeMenu() {

  var menu = document.getElementById('mobile-menu');
  var button = document.getElementById('hamburger');

  menu.classList.remove('open');
  button.classList.remove('open');

  // Restore scrolling
  document.body.style.overflow = '';
}