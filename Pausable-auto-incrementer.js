const timerObj = timer(10, 10);
//start
timerObj.startTimer();
//stop
setTimeout(() => {
  timerObj.stopTimer();
}, 5000);

function timer(inital, step) {
  let intervalID = null;
  function startTimer() {
    if (intervalID) return;

    intervalID = setInterval(() => {
      console.log(inital);
      inital = inital + step;
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalID);
    intervalID = null;
  }

  return { startTimer, stopTimer };
}
