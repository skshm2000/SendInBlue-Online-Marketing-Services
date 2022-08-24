import navbar from "./Components/exNavbar.js"

document.querySelector('#navbar').innerHTML =navbar()

function widht(){
    if(screen.availWidth>=500 && screen.availWidth<=1200) {
        let container = document.querySelector('#top-section-child:nth-child(2)');
        container.innerHTML='';
        let img = document.createElement('img');
        img.src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/home/section-video/cover.png"
        img.style.width="100%"
        img.style.height='100%'
        container.append(img)
    }
    
}


window.addEventListener('resize',function(){
    widht()
},true)

// window.onresize = widht()
console.log('availScreenWidth',screen.availWidth)
