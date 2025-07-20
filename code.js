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

    // Checks if the die roll is an even number
    if (dieRoll % 2 === 0) {
        // output indicating the roll was even
        outputDiv.innerHTML += "That's an even number!";
    } else {
        // output indicating the roll was odd
        outputDiv.innerHTML += "That's an odd number!";
    }
}