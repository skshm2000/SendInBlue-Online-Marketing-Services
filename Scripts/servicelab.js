import navbar from "../Components/exNavbar.js"
import footer from "../Components/exFooter.js"
import navbarworks from "../Components/navbarcontrols.js"
import navbarLogout from "../Components/navbarfunc.js"

document.querySelector('#navbar').innerHTML = navbar();
document.querySelector('#footer').innerHTML = footer();

document.getElementById("solutions").style.color="white";
document.getElementById("pricing").style.color="white";
document.getElementById("features").style.color="white";
document.getElementById("resources").style.color="white";
document.getElementById("blog").style.color="white";
document.getElementById("login").style.color="white";



window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 7 || document.documentElement.scrollTop > 7) {
     document.getElementById("navbar").style.backgroundColor = "white";
     document.getElementById("navbar").style.boxShadow = "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px";
     document.getElementById("solutions").style.color = "grey";
     document.getElementById("pricing").style.color="grey";
     document.getElementById("features").style.color="grey";
    document.getElementById("resources").style.color="grey";
    document.getElementById("blog").style.color="grey";
    document.getElementById("login").style.color="black";
  }
  else if(document.body.scrollTop <= 7 || document.documentElement.scrollTop <= 7){
    document.getElementById("navbar").style.backgroundColor = "rgb(23, 85, 143)";
    document.getElementById("navbar").style.boxShadow ="0px 0px 0px 0px";
    document.getElementById("solutions").style.color="white";
    document.getElementById("pricing").style.color="white";
    document.getElementById("features").style.color="white";
    document.getElementById("resources").style.color="white";
    document.getElementById("blog").style.color="white";
    document.getElementById("login").style.color="white";
  }
  else{
    document.getElementById("navbar").style.backgroundColor = "";
  }
}

let datetime = new Date().toLocaleTimeString();
console.log(datetime);
document.getElementById("time").innerText=datetime;

navbarworks();
navbarLogout();