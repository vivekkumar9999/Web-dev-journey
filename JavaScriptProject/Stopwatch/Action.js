let sec = 0;
let min = 0;
let hour = 0;
let timer;

let display = document.getElementById("display");

let start = () => {

    timer = setInterval(() => {

        sec++;

        if (sec == 60) {
            sec = 0;
            min++;
        }

        if (min == 60) {
            min = 0;
            hour++;
        }

        display.innerHTML =
            hour + ":" + min + ":" + sec;

    }, 1000);

};

let stop = () => {
    clearInterval(timer);
};

let reset = () => {
    clearInterval(timer);

    sec = 0;
    min = 0;
    hour = 0;

    display.innerHTML = "0:0:0";
};