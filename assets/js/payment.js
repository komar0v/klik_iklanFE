$(document).ready(function () {
  $(".form-wrapper .button").click(function () {
    var button = $(this);
    var currentSection = button.parents(".section");
    var currentSectionIndex = currentSection.index();
    var headerSection = $(".steps li").eq(currentSectionIndex);
    currentSection.removeClass("is-active").next().addClass("is-active");
    headerSection.removeClass("is-active").next().addClass("is-active");

    $(".form-wrapper").submit(function (e) {
      e.preventDefault();
    });

    if (currentSectionIndex==1){
        $("#head_payment").html("<img src='https://i.postimg.cc/NFYvG4vB/payment-peoples.png' class='img-fluid' width='400' heigt='100%'>")

    }

    if (currentSectionIndex === 2) {
      
      $(document).find(".form-wrapper .section").first().addClass("is-active");
      $(document).find(".steps li").first().addClass("is-active");
      $("#modalPayment").modal("toggle");
    }
  });
});
