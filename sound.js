// sound management 

function addSound() {
// Code to add sound
    let btnPlay = document.getElementById("btnPlay");
    let btnPause = document.getElementById("btnPause");
    // audio element 
    let audduck = document.createElement("audio");

    // aud id
    audduck.setAttribute("id", "audduck");
    audduck.setAttribute("src", "mallard.mp3");
    // add to page
    document.body.appendChild(audduck);
    // show play and pause buttons
    btnPlay.hidden = false;
    btnPause.hidden = false;
    // hide add button
    btnAdd.hidden = true;
}

function playSound() {
    // Code to play sound
    let audduck = document.getElementById("audduck");
    audduck.play();
}

function pauseSound() {
    // Code to pause sound
    let audduck = document.getElementById("audduck");
    audduck.pause();
}
