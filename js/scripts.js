$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var firstnameInput = $("input#firstname").val();
    var lastnameInput = $("input#lastname").val();
    var streetaddressInput= $("input#streetaddress").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();

    $(".firstname").text(firstnameInput);
    $(".lastname").text(lastnameInput);
    $(".streetaddress").text(streetaddressInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $("#story").show();

    event.preventDefault();
  });
});
