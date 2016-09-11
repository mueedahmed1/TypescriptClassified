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
chk2.addEventListener("focusout", function () {
    checkEmptyPassword();
});
function checkEmptyPassword() {
    if (chk2.value.length == 0) {
        document.getElementById("err2").removeAttribute("style");
    }
    else {
        CheckPassword();
    }
}
;
function CheckPassword() {
    var passw = /^[A-Za-z]\w{7,14}$/;
    if (chk2.value.match(passw)) {
        document.getElementById("correct2").removeAttribute("style");
    }
    else {
        document.getElementById("charonly2").removeAttribute("style");
    }
}
;
chk2.addEventListener("focusin", function () {
    document.getElementById("err2").setAttribute("style", "display:none");
    document.getElementById("correct2").setAttribute("style", "display:none");
    document.getElementById("charonly2").setAttribute("style", "display:none");
});
function checkData() {
    if (chk.value.length == 0) {
        alert("username required");
    }
    if (chk1.value.length == 0) {
        alert("Email Address required");
    }
    if (chk2.value.length == 0) {
        alert("Password required");
    }
    else {
        submitData();
    }
}
;
function submitData() {
    var letters = /^[A-Za-z]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,3})+$/;
    var passw = /^[A-Za-z]\w{7,14}$/;
    var cmp = chk.value.match(letters);
    var cmp1 = chk1.value.match(mailformat);
    var cmp2 = chk2.value.match(passw);
    if (chk.value && cmp) {
        var setuser = chk.value;
    }
    if (chk1.value && cmp1) {
        var setEmail = chk1.value;
    }
    if (chk2.value && cmp2) {
        var setPass = chk2.value;
    }
    if ((chk.value && cmp) && (chk1.value && cmp1) && (chk2.value && cmp2)) {
        console.log(setuser + " " + setEmail + " " + setPass);
        alert("you have Successfully Register");
        chk.value = "";
        chk1.value = "";
        chk2.value = "";
        window.location.href = "Signin.html";
    }
    else {
        alert("data is not submitted because something went wrong");
    }
}
