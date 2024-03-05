$(document).ready(function () {
  $("#abstract").hover(
    function () {
      $(".abstract_index").css("color", "white");
    },
    function () {
      $(".abstract_index").css("color", "#2f0f6a");
    }
  );

  $(".abstract_index").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".content").toggleClass("contentActive");
  });
});
