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
    return false;
}
