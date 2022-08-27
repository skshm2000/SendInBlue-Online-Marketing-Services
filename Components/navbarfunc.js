function navbarLogout() {
    let stat = localStorage.getItem("siblogin")

    if(stat=="true") {
        let box = document.getElementById("changer")
        let data = JSON.parse(localStorage.getItem("currsibuser"))

        box.innerHTML = ""
        box.innerText = `Welcome! ${data}`
        let logout = document.createElement("button")
        logout.innerText = "Logout"
        logout.addEventListener("click", ()=>{
            localStorage.setItem("siblogin", false)
            location.reload()
        })
        box.append(logout)
    }
}

export default navbarLogout