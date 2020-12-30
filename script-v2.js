let moveSeconds = 0;
let moveSecondsInverted = 0;
// let moveMinutes = 0;
// let moveMinutesInverted = 0;

const box = document.querySelectorAll('.box');

let endtime = new Date();
endtime.setDate(endtime.getDate() + 10);

function initCount() {
  let dateNow = new Date();

  let distance = endtime.getTime() - dateNow.getTime();

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const span_days = document.querySelector('.countdown-days');
  const span_hours = document.querySelector('.countdown-hours');
  const span_minutes = document.querySelector('.countdown-minutes');
  const span_seconds = document.querySelector('.countdown-seconds');

  span_seconds.innerHTML = `0${seconds}`.slice(-2);
  span_days.innerHTML = `0${days}`.slice(-2);
  span_hours.innerHTML = `0${hours}`.slice(-2);
  span_minutes.innerHTML = `0${minutes}`.slice(-2);

  

  function flipSeconds() {
    moveSeconds = moveSeconds + 2;
    moveSecondsInverted = moveSecondsInverted + 2;

    box[3].style.transform = `rotateX(${moveSeconds}deg)`;
    box[3].querySelector('.countdown-box').style.transform = `rotateX(${moveSecondsInverted}deg)`;
  }

  // ------------------------
  // any problem here

  // if (span_seconds.innerHTML == 59) {
  //   requestAnimationFrame(flipMinutes);
  // }
  
  // function flipMinutes() {
  //   if(span_seconds.innerHTML == 59){
  //     moveMinutes++;
  //     moveMinutesInverted--;

  //     box[2].style.transform = `rotateX(${moveMinutes}deg)`;
  //     box[2].querySelector('.countdown-box').style.transform = `rotateX(${moveMinutesInverted}deg)`;

  //     requestAnimationFrame(flipMinutes);
  //   }
  // }

  flipSeconds();

  if (distance < 0) {
    cancelAnimationFrame(initCount);
  }

  requestAnimationFrame(initCount);
}

initCount();
