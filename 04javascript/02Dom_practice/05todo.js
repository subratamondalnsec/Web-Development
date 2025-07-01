let btn=document.querySelector("button");
let ul = document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let items=document.createElement("li");
    items.innerText=inp.value;
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete") ;
    items.appendChild(delbtn);
    ul.appendChild(items);
    inp.value="";
});

ul.addEventListener("click",function(event){
    // console.log(event.target.nodeName);
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
    }
});
// not working
// let delbutns=document.querySelector(".delete");
// for(db of delbutns){
//     db.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     })
// }

