document.addEventListener("DOMContentLoaded", function(event) {
  var body = document.querySelector("body");
  var title = document.getElementById("title");

  window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition < 2600) {
      body.style.backgroundColor = "lightblue";
      title.style.color = "white";
    } else if (scrollPosition >= 2000 && scrollPosition < 4600) {
      body.style.backgroundColor = "black";
      title.style.color = "white";
    } else {
      body.style.backgroundColor = "red";
      title.style.color = "lightblue";
    }
  });
});
