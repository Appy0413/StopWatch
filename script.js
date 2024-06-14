let minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let running = false;

const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');

startStopButton.addEventListener('click', () => {
    if (running) {
        stopTimer();
    } else {
        startTimer();
    }
});

resetButton.addEventListener('click', resetTimer);

function startTimer() {
    running = true;
    startStopButton.textContent = 'Stop';
    timer = setInterval(updateTime, 10);
}

function stopTimer() {
    running = false;
    startStopButton.textContent = 'Start';
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes += 1;
    }
    updateDisplay();
}

function updateDisplay() {
    minutesDisplay.textContent = formatTime(minutes);
    secondsDisplay.textContent = formatTime(seconds);
    millisecondsDisplay.textContent = formatTime(Math.floor(milliseconds / 10));
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
