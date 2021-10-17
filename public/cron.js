let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

function pause() {
  clearInterval(cron);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`;
}

function timer() {
  millisecond += 10;
  if (millisecond === 1000) {
    millisecond = 0;
    second++;
  }
  if (second === 60) {
    second = 0;
    minute++;
  }
  if (minute === 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}
function start() {
  pause();
  cron = setInterval(() => {
    timer();
  }, 10);
}

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();
