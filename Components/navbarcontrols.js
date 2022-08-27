function navbarworks() {
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

    document.getElementById("blog").addEventListener("click", ()=>{
        window.location.href = "../blog.html"
    })
    
    document.getElementById("login").addEventListener("click", ()=>{
        window.location.href = "../login.html"
    })
    
    document.getElementById("signup").addEventListener("click", ()=>{
        window.location.href = "../signup.html"
    })

    document.getElementById("navlogo").addEventListener("click", ()=>{
        window.location.href = "../index.html"
    })
}

export default navbarworks