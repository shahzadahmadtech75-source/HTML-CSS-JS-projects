
// date = time.getDate()
// hour = time.getHours()
// minute = time.getMinutes()
// let hour = document.getElementById('hour')
// let minute = document.getElementById('minute')
// let second = document.getElementById('second')
// function secupdate(){
//     let time1 = new Date;
//     let seconds = time1.getSeconds();
//     second.innerHTML= seconds;
// }
// function minupdate(){
//     let time2 = new Date;
//     let minutes = time2.getMinutes();
//     minute.innerHTML= minutes;
// }
// function hourupdate(){
//     let time3 = new Date;
//     let hours = time3.getHours();
//     hour.innerHTML= hours;
// }
// secupdate()
// minupdate()
// hourupdate()
// setInterval(secupdate,1000);
// setInterval(minupdate,60000);
// setInterval(hourupdate,3600000);
let hourEl = document.getElementById('hour');
let minuteEl = document.getElementById('minute');
let secondEl = document.getElementById('second');

function updateClock() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    // Add leading zeros
    hourEl.innerHTML = h < 10 ? '0' + h : h;
    minuteEl.innerHTML = m < 10 ? '0' + m : m;
    secondEl.innerHTML = s < 10 ? '0' + s : s;
}

// Initial update
updateClock();

// Update every second
setInterval(updateClock, 1000);
