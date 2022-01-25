"use strict";

var toggleAccord = function toggleAccord() {
  var accordToggleElements = document.querySelectorAll('.questions-answers__item');
  accordToggleElements.forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.classList.contains('questions-answers__item--open')) {
        item.classList.remove('questions-answers__item--open');
      } else {
        item.classList.add('questions-answers__item--open');
      }
    });
  });
};

toggleAccord();
$(document).ready(function () {
  $('.gallery-slider').owlCarousel({
    items: 3,
    dots: false,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      720: {
        items: 2
      },
      1060: {
        items: 3
      }
    }
  });
});
var menuSwitcher = document.querySelector('.mobile-nav-switcher');
var menu = document.querySelector('.mobile-menu');
var header = document.querySelector('.header');
menuSwitcher.addEventListener('click', function () {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    menu.classList.add('closed');
    header.classList.remove('open');
  } else {
    menu.classList.add('active');
    header.classList.add('open');
  }
});
var popup = document.querySelector('.first-popup');
var backdrop = document.querySelector('#firstPopupBackdrop');
var buttons = document.querySelectorAll('.default-button');
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    if (popup.classList.contains('active')) {
      popup.classList.remove('active');
      backdrop.classList.remove('active');
    } else {
      popup.classList.add('active');
      backdrop.classList.add('active');
    }
  });
  popup.querySelector('.default-popup__close').addEventListener('click', function () {
    popup.classList.remove('active');
    backdrop.classList.remove('active');
  });
  backdrop.addEventListener('click', function () {
    popup.classList.remove('active');
    backdrop.classList.remove('active');
  });
});