console.log("subrataMondal")
let pen=10;
let pencil=5;
console.log("The total price is : ",pen+pencil,"rupees");

// let output ="The total price is : "+(pen+pencil)+" rupees";
// console.log(output);

let output =`The total price is : ${pen+pencil} rupees`;
console.log(output);
console.log(`The total price is : ${pen+pencil} rupees`);




let price=200;
if(price===250){
    console.log("box size is XL");
}
else if(price===200){
    console.log("box size is L");
}
else if(price===150){
    console.log("box size is ML");
}
else if(price===100){
    console.log("box size is M");
}
else if(price===50){
    console.log("box size is s");
}
else{
    console.log("box not available");
}

console.error("This is error massage");
 
console.warn("This is warning massage");

alert("This is alert massage");

let a=prompt("Enter your first name : ");

let b=prompt("Enter your last name : ");

console.log("Hello,",a ,b);