var i = 0;
var txt = 'Hello Agent la_dee3 !'; /* The text */
var txt2 = ' Hello Agent la_dee3 !';
var speed = 100; /* The speed/duration of the effect in milliseconds */
var box1 = document.getElementById("textBox");
var loginBtn = document.getElementById('loginBtn');
var inputBox = document.getElementById('inputBox');
var box2 = document.getElementById('textBox2');

function typeWriter() {
	loginBtn.remove();
if (i < txt.length) {
    box1.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    } else {
      document.getElementById("inputBox").remove();
      document.getElementById("H5-1").remove();
      box1.style.paddingBottom = "0px";
    	document.getElementById("files").style.display = "block";
    } 
}

loginBtn.addEventListener('click', typeWriter);

// Time Date Exp.

// Set the date we're counting down to
var countDownDate = new Date("May 5, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("dateExp").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("dateExp").innerHTML = "EXPIRED";
  }
}, 1000);