//Newsletter Subscription form to api.cypruscodes.com
function validateForm() {
  var email =
    document.forms["newsletter-subscription"]["newsletter-form-email"].value;
  if (!email) {
    alert("Email must be filled out");
    return false;
  } else {
    $("#form-result2").css("display", "none");
    $('button[type="submit"]').addClass("clicked");
    $("#newsletter-wiki-submit").prop("disabled", true);
    $("#newsletter-wiki-submit").html(
      "<i class='icon-loader fa-spin' > </i> Sending..."
    );

    $.ajax({
      url: "https://api.cypruscodes.com/subscribe",
      method: "POST",
      dataType: "json",
      data: { email: email, channel: "agency" },
      success: function success() {
        $("#form-result2")
          .addClass("alert-success")
          .removeClass("alert-warning alert-danger")
          .css("display", "block");
        $("#form-result2 > .content").html("Email sent successfully!");
      },
      error: function error() {
        $("#form-result2")
          .addClass("alert-danger")
          .removeClass("alert-warning alert-success")
          .css("display", "block");
        $("#form-result2 > .content").html(
          "Unsuccesful attempt. Please try again."
        );
      },
      complete: function () {
        $('button[type="submit"]').removeClass("clicked");
        $("#newsletter-wiki-submit").prop("disabled", false);
        $("#newsletter-wiki-submit").html(
          "<button class='button-mail' type='submit' id='newsletter-wiki-submit'><ion-icon name='mail'></ion-icon></button>"
        );
      },
    });
  }
}


var PIXELSIGNS = PIXELSIGNS || {};

(function ($) {
  // USE STRICT
  "use strict";

  PIXELSIGNS.initialize = {
    init: function () {
      PIXELSIGNS.initialize.contactFrom();
    },

    /*=================================*/
    /*=           Contact Form          =*/
    /*=================================*/

    contactFrom: function () {
      $("[data-pixsaas]").each(function () {
        var $this = $(this);
        $(".form-result", $this).css("display", "none");

        $this.submit(function () {
          $('button[type="submit"]', $this).addClass("clicked");

          // Create a object and assign all fields name and value.
          var values = {};

          $("[name]", $this).each(function () {
            var $this = $(this),
              $name = $this.attr("name"),
              $value = $this.val();
            values[$name] = $value;
          });

          // Make Request
          $.ajax({
            url: $this.attr("action"),
            type: "POST",
            data: values,
            success: function success(data) {
              if (data.error == true) {
                $(".form-result", $this)
                  .addClass("alert-warning")
                  .removeClass("alert-success alert-danger")
                  .css("display", "block");
              } else {
                $(".form-result", $this)
                  .addClass("alert-success")
                  .removeClass("alert-warning alert-danger")
                  .css("display", "block");
              }
              $(".form-result > .content1", $this).html(data.message);
              $('button[type="submit"]', $this).removeClass("clicked");
            },
            error: function error() {
              $(".form-result", $this)
                .addClass("alert-danger")
                .removeClass("alert-warning alert-success")
                .css("display", "block");
              $(".form-result > .content1", $this).html(
                "Sorry, an error occurred."
              );
              $('button[type="submit"]', $this).removeClass("clicked");
            },
          });
          return false;
        });
      });
    },
  };

  PIXELSIGNS.documentOnReady = {
    init: function () {
      PIXELSIGNS.initialize.init();
    },
  };

  PIXELSIGNS.documentOnLoad = {
    init: function () {
      $(".page-loader").fadeOut("slow");
    },
  };

  PIXELSIGNS.documentOnResize = {
    init: function () {},
  };

  PIXELSIGNS.documentOnScroll = {
    init: function () {
      PIXELSIGNS.initialize.sectionBackground();

      if ($(window).scrollTop() > 300) {
        $(".return-to-top").addClass("back-top");
      } else {
        $(".return-to-top").removeClass("back-top");
      }
    },
  };

  // Initialize Functions
  $(document).ready(PIXELSIGNS.documentOnReady.init);
  $(window).on("load", PIXELSIGNS.documentOnLoad.init);
  $(window).on("resize", PIXELSIGNS.documentOnResize.init);
  $(window).on("scroll", PIXELSIGNS.documentOnScroll.init);
})(jQuery);

//Scrolldown from banner
$("a.nav-kurs").click(function () {
  $("html, body").animate({ scrollTop: $("#kurs").offset().top - 45 }, 1000);
});

$("a.nav-egtim").click(function () {
  $("html, body").animate({ scrollTop: $("#egtim").offset().top }, 1000);
});

$("a.nav-faq").click(function () {
  $("html, body").animate({ scrollTop: $("#faq").offset().top }, 1000);
});

$("a.nav-contact").click(function () {
  $("html, body").animate(
    { scrollTop: $("#contact").offset().top - 225 },
    1000
  );
});

//Booking Modal

// $("a.nav-btn").click(function() {
//     $('.modal').addClass('show').css('display', 'block'),
//     $('#modal-wrapper').addClass('modal-backdrop').css('display', 'block')

//   });
//   $("#close-modal").click(function() {
//     $('.modal').removeClass('show').css('display', 'none')
//     $('#modal-wrapper').removeClass('modal-backdrop').css('display', 'none')
//   });

//Booking Form Submission (aka ModalFrom)

var $formBooking = $("#booking-form"),
  url =
    "https://script.google.com/macros/s/AKfycby5uon9g-8uykVwtUgUqrWREvl4XXfn73x6gueKOiOAPfQYRxdNdnfiz7zUbb9TXL_-/exec";
$("#submit-Bookingform").on("click", function (e) {
  e.preventDefault();

  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $formBooking.serializeArray(),
    success: function success(data) {
      $('button[type="submit"]').removeClass("clicked");
      $("#submit-Bookingform").html("Gönder");
      $("#submit-Bookingform").prop("disabled", false);
      $("#form-result3")
        .addClass("alert-warning")
        .removeClass("alert-success alert-danger")
        .css("display", "block");
      $("#form-result3")
        .addClass("alert-success")
        .removeClass("alert-warning alert-danger")
        .css("display", "block");
      $("#form-result3 > .content1").html(
        "Super! Yeriniz Ayrıldı - Lütfen 24 saat içinde çağrımızı bekleyin"
      );
    },
    error: function error() {
      $('button[type="submit"]').removeClass("clicked");
      $("#submit-Bookingform").html("Gönder");
      $("#submit-Bookingform").prop("disabled", false);
      $("#form-result3")
        .addClass("alert-danger")
        .removeClass("alert-warning alert-success")
        .css("display", "block");
      $("#form-result3 > .content1").html(
        "Malesef yeriniz ayrılmadı. Lütfen tekrar deneyin. Alternatif olarak 05338483559 numaralı telefondan bize ulaşabilirsiniz"
      );
    },
  }).then(
    $("#form-result3").css("display", "none"),
    $('button[type="submit"]').addClass("clicked"),
    $("#submit-Bookingform").prop("disabled", true),
    $("#submit-Bookingform").html("Gönderiliyor..")
  );
});

$("#submit-Contactform").click(function () {
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let hasIssue = false;

  if (name == "") {
    document.getElementById("un").style.display = "block";
    hasIssue = true;
  } else {
    document.getElementById("un").style.display = "none";
  }
  if (email == "") {
    document.getElementById("trois").style.display = "block";
    hasIssue = true;
  } else {
    document.getElementById("trois").style.display = "none";
  }

  if (!hasIssue) {
    var $formContact = $("#contact");

    var jqxhr = $.ajax({
      url: "https://api.cypruscodes.com/course-info",
      method: "POST",
      dataType: "json",
      data: [
        {
          name: "name",
          value: name,
        },
        {
          name: "email",
          value: email,
        },
        {
          name: "language",
          value: (
            window.localStorage.getItem("language") || "tr"
          ).toUpperCase(),
        },
      ],
    });
    var jqxhr = $.ajax({
      url: "https://script.google.com/macros/s/AKfycby5uon9g-8uykVwtUgUqrWREvl4XXfn73x6gueKOiOAPfQYRxdNdnfiz7zUbb9TXL_-/exec",
      method: "GET",
      dataType: "json",
      data: $formContact.serializeArray(),
      success: function success(data) {
        $('button[type="submit"]').removeClass("clicked");
        $("#submit-Contactform").html("Gönder");
        $("#submit-Contactform").prop("disabled", false);
        $("#form-result3")
          .addClass("alert-warning")
          .removeClass("alert-success alert-danger")
          .css("display", "block");
        $("#form-result3")
          .addClass("alert-success")
          .removeClass("alert-warning alert-danger")
          .css("display", "block");
        $("#form-result3 > .content1").html("Message sent");
      },
      error: function error() {
        $('button[type="submit"]').removeClass("clicked");
        $("#submit-Contactform").html("Gönder");
        $("#submit-Contactform").prop("disabled", false);
        $("#form-result3")
          .addClass("alert-danger")
          .removeClass("alert-warning alert-success")
          .css("display", "block");
        $("#form-result3 > .content1").html(
          "Malesef mesajınız iletilemedi. Lütfen tekrar deneyin. Alternatif olarak 05488250443 numaralı telefondan bize ulaşabilirsiniz"
        );
      },
    }).then(
      $("#form-result3").css("display", "none"),
      $('button[type="submit"]').addClass("clicked"),
      $("#submit-Contactform").prop("disabled", true),
      $("#submit-Contactform").html("Gönderiliyor..")
    );
  }
});
