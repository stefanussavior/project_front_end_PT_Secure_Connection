window.onscroll = function(){scrollFunction()}
function scrollFunction(){
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
        document.getElementById("navbar").style.padding = "20px 10px";
        document.getElementById("logo").style.padding = "25px";
    } else {
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementById("logo").style.padding = "20px"; 
    }
}

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}