const zeroPad = (num, places) => String(num).padStart(places, '0');



let hr = 0;
let min = 0;
let sec = 0;
let count = 0;




let timee = zeroPad(hr, 2) + " : " + zeroPad(min, 2) + " : " + zeroPad(sec, 2);
document.getElementById("tim").innerHTML = "<h2>" + timee + "</h2>";

startTimer = () => {

    v = document.getElementById("abc").value.split(":");
    console.log(v);

    hr = v[0];
    min = v[1];
    sec = 0;

    count = count + 1;
    if (count > 1) {
        alert("If You want to Stop. Click on Stop!!");
        stopTimer();
    }

    p = setInterval(() => {
        if (sec > 0) {

            sec = sec - 1;
            document.getElementById("tim").innerHTML = "<h2>" + zeroPad(hr, 2) + " : " + zeroPad(min, 2) + " : " + zeroPad(sec, 2) + "</h2>";
        } else {
            if (min > 0) {
                sec = 59;
                min = min - 1;

            } else {

                if (hr > 0) {
                    sec = 59;
                    min = 59;
                    hr = hr - 1;
                } else {
                    clearInterval(p);
                    audio = new Audio('alarm.mp3');
                    audio.play();

                }
            }
        }

    }, 1000);

}

stopTimer = () => {


    count = count - 1;
    //alert("STOP!!!" + count);
    clearInterval(p);


}

stopMusic = () => {
    audio.pause();
}