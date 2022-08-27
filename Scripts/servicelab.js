import navbar from "../Components/exNavbar.js"
import footer from "../Components/exFooter.js"
import navbarworks from "../Components/navbarcontrols.js"
import navbarLogout from "../Components/navbarfunc.js"

document.querySelector('#navbar').innerHTML = navbar();
document.querySelector('#footer').innerHTML = footer();

document.getElementById("solutions").style.color="white";
document.getElementById("pricing").style.color="white";
document.getElementById("features").style.color="white";
document.getElementById("resources").style.color="white";
document.getElementById("blog").style.color="white";
document.getElementById("login").style.color="white";



window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 7 || document.documentElement.scrollTop > 7) {
     document.getElementById("navbar").style.backgroundColor = "white";
     document.getElementById("navbar").style.boxShadow = "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px";
     document.getElementById("solutions").style.color = "grey";
     document.getElementById("pricing").style.color="grey";
     document.getElementById("features").style.color="grey";
    document.getElementById("resources").style.color="grey";
    document.getElementById("blog").style.color="grey";
    document.getElementById("login").style.color="black";
  }
  else if(document.body.scrollTop <= 7 || document.documentElement.scrollTop <= 7){
    document.getElementById("navbar").style.backgroundColor = "#044A75";
    document.getElementById("navbar").style.boxShadow ="0px 0px 0px 0px";
    document.getElementById("solutions").style.color="white";
    document.getElementById("pricing").style.color="white";
    document.getElementById("features").style.color="white";
    document.getElementById("resources").style.color="white";
    document.getElementById("blog").style.color="white";
    document.getElementById("login").style.color="white";
  }
  else{
    document.getElementById("navbar").style.backgroundColor = "";
  }
}

let datetime = new Date().toLocaleTimeString();
console.log(datetime);
document.getElementById("time").innerText=datetime;


let month=[`<h3>Select a Date & Time</h3>
<div class="itwo">
    <p>September 2022</p>
    <p id="slideshow" > ></p>
</div>
<div id="outer">
<div id="date">
    <h5>MON</h5>
    <h5>TUE</h5>
    <h5>WED</h5>
    <h5>THU</h5>
    <h5>FRI</h5>
    <h5>SAT</h5>
    <h5>SUN</h5>
    <h5></h5>
    <h5></h5>
    <h5></h5>
    <h5>1</h5>
    <h5>2</h5>
    <h5>3</h5>
    <h5>4</h5>
    <h5>5</h5>
    <h5>6</h5>
    <h5>7</h5>
    <h5>8</h5>
    <h5>9</h5>
    <h5>10</h5>
    <h5>11</h5>
    <h5>12</h5>
    <h5>13</h5>
    <h5>14</h5>
    <h5>15</h5>
    <h5>16</h5>
    <h5>17</h5>
    <h5>18</h5>
    <h5>19</h5>
    <h5>20</h5>
    <h5>21</h5>
    <h5>22</h5>
    <h5>23</h5>
    <h5>24</h5>
    <h5>25</h5>
    <h5>26</h5>
    <h5>27</h5>
    <h5>28</h5>
    <h5>29</h5>
    <h5>30</h5>
    <h5>31</h5>
</div>
<div id="next">
    <button id="slideshow">
        <p>No times in September</p>
        <p>View next month ></p>
    </button>
</div>
</div>`,`<h3>Select a Date & Time</h3>
<div class="itwo">
    <p>October 2022</p>
    <p id="slideshow" > ></p>
</div>
<div id="outer">
<div id="date">
    <h5>MON</h5>
    <h5>TUE</h5>
    <h5>WED</h5>
    <h5>THU</h5>
    <h5>FRI</h5>
    <h5>SAT</h5>
    <h5>SUN</h5>
    <h5></h5>
    <h5></h5>
    <h5></h5>
    <h5></h5>
    <h5></h5>
    <h5>1</h5>
    <h5>2</h5>
    <h5>3</h5>
    <h5>4</h5>
    <h5>5</h5>
    <h5>6</h5>
    <h5>7</h5>
    <h5>8</h5>
    <h5>9</h5>
    <h5>10</h5>
    <h5>11</h5>
    <h5>12</h5>
    <h5>13</h5>
    <h5>14</h5>
    <h5>15</h5>
    <h5>16</h5>
    <h5>17</h5>
    <h5>18</h5>
    <h5>19</h5>
    <h5>20</h5>
    <h5>21</h5>
    <h5>22</h5>
    <h5>23</h5>
    <h5>24</h5>
    <h5>25</h5>
    <h5>26</h5>
    <h5>27</h5>
    <h5>28</h5>
    <h5>29</h5>
    <h5>30</h5>
    <h5>31</h5>
</div>
<div id="next">
    <button id="slideshow">
        <p>No times in October</p>
        <p>View next month ></p>
    </button>
</div>
</div>`,`<h3>Select a Date & Time</h3>
<div class="itwo">
    <p>August 2022</p>
    <p id="slideshow" > ></p>
</div>
<div id="outer">
<div id="date">
    <h5>MON</h5>
    <h5>TUE</h5>
    <h5>WED</h5>
    <h5>THU</h5>
    <h5>FRI</h5>
    <h5>SAT</h5>
    <h5>SUN</h5>
    <h5>1</h5>
    <h5>2</h5>
    <h5>3</h5>
    <h5>4</h5>
    <h5>5</h5>
    <h5>6</h5>
    <h5>7</h5>
    <h5>8</h5>
    <h5>9</h5>
    <h5>10</h5>
    <h5>11</h5>
    <h5>12</h5>
    <h5>13</h5>
    <h5>14</h5>
    <h5>15</h5>
    <h5>16</h5>
    <h5>17</h5>
    <h5>18</h5>
    <h5>19</h5>
    <h5>20</h5>
    <h5>21</h5>
    <h5>22</h5>
    <h5>23</h5>
    <h5>24</h5>
    <h5>25</h5>
    <h5>26</h5>
    <h5>27</h5>
    <h5>28</h5>
    <h5>29</h5>
    <h5>30</h5>
    <h5>31</h5>
</div>
<div id="next">
    <button id="slideshow">
        <p>No times in August</p>
        <p>View next month ></p>
    </button>
</div>
</div>`];


document.querySelector("#slideshow").addEventListener('click',function(){
  slide();
});
let i=0;
function slide()
{
  if(i==3)
  {
    i=0;
  }
  let container_month=document.querySelector("#nine");
//console.log(month);
//console.log(container_month,"Hello");
  container_month.innerHTML='';
  container_month.innerHTML=month[i++];
  document.querySelector('#slideshow').addEventListener('click',function(){
    slide();
  });
}

// //let container=document.getElementsByClassName("nine");
// //console.log(month.length);
// document.getElementById("slideshow").addEventListener("click",function(){
//   slide();
//   //document.getElementById("slideshow").style.backgroundColor="Green";
// });
// console.log(month);
// let i=0;
// function slide()
// {
//   let container=document.getElementsByClassName("nine");
//   //console.log("fun called");
//   if(i==3)
// console.log(container+"My Container");
//   container.innerHTML=month[i++];
  
//   document.getElementById("slideshow").addEventListener("click",function(){
//     slide();
//     //document.getElementById("slideshow").style.backgroundColor="Green";
//   });
//   console.log(container);
// }  {
//     i=0;
//   }
//   container.innerHTML="";
//   






navbarworks();
navbarLogout();