const zeroPad = (num, places) => String(num).padStart(places, '0');

setInterval(() => {
    let newDate = new Date();
    let hr = newDate.getHours();
    let mn = newDate.getMinutes();
    let sec = newDate.getSeconds();

    let timee = zeroPad(hr, 2) + " : " + zeroPad(mn, 2) + " : " + zeroPad(sec, 2);
    let datee = newDate.toLocaleDateString();

    document.getElementById("dev").innerHTML = "<h2>" + timee + "<br> on " + datee + "</h2>";
}, 1000);