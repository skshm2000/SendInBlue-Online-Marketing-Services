import navbar from "../Components/exNavbar.js"
import footer from "../Components/exFooter.js"
import navbarworks from "../Components/navbarcontrols.js"
import navbarLogout from "../Components/navbarfunc.js"


let navbar1 = document.getElementById("navbar");
navbar1.innerHTML = navbar();
let footer1 = document.getElementById("footer");
footer1.innerHTML = footer();

navbarworks();
navbarLogout();

document.getElementById("pricing").style.textDecoration = "underline";
document.getElementById("pricing").style.color = "#044a75";
document.getElementById("pricing").style.fontWeight = "600";



// scrolling effect on navbar............
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 7 || document.documentElement.scrollTop > 7) {

    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("solutions").style.color = "grey";
    document.getElementById("pricing").style.color = "grey";
    document.getElementById("features").style.color = "grey";
    document.getElementById("resources").style.color = "grey";
    document.getElementById("blog").style.color = "grey";
    document.getElementById("login").style.color = "black";
  } else if (document.body.scrollTop <= 7 || document.documentElement.scrollTop <= 7) {

    document.getElementById("navbar").style.backgroundColor ="#044a75"
    document.getElementById("navbar").style.boxShadow = "0px 0px 0px 0px";
    document.getElementById("solutions").style.color = "white";
    document.getElementById("pricing").style.color = "white";
    document.getElementById("features").style.color = "white";
    document.getElementById("resources").style.color = "white";
    document.getElementById("blog").style.color = "white";
    document.getElementById("login").style.color = "white";   
   } 
   //else {
//     document.getElementById("navbar").style.backgroundColor = "";
//   }
}
