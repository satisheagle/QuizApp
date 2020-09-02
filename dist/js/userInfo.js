let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
function secondsToHms(d) {
    d = Number(d);

    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
// return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
    return ('0' + m).slice(-2) + " mins :" + ('0' + s).slice(-2) + " Sec";
}
document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.time_taken").innerHTML = secondsToHms(user_time);

