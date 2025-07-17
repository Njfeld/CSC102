function updateText(){
    document.getElementById("heading").innerHTML = "JavaScrip example";
}

function rollDice(){
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    let message = `You rolled a ${diceRoll}!`;
    displayMessage(message);
}
function displayMessage(message) {
    let outputDiv = document.getElementById("gameOutput");
    outputDiv.innerHTML = message;
}
// this took me forever and i am not good at commenting 
// keeps the example text changer adds function to put button roll dice and then function to display results