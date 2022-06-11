// let progressbar = document.querySelector(".progress");
// let count = progressbar.dataset.count;

// function progress() {
//   if (count > 100) {
//     clearInterval();
//   } else {
//     heading.innerText = count;
//     // progressbar.style.width = `${count}%`;
//     count++;
//   }
// }

// let stop = setInterval(function () {
//   progress();
// }, 100);

// _________________*******___________________


const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")
const progress = document.getElementById("progress")

function s(){
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    hour.textContent = hr
    minute.textContent = min
    second.textContent = sec

    progress.style.width = (sec / 60) * 100 + "%"
}
setInterval(s)