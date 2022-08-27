import navbar from "../Components/exNavbar.js";
import footer from "../Components/exFooter.js";
import navbarworks from "../Components/navbarcontrols.js";
import navbarLogout from "../Components/navbarfunc.js";

document.querySelector("#navbar").innerHTML = navbar();
document.querySelector("#footer").innerHTML = footer();

document.getElementById("navlogo").src = "image/logo123.PNG";
document.getElementById("navbar").style.backgroundColor ="#044a75";
document.getElementById("navbar").style.boxShadow = "0px 0px 0px 0px";
document.getElementById("solutions").style.color = "white";
document.getElementById("pricing").style.color = "white";
document.getElementById("features").style.color = "white";
document.getElementById("resources").style.color = "white";
document.getElementById("blog").style.color = "white";
document.getElementById("login").style.color = "white";

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 7 || document.documentElement.scrollTop > 7) {
    
    document.getElementById("navlogo").src = "https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/common/logo-color.svg"
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("solutions").style.color = "grey";
    document.getElementById("pricing").style.color = "grey";
    document.getElementById("features").style.color = "grey";
    document.getElementById("resources").style.color = "grey";
    document.getElementById("blog").style.color = "grey";
    document.getElementById("login").style.color = "black";
  } else if (document.body.scrollTop <= 7 ||document.documentElement.scrollTop <= 7) {

    document.getElementById("navlogo").src = "image/logo123.PNG";
    document.getElementById("navbar").style.backgroundColor ="#044a75";
    document.getElementById("navbar").style.boxShadow = "0px 0px 0px 0px";
    document.getElementById("solutions").style.color = "white";
    document.getElementById("pricing").style.color = "white";
    document.getElementById("features").style.color = "white";
    document.getElementById("resources").style.color = "white";
    document.getElementById("blog").style.color = "white";
    document.getElementById("login").style.color = "white";
  }
}
navbarworks();
navbarLogout();