import navbar from "../Components/exNavbar.js"
import footer from "../Components/exFooter.js"
import navbarworks from "../Components/navbarcontrols.js"
import navbarLogout from "../Components/navbarfunc.js"

let navbar1 = document.getElementById("navbar");
navbar1.innerHTML = navbar();

let footer1 = document.getElementById("footer");
footer1.innerHTML = footer();

document.getElementById("resources").style.textDecoration = "underline";
document.getElementById("resources").style.fontWeight = "600";
document.getElementById("resources").style.color = "#044a75";
navbarworks();
navbarLogout();

let datetime = new Date().toLocaleTimeString();
console.log(datetime);
document.getElementById("time").innerText=datetime;
