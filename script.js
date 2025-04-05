// JavaScript Document


/*ハンバーガーメニュー*/
$(function() {
  $('.hamburger').click(function() {
    $('.menu').toggleClass('open');
    $(this).toggleClass('active');
  });
});
/*メニュー領域外クリック閉じる*/
$(document).click(function(event) {
  if (!$(event.target).closest('.menu, .hamburger').length) {
    $('.menu').removeClass('open');
    $('.hamburger').removeClass('active');
  }
});