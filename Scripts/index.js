import navbar from "../Components/exNavbar.js"
import footer from "../Components/exFooter.js"
import navbarworks from "../Components/navbarcontrols.js"
import navbarLogout from "../Components/navbarfunc.js"

document.getElementById("navbar").innerHTML = navbar()
document.getElementById("footer").innerHTML = footer()

navbarworks()


document.getElementById("allfeatures").addEventListener("click", ()=>{
    window.location.href = "../features.html"
})

document.getElementById("testdrive").addEventListener("click", ()=>{
    window.location.href = "../signup.html"
})

document.getElementById("testdrive1").addEventListener("click", ()=>{
    window.location.href = "../signup.html"
})

navbarLogout()
