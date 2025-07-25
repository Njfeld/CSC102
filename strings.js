// sets the validate form function 

//   <!-- ToDo debug Uncaught ReferenceError ReferenceError: validateForm is not defined
function validateForm (){

    // short cut to var let =zip, first and last name 
let FirstName = document. getElementById("txtFirstName") .value;
let LastName = document. getElementById("txtLastName") .value;
let ZipCode = document. getElementById("txtzip") .value;
// create log

console.log("firstName="+ FirstName);
console.log("LastName="+ LastName);
console.log("ZipCode="+ ZipCode);
//  keeps from submit 
// create a var to conbime first and last name 
// debug space"""
let fullName = FirstName + " " + LastName;

// short cut to div in html

let divMessage = document.getElementById("divMessage")


// see how long name if full 20 caricters or less

if(fullName.length == 1|| fullName.length > 20){
    // user notify error 
    divMessage.innerHTML ="fill out form will fail if name is longer than 19 characters"

}
// zip must be five numbers 

else if (ZipCode.length !=5){
    divMessage.innerHTML ="Enter a zip code"
}
// else display the mssg all imput is good
else( 
    divMessage.innerHTML ="You did it!"+" "+fullName+ " " +"you filled out a form."+"the secret word is bureaucracy. "

)

    return false;
}
