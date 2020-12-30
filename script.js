let initCount = setInterval(() => {
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
  const box = document.querySelectorAll('.box');

  span_days.innerHTML = `0${days}`.slice(-2);
  span_hours.innerHTML = `0${hours}`.slice(-2);
  span_minutes.innerHTML = `0${minutes}`.slice(-2);
  span_seconds.innerHTML = `0${seconds}`.slice(-2);

  box[3].style.transform = 'rotateX(180deg)';

  setTimeout(() => {
    box[3].style.transform = 'rotateX(0deg)';
    box[3].style.boxShadow = '0 -10px 0px -2px #191a24';
  }, 50);

  if (seconds === 59) {
    box[2].style.transform = 'rotateX(180deg)';
    setTimeout(() => {
      box[2].style.transform = 'rotateX(0deg)';
    }, 50);
  }

  if (minutes === 59 && seconds == 59) {
    box[1].style.transform = 'rotateX(180deg)';
    setTimeout(() => {
      box[1].style.transform = 'rotateX(0deg)';
    }, 50);
  }

  if (hours === 23 && minutes === 59 && seconds == 59) {
    box[0].style.transform = 'rotateX(180deg)';
    setTimeout(() => {
      box[0].style.transform = 'rotateX(0deg)';
    }, 50);
  }

  if (distance < 0) {
    clearInterval(initCount);
  }
}, 1000);

let endtime = new Date();
endtime.setDate(endtime.getDate() + 10);
