/****navbar scroll */

let nav = document.querySelector(".navbar");
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {
 if(document.documentElement.scrollTop > 20) {
     nav.classList.add('scroll-on');
     mybutton.style.display = "block";
 }else{
  nav.classList.remove('scroll-on');
  mybutton.style.display = "none";

 }

 /****navbar hide */

 let navBar = document.querySelectorAll(".nav-link");
 let Navcollapse = document.querySelector(".navbar-collapse.collapse");

 navBar.forEach(function(a) {
a.addEventListener("click", function() {
    Navcollapse.classList.remove("show");
})
 });

}
 

/****BUTTON SLIDE TOP */

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




//*** special Countdown* */


let = dayItem = document.querySelector("#days");
let = HourItem = document.querySelector("#hours");
let = minItem = document.querySelector("#min");
let = secItem = document.querySelector("#sec");

let countdown = () => {
  let futureDate = new Date("30 September 2023");
  let currentDate = new Date();
  let myDate = futureDate - currentDate;

  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let min = Math.floor(myDate / 1000 / 60) % 60;
  let sec = Math.floor(myDate / 1000) % 60;

  dayItem.innerHTML = days;
  HourItem.innerHTML = hours;
  minItem.innerHTML = min;
  secItem.innerHTML = sec;
}

countdown();

setInterval(countdown, 1000);