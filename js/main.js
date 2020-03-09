var burger = document.querySelector('.humburger');
var menu = document.querySelector('.menu');

burger.addEventListener('click', function () {

  if (menu.classList.contains('menu-hide')) {
    menu.classList.remove('menu-hide');
    menu.classList.add('menu-open');
  } else {
    menu.classList.add('menu-hide');
    menu.classList.remove('menu-open');
  }
});
