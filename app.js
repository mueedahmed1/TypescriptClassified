var DataArr = [];
var btn = document.getElementById("btn");
var list = document.getElementById("list");
if (btn) {
    btn.addEventListener("click", function () {
        AddintoArr();
    });
}
var HoldData = JSON.parse(localStorage.getItem("data"));
console.log(HoldData);
if (list) {
    var li = '<li>adsadsasdd</li>';
}
function AddintoArr() {
    var productName = document.getElementById('input1').value;
    var contact = document.getElementById('input2').value;
    var price = document.getElementById('input3').value;
    DataArr.push({
        product: productName,
        contact: contact,
        price: price
    });
    localStorage.setItem("data", JSON.stringify(DataArr));
    window.location.href = 'secondpage.html';
}
