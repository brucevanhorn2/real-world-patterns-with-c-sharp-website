$(document).ready(function () {
  // button handler for the modal
  // $("#btnNotify").click(function () {
  //   $(".modal").addClass("is-active");
  // });

  // $(".modal-close").click(function () {
  //   $(".modal").removeClass("is-active");
  // });

  // $(".modal-background").click(function () {
  //   $(".modal").removeClass("is-active");
  // });
  // handler for the nav burger
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });
});
