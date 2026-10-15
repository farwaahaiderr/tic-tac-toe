let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let interval = null;

// Get elements
const display = document.getElementById("display");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");


// Update display
function updateDisplay() {
    const min = String(minutes).padStart(2, "0");
    const sec = String(seconds).padStart(2, "0");
    const ms = String(milliseconds).padStart(2, "0");

    display.textContent = `${min}:${sec}:${ms}`;
}


// Start
startBtn.addEventListener("click", function () {

    // Prevent multiple timers
    if (interval !== null) {
        return;
    }

    interval = setInterval(function () {

        milliseconds++;

        if (milliseconds >= 100) {
            milliseconds = 0;
            seconds++;
        }

        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

        updateDisplay();

    }, 10);
});


// Stop
stopBtn.addEventListener("click", function () {

    clearInterval(interval);

    interval = null;
});


// Reset
resetBtn.addEventListener("click", function () {

    clearInterval(interval);
    interval = null;

    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    updateDisplay();
});


// Initial display
updateDisplay();