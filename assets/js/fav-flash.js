pos = 0

function set_favicon() {
    // Assign a constant variable and get them by the favicon Id
    const favicon = document.querySelector('[rel=icon]');
    if(pos == 0) {
        favicon.href = "/assets/ico/1.png";
    }
    if(pos == 1) {
        favicon.href = "/assets/ico/2.png";
    }
    if(pos == 2) {
        favicon.href = "/assets/ico/3.png";
    }
    if(pos == 3) {
        favicon.href = "/assets/ico/4.png";
        pos = -1
    }
    pos++
}

 const interval = setInterval(function () {
     set_favicon()
 }, 1000);
