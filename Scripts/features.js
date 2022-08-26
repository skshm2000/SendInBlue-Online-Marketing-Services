import navbar from "../Components/exNavbar.js"
import footer from "../Components/exFooter.js"

document.querySelector('#navbar').innerHTML = navbar()
document.querySelector('#footer').innerHTML = footer();
function videoElement() {
        return `<video  height="75%" width="600px" style=" margin-top: -25px " muted autoplay preload="auto" playsinline loop> 
        <source src="./files/features.mp4" type="video/mp4">
    </video>`
}
function widht(){
    let container = document.querySelector('#top-section-child:nth-child(2)');
    container.innerHTML='';
    if ((window.matchMedia('(min-width: 1200px)') )) {
        console.log(videoElement())
        container.innerHTML=videoElement();
        console.log(container)
    }
    else {
        console.log(' if window resized',"width:",screen.availWidth,"height:",screen.availHeight)
        let img = document.createElement('img');
        img.src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/home/section-video/cover.png"
        img.style.width="100%"
        img.style.height='100%'
        container.append(img)
    }
    
}


window.onresize = widht
console.log('availScreenWidth',screen.availWidth)
