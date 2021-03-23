document.addEventListener('DOMContentLoaded', function() {
  // Tabs
  var tabs = document.querySelectorAll('.tab');
  initTabs(tabs);
  var mobileButtonOpen = document.querySelector('#openMenu');
  var mobileButtonClose = document.querySelector('#closeMenu');
  var menu = document.querySelector('#mobileNav');
  mobileButtonOpen.addEventListener('click', function() {
    menu.classList.add('active');
  });
  mobileButtonClose.addEventListener('click', function() {
    menu.classList.remove('active');
  });
});
