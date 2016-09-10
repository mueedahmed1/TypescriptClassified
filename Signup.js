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
var chk = document.getElementsByName("choosename")[0];
var chk1 = document.getElementsByName("email")[0];
var chk2 = document.getElementsByName("password")[0];
console.log(chk1);
console.log(chk);
console.log(chk2);
chk.addEventListener("focusout", function () {
    checkEmptyInput();
});
function checkEmptyInput() {
    if (chk.value.length == 0) {
        document.getElementById("err").removeAttribute("style");
    }
    else {
        allLetter();
    }
}
;
function allLetter() {
    var letters = /^[A-Za-z]+$/;
    if (chk.value.match(letters)) {
        document.getElementById("correct").removeAttribute("style");
    }
    else {
        document.getElementById("charonly").removeAttribute("style");
    }
}
;
chk.addEventListener("focusin", function () {
    document.getElementById("err").setAttribute("style", "display:none");
    document.getElementById("correct").setAttribute("style", "display:none");
    document.getElementById("charonly").setAttribute("style", "display:none");
});
chk1.addEventListener("focusout", function () {
    checkEmptyEmail();
});
function checkEmptyEmail() {
    if (chk1.value.length == 0) {
        document.getElementById("err1").removeAttribute("style");
    }
    else {
        ValidateEmail();
    }
}
;
function ValidateEmail() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,3})+$/;
    if (chk1.value.match(mailformat)) {
        document.getElementById("correct1").removeAttribute("style");
    }
    else {
        document.getElementById("charonly1").removeAttribute("style");
    }
}
;
chk1.addEventListener("focusin", function () {
    document.getElementById("err1").setAttribute("style", "display:none");
    document.getElementById("correct1").setAttribute("style", "display:none");
    document.getElementById("charonly1").setAttribute("style", "display:none");
});
