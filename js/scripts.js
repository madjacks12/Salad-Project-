$(document).ready(function() {
  $("button#Lettuce").click(function() {
    $("ul").prepend("<li>Lettuce</li>");
  });

  $("button#Tomato").click(function() {
    $("ul").prepend("<li>Tomato</li>");
  });

  $("button#Cucumber").click(function() {
    $("ul").prepend("<li>Cucumber!</li>");
  });
});
