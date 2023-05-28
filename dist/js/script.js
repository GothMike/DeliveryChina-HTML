const hamburger = document.querySelector(".hamburger"),
  menu_links = document.querySelector(".menu__links"),
  closeElem = document.querySelector(".menu__close"),
  overlay = document.querySelector(".menu__overlay");

hamburger.addEventListener("click", () => {
  menu_links.classList.add("menu__links_active");
  closeElem.classList.add("menu__close_active");
  overlay.classList.add("menu__overlay_active");
});

overlay.addEventListener("click", () => {
  menu_links.classList.remove("menu__links_active");
  closeElem.classList.remove("menu__close_active");
  overlay.classList.remove("menu__overlay_active");
});

closeElem.addEventListener("click", () => {
  menu_links.classList.remove("menu__links_active");
  closeElem.classList.remove("menu__close_active");
  overlay.classList.remove("menu__overlay_active");
});

$(document).ready(function () {
  $(".carousel__inner").slick({
    speed: 1200,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.webp"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.webp"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dotsClass: "slick-dots",
          arrows: false,
        },
      },
    ],
  });
});

//   // Модальное окно

//   $("[data-modal=consultation]").on("click", function () {
//     $(".overlay, #consultation").fadeIn("slow");
//   });
//   $(".modal__close").on("click", function () {
//     $(".overlay, #consultation, #thanks, #order").fadeOut("slow");
//   });
//   $(".button_mini").on("click", function () {
//     $(".overlay, #order").fadeIn("slow");
//   });
//   $(".button_mini").each(function (i) {
//     $(this).on("click", function () {
//       $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
//     });
//   });

// Валидация
function validateForms(form) {
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      phone: {
        required: true,
        minlength: 10,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: "Пожалуйста, введите свое имя",
        minlength: jQuery.validator.format("Обязательно минимум {0} символа!"),
      },
      phone: {
        required: "Пожалуйста, введите свой номер телефона",
        minlength: jQuery.validator.format("Обязательно минимум {0} символа!"),
      },
      email: {
        required: "Пожалуйста, введите свою почту",
        email: "Неправильно введен адрес почты",
      },
    },
  });
}

validateForms("#recall .recall_form");
validateForms(".price_form");

// Маска для номера телефона
$("input[name=phone").mask("+7 (999) 999-99-99");

//   // Отправка PHP запроса
//   $("form").submit(function (e) {
//     e.preventDefault();

//     if (!$(this).valid()) {
//       return;
//     }

//     $.ajax({
//       type: "POST",
//       url: "mailer/smart.php",
//       data: $(this).serialize(),
//     }).done(function () {
//       $(this).find("input").val("");
//       $("#consultation,  #order").fadeOut();
//       $(".overlay, #thanks").fadeIn("slow");

//       $("form").trigger("reset");
//     });
//     return false;
//   });

//   // smooth scroll and pageup

//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 1600) {
//       $(".pageup").fadeIn();
//     } else {
//       $(".pageup").fadeOut();
//     }
//   });

//   $("a[href^='#'").click(function () {
//     const _href = $(this).attr("href");
//     $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
//     return false;
//   });

//   new WOW().init();
// });
