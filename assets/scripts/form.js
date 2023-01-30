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

//contact

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
        $("#submit-Contactform").html("Send Message");
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
      $("#submit-Contactform").html("Sending..")
    );
  }
});
