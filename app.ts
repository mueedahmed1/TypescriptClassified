var DataArr : {}[] = []
var btn = document.getElementById("btn");
var list = document.getElementById("list");
if(btn){
btn.addEventListener("click" , function(){
   AddintoArr();
});
}

let HoldData = JSON.parse(localStorage.getItem("data"));
console.log(HoldData);

if(list){
 var li = '<li>adsadsasdd</li>';
//  list.appendChild();
}

function AddintoArr(){
     let productName = (<HTMLInputElement>document.getElementById('input1')).value;
    let contact = (<HTMLInputElement>document.getElementById('input2')).value;
    let price = (<HTMLInputElement>document.getElementById('input3')).value;
  
    DataArr.push({
        product : productName,
        contact : contact,
        price : price
    });

    localStorage.setItem("data", JSON.stringify(DataArr));
    window.location.href = 'secondpage.html';
}