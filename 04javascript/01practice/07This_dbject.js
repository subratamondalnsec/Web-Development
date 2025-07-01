//this 

const Student={
   name:"Subrata",
   age:20,
   eng:95,
   phy:97,
   math:95,
   getAvg(){
      console.log(this);
      let avg=(this.eng + this.math +this.phy)/3;
      console.log(`${this.name} got avg marks = ${avg}`);
   }
}


 //try catch

 console.log("hi, ");
 console.log("Subrata ");
 try{
    console.log(a);
 }
 catch{
    console.log("a is not defined");
 }
 console.log("Mondal");

 //arrow function 

 const sum =(a,b) =>{
    console.log(a+b);
 }

 sum(20,85);

const cube =(a) =>{
   return(a*a*a);
}

console.log(cube(2));

const mul =(a,b) => a*b;
console.log(cube(2));


console.log("Hi,there!");
setTimeout(()=>{
   console.log("Subrata");
}, 4000);

console.log("welcome to");

let id=setInterval(()=>{
   console.log("Subrata");
}, 3000);

clearInterval(id);


const square=(a)=>a*a;
console.log(square(7));

let ed=setInterval(()=>{
   console.log("hello World");
},2000);

setTimeout(()=>{
   clearInterval(ed);
},10005);

