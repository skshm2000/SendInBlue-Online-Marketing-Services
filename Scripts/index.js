import navbar from "../Components/exNavbar.js"
import footer from "../Components/exFooter.js"

document.getElementById("navbar").innerHTML = navbar()
document.getElementById("footer").innerHTML = footer()

document.getElementById("solutions").addEventListener("click", ()=>{
    window.location.href = "../why-sendinblue.html"
})

document.getElementById("pricing").addEventListener("click", ()=>{
    window.location.href = "../pricing.html"
})

document.getElementById("features").addEventListener("click", ()=>{
    window.location.href = "../features.html"
})

document.getElementById("resources").addEventListener("click", ()=>{
    window.location.href = "../servicelab.html"
})

document.getElementById("login").addEventListener("click", ()=>{
    window.location.href = "../login.html"
})

document.getElementById("signup").addEventListener("click", ()=>{
    window.location.href = "../signup.html"
})

document.getElementById("allfeatures").addEventListener("click", ()=>{
    window.location.href = "../features.html"
})

document.getElementById("testdrive").addEventListener("click", ()=>{
    window.location.href = "../signup.html"
})

document.getElementById("testdrive1").addEventListener("click", ()=>{
    window.location.href = "../signup.html"
})