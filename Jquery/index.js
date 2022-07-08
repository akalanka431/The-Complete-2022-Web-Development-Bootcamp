
//$("h1").text("Bye");
//$("button").html("<em>Hey</em>");

$(document).keypress(function(event){
  $("h1").text(event.key);
});
