'use-strict';

const burger = document.querySelector('.burger');

const list = document.querySelector('.sports-list');

const list_contents = document.querySelectorAll('.sports-list li');


burger.addEventListener('click', () => {
  list.classList.toggle("sports-list-active");
  burger.classList.toggle('toggle');
});


$('.menu').hover(
  function() {
    $(this).children('.dropdown-menu').addClass('open');
  },function() {
    $(this).children('.dropdown-menu').removeClass('open');
  }
);



