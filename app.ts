let DataArr: {}[] = []
let btn = document.getElementById("btn");
let listt = document.getElementById("list");
let update = document.getElementById("update");
let HoldData = JSON.parse(localStorage.getItem("data")) || [];
console.log(HoldData);


if (btn) {
    btn.addEventListener("click", function () {
        AddintoArr();
    });
}




function showData() {
    HoldData.forEach(function (item, index) {
        var gen = `<ul id='ind${index}'>  
                  <li>  ${item.product} </li> 
                  <li> ${item.contact} </li> 
                  <li>  ${item.price} </li>
                  <li>  <button id='id${index}'>Delete</button><button id="edit${index}">Edit</button></li>
                  </ul>`;

        listt.innerHTML += gen;
        // console.log(document.getElementById(`id${index}`));

    });


    HoldData.forEach(function (item, index) {
        document.getElementById(`id${index}`).addEventListener("click", function (e) {
            //  console.log(e);

            //  console.log(index);
            deletefunc(index);

        });

        document.getElementById(`edit${index}`).addEventListener("click", function (e) {
            //  console.log(e);
localStorage.setItem("index", index);
window.location.href = 'index.html';
            //  console.log(index);
            // Edit(index);

        });
    });
    //console.log(document.getElementById(`id${index}`).parentNode.parentNode);
};



function deletefunc(indexx) {
    // let nodee = document.getElementById("id" + indexx).parentNode; 
    let chk = JSON.parse(localStorage.getItem("data"));
    // console.log(chk);
    chk.splice(indexx, 1);
    localStorage.setItem("data", JSON.stringify(chk));
    // console.log(indexx);  
    // document.getElementById(`ind${indexx}`).innerHTML = ""  
    listt.removeChild(document.getElementById(`ind${indexx}`));
};

let getindx = localStorage.getItem("index");


if(getindx){
Edit(getindx);
update.removeAttribute("disabled");
btn.setAttribute("disabled","disabled");
};


function Edit(edtindx) {
    console.log("Edit work fine");
    console.log(edtindx);
    let dat = HoldData[edtindx];
   (<HTMLInputElement>document.getElementById('input1')).value = dat.product;
   (<HTMLInputElement>document.getElementById('input2')).value = dat.contact;
   (<HTMLInputElement>document.getElementById('input3')).value = dat.price;
   localStorage.removeItem('index');
//    console.log(edtindx);
    // console.log(dat);
    // window.location.href = 'index.html';
    // document.getElementById("update").style.display = "initial !important";
    // window.location.href = 'index.html';
    
};

if(update){
   document.getElementById("update").addEventListener("click", function(){
//    console.log(getindx);
let updt = JSON.parse(localStorage.getItem('data'));
// console.log(updt[getindx]);
updt[getindx].product = (<HTMLInputElement>document.getElementById('input1')).value;
updt[getindx].contact =  (<HTMLInputElement>document.getElementById('input2')).value;
updt[getindx].price = (<HTMLInputElement>document.getElementById('input3')).value;

updt.splice(getindx,1,{
    product : updt[getindx].product,
    contact: updt[getindx].contact,
    price: updt[getindx].price
});

localStorage.setItem("data", JSON.stringify(updt));
window.location.href = 'secondpage.html';
// console.log(updt);
   })

};


if (listt) {
    showData();
    // console.log("under");
    //  list.appendChild();
};

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
};