function checkPalindrome(event) {
    // prevent form submit 
    event.preventDefault();

    // shortcut to wordtxt
    let userInput = document.getElementById("wordtxt").value;

    // Define the divResult variable first, so it is available
    let divResult = document.getElementById("divResult");

    
    function isPalindrome(stringToTest) {
        
        stringToTest = stringToTest.toLowerCase();
        let stringToReverse = stringToTest;
        // convert string to array reverse content then join to string 
        stringToReverse = stringToReverse.split("").reverse().join("");
        // compare reversed string with original
        if (stringToTest === stringToReverse) {
            return true;
        } else {
            return false;
        }
    }

    //  call the function after it's defined
    let isPalin = isPalindrome(userInput);

    
    if (isPalin) {
        divResult.textContent = userInput + " is a palindrome";
    } else {
        divResult.textContent = userInput + " is not a palindrome";
    }
}