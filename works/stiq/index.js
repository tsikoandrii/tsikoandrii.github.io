const languageSwitcher = document.querySelector('#languageSwitcher');

languageSwitcher.addEventListener('click', () => languageSwitcher.classList.toggle('active'))

const menu = document.querySelector('#nav');
const menuOpen = document.querySelector('#nav-open');
const menuClose = document.querySelector('#nav-close');

menuOpen.addEventListener('click', () => menu.classList.add('active'))
menuClose.addEventListener('click', () => {
  menu.classList.remove('active')
  menu.classList.add('closed')
})