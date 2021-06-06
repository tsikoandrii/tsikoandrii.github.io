"use strict";

var languageSwitcher = document.querySelector('#languageSwitcher');
languageSwitcher.addEventListener('click', function () {
  console.log('slsl')
  return languageSwitcher.classList.toggle('active');
});
var menu = document.querySelector('#nav');
var menuOpen = document.querySelector('#nav-open');
var menuClose = document.querySelector('#nav-close');
menuOpen.addEventListener('click', function () {
  return menu.classList.add('active');
});
menuClose.addEventListener('click', function () {
  menu.classList.remove('active');
  menu.classList.add('closed');
});