$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });
  $('.accordion-header').on('click', function () {
    $('.accordion-text').not($(this).next()).slideUp();
    $(this).prev().fadeToggle().toggleClass('active');
    $(this).next().slideToggle();
  });
  $('.popup-close').on('click', function () {
    $('.popup').fadeOut();
  });
  $('.active-btn').on('click', function () {
    $('.popup').fadeIn();
  });
  $('.nav-mobile-close').on('click', function () {
    $('.nav-mobile-block').fadeOut();
  });
  $('.nav-link').on('click', function () {
    $('.nav-mobile-block').fadeOut();
  });
  $('.nav-mobile-btn').on('click', function () {
    $('.nav-mobile-block').fadeIn();
  });
  $("a[href*='#']").bind("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
    return false;
  });
});
