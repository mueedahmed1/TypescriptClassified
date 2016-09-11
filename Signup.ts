
let chk = document.getElementsByName("choosename")[0];
let chk1 = document.getElementsByName("email")[0];
let chk2 = document.getElementsByName("password")[0];

console.log(chk1);
console.log(chk);
console.log(chk2);

chk.addEventListener("focusout", function () {
    checkEmptyInput();

});

function checkEmptyInput() {
    if ((<HTMLInputElement>chk).value.length == 0) {
        document.getElementById("err").removeAttribute("style");
        // (<HTMLInputElement>chk).focus();
    }
    else {
        allLetter();
    }
};

function allLetter() {
    var letters = /^[A-Za-z]+$/;
    if ((<HTMLInputElement>chk).value.match(letters)) {
        document.getElementById("correct").removeAttribute("style");
    }
    else {
        document.getElementById("charonly").removeAttribute("style");
        // (<HTMLInputElement>chk).focus();
    }
};

chk.addEventListener("focusin", function () {
    document.getElementById("err").setAttribute("style", "display:none");
    document.getElementById("correct").setAttribute("style", "display:none");
    document.getElementById("charonly").setAttribute("style", "display:none");

});


chk1.addEventListener("focusout", function () {
    checkEmptyEmail();
});

function checkEmptyEmail() {
    if ((<HTMLInputElement>chk1).value.length == 0) {
        document.getElementById("err1").removeAttribute("style");
        // (<HTMLInputElement>chk1).focus();
    }
    else {
        ValidateEmail();
    }
};


function ValidateEmail() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,3})+$/;
    if ((<HTMLInputElement>chk1).value.match(mailformat)) {
        document.getElementById("correct1").removeAttribute("style");

    }
    else {

        document.getElementById("charonly1").removeAttribute("style");
        //  (<HTMLInputElement>chk1).focus();
    }
};

chk1.addEventListener("focusin", function () {
    document.getElementById("err1").setAttribute("style", "display:none");
    document.getElementById("correct1").setAttribute("style", "display:none");
    document.getElementById("charonly1").setAttribute("style", "display:none");

});

chk2.addEventListener("focusout", function () {
    checkEmptyPassword();
});


function checkEmptyPassword() {
    if ((<HTMLInputElement>chk2).value.length == 0) {
        document.getElementById("err2").removeAttribute("style");
        // (<HTMLInputElement>chk2).focus();
    }
    else {
        CheckPassword();
    }
};

function CheckPassword() {
    var passw = /^[A-Za-z]\w{7,14}$/;
    if ((<HTMLInputElement>chk2).value.match(passw)) {
        document.getElementById("correct2").removeAttribute("style");
    }
    else {
        document.getElementById("charonly2").removeAttribute("style");
        // (<HTMLInputElement>chk2).focus();
    }
};

chk2.addEventListener("focusin", function () {
    document.getElementById("err2").setAttribute("style", "display:none");
    document.getElementById("correct2").setAttribute("style", "display:none");
    document.getElementById("charonly2").setAttribute("style", "display:none");

});

function checkData() {
    if ((<HTMLInputElement>chk).value.length == 0) {
        alert("username required");
        // (<HTMLInputElement>chk).focus();
    }
    if ((<HTMLInputElement>chk1).value.length == 0) {
        alert("Email Address required");
        // (<HTMLInputElement>chk1).focus();
    }

    if ((<HTMLInputElement>chk2).value.length == 0) {
        alert("Password required");
        // (<HTMLInputElement>chk2).focus();
    }

    // if ((<HTMLInputElement>chk2).value.length) {
    //     if ((<HTMLInputElement>chk2).value.length < 7) {
    //         // alert("Password length too short");
    //         (<HTMLInputElement>chk2).focus();
    //     }

    //     if ((<HTMLInputElement>chk2).value.length > 16) {
    //         // alert("Password length too long");
    //         (<HTMLInputElement>chk2).focus();
    //     }
    // }

    else {
        submitData();
    }

};

function submitData() {
    var letters = /^[A-Za-z]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,3})+$/;
    var passw = /^[A-Za-z]\w{7,14}$/;
    var cmp = (<HTMLInputElement>chk).value.match(letters);
    var cmp1 = (<HTMLInputElement>chk1).value.match(mailformat);
    var cmp2 = (<HTMLInputElement>chk2).value.match(passw);


    if ((<HTMLInputElement>chk).value && cmp) {
        var setuser = (<HTMLInputElement>chk).value;
    }

    if ((<HTMLInputElement>chk1).value && cmp1) {
        var setEmail = (<HTMLInputElement>chk1).value;
    }

    if ((<HTMLInputElement>chk2).value && cmp2) {
        var setPass = (<HTMLInputElement>chk2).value;
    }
    if (((<HTMLInputElement>chk).value && cmp) && ((<HTMLInputElement>chk1).value && cmp1) && ((<HTMLInputElement>chk2).value && cmp2)) {
        console.log(setuser + " " + setEmail + " " + setPass);
        alert("you have Successfully Register");
    (<HTMLInputElement>chk).value = "";
    (<HTMLInputElement>chk1).value = "";
    (<HTMLInputElement>chk2).value = "";

        window.location.href = "Signin.html";
    }

    else {
        alert("data is not submitted because something went wrong");
    }
    
}