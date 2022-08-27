var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }

function myfun() {
  let div = document.getElementById("vikalp");
  div.style.display = "block";

}
function myfunc(x) {
  console.log(x);
  document.getElementById("input").value = x;
  let y = document.getElementById("search").value;
  kumar(y, x);
}
function myval() {
  let q = document.querySelector("#input").value;
  if(q == "") {
    let div = document.getElementById("vikalp");
    div.style.display = "none";
  }
}

function kumar(amt, plc) {
  const api = "https://api.exchangerate-api.com/v4/latest/USD";
  // for selecting different controls
  var search = document.querySelector(".searchBox");
  var convert = document.querySelector(".selected");
  var fromCurrecy = document.querySelector(".from");
  var finalValue = document.querySelector("#my_ans");
  var finalAmount = document.getElementById("finalAmount");
  var resultFrom = fromCurrecy.value;
  var resultTo = "EUR";
  var searchValue = amt;
  getResults();
  function getResults() {
    console.log("sanu");
    fetch(`${api}`)
      .then(currency => {
        return currency.json();
      }).then(displayResults);
  }
  function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    console.log(fromRate, toRate, searchValue);
    finalValue.innerHTML =`${((toRate / fromRate) * searchValue).toFixed(2)}€`;
    console.log(((toRate / fromRate) * searchValue).toFixed(2));
  }
}

function myprice() {
  let val = document.querySelector(".pri").value;
  console.log(+(val));
  document.getElementById("prices").innerText = `₹${(0.48*val).toFixed(2)}`
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  let ans = (0.75 * this.value)
  output.innerHTML = `₹${ans}`;
}

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  let ans2 = (0.25 * this.value)
  output2.innerHTML = `₹${ans2}`;
}