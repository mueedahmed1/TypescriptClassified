let DataArr: {}[] = []
let btn = document.getElementById("btn");
let listt = document.getElementById("list");
let HoldData = JSON.parse(localStorage.getItem("data"));
console.log(HoldData);


if (btn) {
    btn.addEventListener("click", function () {
        AddintoArr();
    });
}




function showData() {
    HoldData.forEach(function (item, index) {
        var gen = `<ul id='ind${index}'>  
                  <li>  ${item.product}  </li> 
                  <li> ${item.contact} </li> 
                  <li>  ${item.price} </li>
                  <li>  <button id='id${index}'>Delete</button></li>
                  </ul>`;   

                  listt.innerHTML += gen;
// console.log(document.getElementById(`id${index}`));

document.getElementById(`id${index}`).addEventListener("click",function(index){
 console.log(index);
})
                 //console.log(document.getElementById(`id${index}`).parentNode.parentNode);
    }

    );
}



function deletefunc(indexx){
let nodee = document.getElementById("id" + indexx).parentNode;
console.log(nodee);
}



if (listt) {
    showData();
    // console.log("under");
    //  list.appendChild();
}

function AddintoArr() {
    let productName = (<HTMLInputElement>document.getElementById('input1')).value;
    let contact = (<HTMLInputElement>document.getElementById('input2')).value;
    let price = (<HTMLInputElement>document.getElementById('input3')).value;

    DataArr = [...HoldData, {
        product: productName,
        contact: contact,
        price: price
    }];

    localStorage.setItem("data", JSON.stringify(DataArr));
    window.location.href = 'secondpage.html';
}