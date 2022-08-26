let usersData = JSON.parse(localStorage.getItem("sibusers")) || []

class signupDat {
    constructor(email, pass) {
        let x = this.checkEmail(email)
        let y = this.checkpass(pass)

        console.log(x, y)
        if(x==true) {
            alert("Email already registered with us!")
        } else if(y==false) {
            alert("Password should be minimum 8 characters!")
        } else if(x==false && y==true) {
            this.email = email
            this.pass = pass
            usersData.push(this)
            localStorage.setItem("sibusers", JSON.stringify(usersData))
            alert("Signup successful! Taking you to login page!")
            setTimeout(success, 3000)
            function success() {
                window.location.href = "../login.html"
            }
        }
    }

    checkEmail(e) {
        for(let i=0; i<usersData.length; i++) {
            if(usersData[i].email == e) {
                return true
            }
        }
        return false
    }

    checkpass(p) {
        let stat = (p.length>=8) ? true : false

        return stat
    }
}

document.getElementById("signupbtn").addEventListener("click", newSignup)

function newSignup() {
    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value

    document.getElementById("email").value = ""
    document.getElementById("pass").value = ""
    
    let user = new signupDat(email, pass)
}