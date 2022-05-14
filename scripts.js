let numeroMeme = Math.floor(Math.random() * 29) + 1;
document.getElementById("meme").src="./Memes/Día del plátano " + numeroMeme + ".png";

let countDownDate = new Date("May 14, 2022 19:40:00").getTime();

let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("cuentaAtras").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("cuentaAtras").innerHTML = "FELIZ DÍA DEL PLÁTANO";
  }
}, 1000);
