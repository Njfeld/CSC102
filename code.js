// Function to update the text of the heading
function updateText() {
    // Gets the HTML element with the ID "heading"
    let heading = document.getElementById("heading");
    // Changes the inner HTML (text content) of the heading
    heading.innerHTML = "Text has been changed!";
}

// Function to simulate rolling a six-sided die
function rollDice() {
    // Generates a random number between 0 and 1

    let dieRoll = Math.floor(Math.random() * 6) + 1; 
    // Gets the HTML element where the game output will be displayed
    let outputDiv = document.getElementById("gameOutput");

    // Sets the initial text to display the result of the die roll
    outputDiv.innerHTML = "You rolled a " + dieRoll + ".<br>";
// break it here for class change the math :-( fix it with if (dieRoll % 2 === 0) 
    // Checks if the die roll is an even number
// add brake 

// fixed 
    if (dieRoll % 2 === 0) {
        // output indicating the roll was even
        outputDiv.innerHTML += "That's an even number!" ;
    } else {
        // output indicating the roll was odd
        // break it here take out the plus +
        // fixed
        outputDiv.innerHTML += "That's an odd number!";
    }
}
        // <img id="memeImage" src="duck meme.png" alt="meme memeImage">
// keep track of interval ID for moving the duck
        let intervalID =0;
// start the duck moving


// random number 
function randomNum(){

    return Math.floor (Math.random() * 850);
}

        function startMove(){
            // make shotcut
            let duckMeme = document.getElementById("memeImage");
            // new duck position
        intervalID =  setInterval (function (){ 
                let newTop = randomNum(); 
                let newLeft = randomNum();
               //  change the position of the duck
               duckMeme.style.left= newLeft + "px";
               duckMeme.style.top = newTop + "px";
              // console.log("left="+ newLeft +"px");
               // console.log("top="+ newTop +"px");

        }, 1000); // move every second

        document.getElementById("btnStart").disabled = true;
        document.getElementById("btnStop").disabled = false;
        // alternates stop start disable 
        }
        // stop duck move 
        function stopMove(){
            clearInterval(intervalID);
        document.getElementById("btnStart").disabled = false ;
        document.getElementById("btnStop").disabled = true;
// swaps the start and stop disable 
        }