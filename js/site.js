$(document).ready(function () {
  // handler for the nav burger
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });

  const counterElement = document.querySelector("#counter");
  new ysCountDown(endDate, function (remaining, finished) {
      var message = "";
      if (finished) {
        message = "Expired";
      } else {
        message = remaining.totalDays + "d ";
        message += (remaining.hours < 10 ? '0' + remaining.hours : remaining.hours)  + "h ";
        message += (remaining.minutes < 10 ? '0' + remaining.minutes : remaining.minutes)  + "m ";
        message += (remaining.seconds <10 ? '0' + remaining.seconds : remaining.seconds) + "s ";
      }
      counterElement.textContent = message;
  });
});
const endDate = "2022/10/14";
