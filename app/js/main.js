const $burger = $("#burger");
const $menu = $("#menu");
const $icons = $(".header__icon");
const $nav = $(".header__nav");
const $select = $("#language-select");

$burger.on("click", function () {
  $menu.toggleClass("header__menu--active");
});

function moveIcons() {
  const isSmall = $(window).width() <= 393;

  if (isSmall && $menu.find(".header__icon").length === 0) {
    $menu.append($icons);
    $icons.addClass("in-menu");
  } else if (!isSmall && $nav.find(".header__icon").length === 0) {
    $nav.append($icons);
    $icons.removeClass("in-menu");
  }
}

$("#language-btn").on("click", function (e) {
  e.stopPropagation();
  $(".footer__language").toggleClass("footer__language--active");
});

$(document).on("click", function (e) {
  if (!$(e.target).closest(".footer__language").length) {
    $(".footer__language").removeClass("footer__language--active");
  }
});

function updateLanguageButtonText() {
  if ($(window).width() <= 393) {
    $("#language-btn").text("EN");
  } else {
    $("#language-btn").text("English");
  }
}

function updateText() {
  if ($(window).width() <= 393) {
    $(".about__text").html(
      '<p class="about__p">You can buy "classic" rock <br> albums and modern electronics. <br> There is an assortment of classical <br> music, jazz, metal, hip-hop and more. <br> You can also purchase turntables and accessories for them from us.</p><p class="about__p">Ability to send to anywhere in the world.</p>'
    );
  } else {
    $(".about__text").html(
      '<p class="about__p">You can buy "classic" rock albums and <br> modern electronics. There is an assortment of classical music, jazz, metal, hip-hop and more. You can also purchase <br> turntables and accessories for them from us. </p> <p class="about__p"> Ability to send to anywhere in the world.</p>.'
    );
  }
}
$(window).on("resize", function () {
  moveIcons();
  updateLanguageButtonText();
  updateText();
});

$(function () {
  moveIcons();
  updateLanguageButtonText();
  updateText();
});
