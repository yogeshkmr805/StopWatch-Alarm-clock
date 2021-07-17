const zeroPad = (num, places) => String(num).padStart(places, '0');

let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timee = zeroPad(hr, 2) + " : " + zeroPad(min, 2) + " : " + zeroPad(sec, 2);
document.getElementById("pre").innerHTML = "<h2>" + timee + "</h2>";

startTimer = () => {

    count = count + 1;
    if (count > 1) {
        alert("If You want to Stop. Click on Stop!!");
        stopTimer();
    }

    p = setInterval(() => {
        sec = sec + 1;
        document.getElementById("pre").innerHTML = "<h2>" + zeroPad(hr, 2) + " : " + zeroPad(min, 2) + " : " + zeroPad(sec, 2) + "</h2>";

        if (sec >= 59) {
            sec = 0;
            min = min + 1;

            if (min >= 59) {
                sec = 0;
                min = 0;
                hr = hr + 1;

            }
        }

    }, 1000);
    // clearInterval(p);
}

stopTimer = () => {


    count = count - 1;
    //alert("STOP!!!" + count);
    clearInterval(p);


}

resetTimer = () => {

    hr = 0;
    min = 0;
    sec = 0;

    let timee = zeroPad(hr, 2) + " : " + zeroPad(min, 2) + " : " + zeroPad(sec, 2);
    let x = document.getElementById("pre");
    x.innerHTML = "<h2>" + timee + "</h2>";
    stopTimer();

}