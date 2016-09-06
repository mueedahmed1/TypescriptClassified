var DataArr = [];
var btn = document.getElementById("btn");
var listt = document.getElementById("list");
var update = document.getElementById("update");
var HoldData = JSON.parse(localStorage.getItem("data")) || [];
console.log(HoldData);
if (btn) {
    btn.addEventListener("click", function () {
        AddintoArr();
    });
}
function showData() {
    HoldData.forEach(function (item, index) {
        var gen = "<ul id='ind" + index + "'>  \n                  <li>  " + item.product + " </li> \n                  <li> " + item.contact + " </li> \n                  <li>  " + item.price + " </li>\n                  <li>  <button id='id" + index + "'>Delete</button><button id=\"edit" + index + "\">Edit</button></li>\n                  </ul>";
        listt.innerHTML += gen;
        // console.log(document.getElementById(`id${index}`));
    });
    HoldData.forEach(function (item, index) {
        document.getElementById("id" + index).addEventListener("click", function (e) {
            //  console.log(e);
            //  console.log(index);
            deletefunc(index);
        });
        document.getElementById("edit" + index).addEventListener("click", function (e) {
            //  console.log(e);
            localStorage.setItem("index", index);
            window.location.href = 'index.html';
            //  console.log(index);
            // Edit(index);
        });
    });
    //console.log(document.getElementById(`id${index}`).parentNode.parentNode);
}
;
function deletefunc(indexx) {
    // let nodee = document.getElementById("id" + indexx).parentNode; 
    var chk = JSON.parse(localStorage.getItem("data"));
    // console.log(chk);
    chk.splice(indexx, 1);
    localStorage.setItem("data", JSON.stringify(chk));
    // console.log(indexx);  
    // document.getElementById(`ind${indexx}`).innerHTML = ""  
    listt.removeChild(document.getElementById("ind" + indexx));
}
;
var getindx = localStorage.getItem("index");
if (getindx) {
    Edit(getindx);
}
function Edit(edtindx) {
    console.log("Edit work fine");
    console.log(edtindx);
    var dat = HoldData[edtindx];
    document.getElementById('input1').value = dat.product;
    document.getElementById('input2').value = dat.contact;
    document.getElementById('input3').value = dat.price;
    localStorage.removeItem('index');
    //    console.log(edtindx);
    // console.log(dat);
    // window.location.href = 'index.html';
    // document.getElementById("update").style.display = "initial !important";
    // window.location.href = 'index.html';
}
;
if (update) {
    document.getElementById("update").addEventListener("click", function () {
        //    console.log(getindx);
        var updt = JSON.parse(localStorage.getItem('data'));
        // console.log(updt[getindx]);
        updt[getindx].product = document.getElementById('input1').value;
        updt[getindx].contact = document.getElementById('input2').value;
        updt[getindx].price = document.getElementById('input3').value;
        updt.splice(getindx, 1, {
            product: updt[getindx].product,
            contact: updt[getindx].contact,
            price: updt[getindx].price
        });
        localStorage.setItem("data", JSON.stringify(updt));
        window.location.href = 'secondpage.html';
        // console.log(updt);
    });
}
;
if (listt) {
    showData();
}
;
function AddintoArr() {
    var productName = document.getElementById('input1').value;
    var contact = document.getElementById('input2').value;
    var price = document.getElementById('input3').value;
    DataArr = HoldData.concat([{
        product: productName,
        contact: contact,
        price: price
    }]);
    localStorage.setItem("data", JSON.stringify(DataArr));
    window.location.href = 'secondpage.html';
}
;
