var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var user = document.getElementById("username").value;
var pass = document.getElementById("password").value;
if ( user == "Nishant7410" && pass == "Nishant7410"){
alert ("User Logged In!");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
