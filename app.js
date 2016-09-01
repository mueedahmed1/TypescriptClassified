var DataArr = [];
var btn = document.getElementById("btn");
var listt = document.getElementById("list");
if (btn) {
    btn.addEventListener("click", function () {
        AddintoArr();
    });
}
var HoldData = JSON.parse(localStorage.getItem("data"));
console.log(HoldData);
function showData() {
    HoldData.forEach(function (item, index) {
        var gen = "<ul id='ind" + index + "' > " +
            "<li>" + item.product + "</li>" +
            "<li>" + item.contact + "</li>" +
            "<li>" + item.price + "</li>";
        listt.innerHTML += gen;
    });
}
if (listt) {
    showData();
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
