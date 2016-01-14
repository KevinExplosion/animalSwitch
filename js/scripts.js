$(document).ready(function() {
  if(confirm("Do you want to learn about animals?")) {
    if(confirm("Do you want to learn about turtles?")) {
      $(".turtles").show();
    }
    else if(confirm("Do you want to learn about snakes?")) {
      $(".snakes").show();
    }
    else if(confirm("Do you want to learn about insects?")) {
      $(".insects").show();
    }
  }
  else {
    alert("Then we have nothing for you.")
  }
});
