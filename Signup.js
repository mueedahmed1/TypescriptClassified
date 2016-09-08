// function allLetter(inputtxt)  
//   {  
//    var letters = /^[A-Za-z]+$/;  
//    if(inputtxt.value.match(letters))  
//      {  
//       return true;  
//      }  
//    else  
//      {  
//      alert("message");  
//      return false;  
//      }  
//   }  
// function required(){
//     let user = (<HTMLInputElement>document.getElementById("user")).value;
//     let email = (<HTMLInputElement>document.getElementById('email')).value;
//     let password = (<HTMLInputElement>document.getElementById('pass')).value;
//     console.log(user + "" + email + "" + password);
// }
function one() {
    console.log("one");
}
;
function two() {
    console.log("two");
}
function submitt() {
    one();
    two();
}
var chk = document.getElementsByName("choosename")[0];
var chk1 = document.getElementsByName("email")[0];
console.log(chk1);
console.log(chk);
// chk.addEventListener("focusout", function(){
//     submitt();
// }) 
