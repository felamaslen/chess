import $ from "../lib/jquery.min";

$(document).ready(() => {
  $("#loading").remove();
  $(document.body).append($("<span></span>").text("It works!"));
});

