let usersData = JSON.parse(localStorage.getItem("sibusers")) || []

document.getElementById("loginbtn").addEventListener("click", initLogin)

function initLogin() {
    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value

    document.getElementById("email").value = ""
    document.getElementById("pass").value = ""

    let stat = false
    for(let i=0; i<usersData.length; i++) {
        if(usersData[i].email == email) {
            stat = true
            if(usersData[i].pass == pass) {
                alert("Login Successfull! Taking you to homepage!")
                localStorage.setItem("currsibuser", JSON.stringify(usersData[i].email))
                localStorage.setItem("siblogin", true)
                setTimeout(success, 2000)
                function success() {
                    window.location.href = "../index.html"
                }
            } else {
                alert("Please check the password again!")
            }
        }
    }
    if(stat==false) {
        alert("Email not registered with us! Sign up instead")
    }
}

document.getElementById("createacc").addEventListener("click", ()=>{
    window.location.href = "../signup.html"
})