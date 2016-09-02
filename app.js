var DataArr = [];
var btn = document.getElementById("btn");
var listt = document.getElementById("list");
var HoldData = JSON.parse(localStorage.getItem("data"));
console.log(HoldData);
if (btn) {
    btn.addEventListener("click", function () {
        AddintoArr();
    });
}
function showData() {
    HoldData.forEach(function (item, index) {
        var gen = "<ul id='ind" + index + "'>  \n                  <li>  " + item.product + "  </li> \n                  <li> " + item.contact + " </li> \n                  <li>  " + item.price + " </li>\n                  <li>  <button id='id" + index + "'>Delete</button></li>\n                  </ul>";
        listt.innerHTML += gen;
        // console.log(document.getElementById(`id${index}`));
        document.getElementById("id" + index).addEventListener("click", function (index) {
            console.log(index);
        });
        //console.log(document.getElementById(`id${index}`).parentNode.parentNode);
    });
}
function deletefunc(indexx) {
    var nodee = document.getElementById("id" + indexx).parentNode;
    console.log(nodee);
}
if (listt) {
    showData();
}
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
