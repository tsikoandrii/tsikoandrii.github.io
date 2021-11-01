function initPhoneMask() {
  $('input[type=tel]').each(function (index, element) {
    var mask = IMask(element, {
      mask: [{
        mask: '+7 (000) 000-00-00',
        startsWith: '+7',
        country: 'Russia'
      }, {
        mask: '+7 (000) 000-00-00',
        startsWith: '7',
        country: 'Russia'
      }, {
        mask: '0 (000) 000-00-00',
        startsWith: '8',
        country: 'Russia'
      }, {
        mask: '+7 (000) 000-00-00',
        startsWith: '',
        country: 'unknown'
      }],
      dispatch: function dispatch(appended, dynamicMasked) {
        var number = (dynamicMasked.value + appended).replace(/\D/g, '');
        return dynamicMasked.compiledMasks.find(function (m) {
          return number.indexOf(m.startsWith) === 0;
        });
      }
    });
    $(this).blur(function () {
      var maskValue = mask.unmaskedValue;
      var startWith = 10;

      if (maskValue.charAt(0) === '8') {
        startWith = 11;
      }

      if (maskValue.length < startWith) {
        mask.value = '';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // Tabs
  var tabs = document.querySelectorAll('.tab');
  initTabs(tabs);
  var mobileButtonOpen = document.querySelector('#openMenu');
  var mobileButtonClose = document.querySelector('#closeMenu');
  var menu = document.querySelector('#mobileNav');
  menu.addEventListener('click', function (e) {
    if (e.target.classList.contains('nav-link')) {
      menu.classList.remove('active');
    }
  });
  mobileButtonOpen.addEventListener('click', function () {
    menu.classList.add('active');
  });
  mobileButtonClose.addEventListener('click', function () {
    menu.classList.remove('active');
  });
  initPhoneMask();

  var initModal = function initModal(id) {
    var modal = document.getElementById(id);
    var backdrop = document.getElementById('backdrop');

    var close = function close(endFunc) {
      if (typeof endFunc === 'function') {
        endFunc();
      }

      backdrop.classList.remove('active');
      modal.classList.remove('active');
    };

    var open = function open(startFunc) {
      if (typeof startFunc === 'function') {
        startFunc();
      }

      backdrop.classList.add('active');
      modal.classList.add('active');
    };

    modal.querySelector('[data-element="close"]').addEventListener('click', close);
    return {
      close: close,
      open: open
    };
  };

  var mainModal = initModal('main-modal');
  var thanksModal = initModal('thanks-modal');
  var thanksModalActive = false;
  var openButtons = document.querySelectorAll('[data-element="modal-button"]');
  var backdrop = document.querySelector('#backdrop');

  if (openButtons) {
    openButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        mainModal.open();
      });
    });
    backdrop.addEventListener('click', function (e) {
      if (e.target.dataset.isbackdrop) {
        mainModal.close();

        if (thanksModalActive) {
          thanksModal.close(function () {
            return window.location.href = "/";
          });
        }
      }
    });
  }

  var emailModalBtn = document.querySelector('#cancel-sub');
  var emailModal = initModal('email-modal');

  if (emailModalBtn) {
    emailModalBtn.addEventListener('click', function () {
      emailModal.open();
    });
    backdrop.addEventListener('click', function (e) {
      if (e.target.dataset.isbackdrop) {
        emailModal.close();
      }
    });
  } // Form


  var modalForm = document.querySelector('#modalForm');
  modalForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Your Code
    // If status === 200

    mainModal.close();
    thanksModal.open();
    thanksModalActive = true;
  }); // Quiz

  if (document.querySelector('#quiz-container')) {
    new Quiz('quiz-container', quizConfig);
  }
});