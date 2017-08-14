$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    amigo1 = $("#friend1").val();
    amigo2 = $("#friend2").val();
    amigo3 = $("#friend3").val();

    var friends = [amigo1, amigo2, amigo3];
    friends.forEach(function(friend) {
      alert("hello " + friend);
    });
  });
});
