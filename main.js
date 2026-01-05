// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// let milliseconds = 0;
// let timer = null;
// const timeEl = document.getElementById("time");

// function updateTime() {
//     milliseconds += 10;

//     if (milliseconds === 1000) {
//         milliseconds = 0;
//         seconds++;
//     }

//     if (seconds === 60) {
//         seconds = 0;
//         minutes++;
//     }

//     if (minutes === 60) {
//         minutes = 0;
//         hours++;
//     }

//     const h = String(hours).padStart(2, "0");
//     const m = String(minutes).padStart(2, "0");
//     const s = String(seconds).padStart(2, "0");
//     const ms = String(milliseconds).padStart(3, "0").slice(0, 2);
//     timeEl.innerHTML = `${h} : ${m} : ${s}<span class="ms">.${ms}</span>`;
// }

// function start() {
//     if (timer !== null) return;
//     timer = setInterval(updateTime, 10);
// }

// function pause() {
//     clearInterval(timer);
//     timer = null;
// }

// function reset() {
//     clearInterval(timer);
//     timer = null;
//     hours = 0;
//     minutes = 0;
//     seconds = 0;
//     milliseconds = 0;
//     timeEl.innerHTML = `00 : 00 : 00<span class="ms">.00</span>`;
// }

let tong = 0;     // tổng thời gian (ms)
let timer = null;

const timeEl = document.getElementById("time");

function time(ms) {
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    const ms2 = Math.floor((ms % 1000) / 10);
    return `
        ${String(h).padStart(2, "0")} :
        ${String(m).padStart(2, "0")} :
        ${String(s).padStart(2, "0")}<span class="ms">.${String(ms2).padStart(2, "0")}</span>
    `;
}

function start() {
    if (timer) return;
    timer = setInterval(() => {
        tong += 10;
        timeEl.innerHTML = time(tong);
    }, 10);
}

function pause() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    pause();
    tong = 0;
    timeEl.innerHTML = `00 : 00 : 00<span class="ms">.00</span>`;
}