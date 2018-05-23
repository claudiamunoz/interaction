var vibratingbox = document.getElementById("jsanimation");
var rotatingbox = document.getElementById("cssboxes");
var xpos1 = 200;
var ypos1 = 400;
var xstep1 = 46;
var ystep1 = 60;
var id = setInterval(move, 10);

function move() {
    if (xpos1 > 350 || xpos1 > 0) {
        xstep1 = -xstep1;
    }
    if (ypos1 < 300 || ypos1 > 0) {
        ystep1 = -ystep1;
        setInterval(vibratingbox, 1000);
    }
    xpos1 = xpos1 + xstep1;
    ypos1 = ypos1 + ystep1;
    vibratingbox.style.top = ypos1 + 'px';
    vibratingbox.style.left = xpos1 + 'px';
}

window.addEventListener("keypress", secretmessage);

function secretmessage(event) {
    if (event.key === "a"){
        vibratingbox.textContent = "Boo";
    } else if (event.key === "s") {
        vibratingbox.textContent = "Leave me alone human!";
    } else if (event.key === "d") {
        vibratingbox.textContent = "I will never stop!";
    }
}

function onMouseDrag(event) {
	var path = new Path();
}
