// async function greet() {
//     // throw "week connection";//throw the error
//     return "hello";
// }

// greet()//asnc 
// .then((result)=>{
//     console.log("promise was resolve");
//     console.log("result was : ",result);
// })
// .catch((err)=>{
//     console.log ("promise was rejected with error : ",err);
// });

// let hello=async()=>{
//     return 5;
// }


// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     })
// }


// async function demo() {
//      getNum();
//      getNum();
//      getNum();

//     await getNum();
//     await getNum();
//     await getNum();
    
// }

h1=document.querySelector("h1");
function changecolour(color,delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        let num=Math.floor(Math.random()*10)+1;
        if(num>10){
            reject("promise rejected");
        }
        h1.style.color=color;
        resolve("color change")
    },delay);
    })
    
}

async function demo() {
    try{
        await changecolour("red",1000);
        await changecolour("orange",1000);
        await changecolour("green",1000);
        await changecolour("blue",1000);
        await changecolour("yellow",1000);
        await changecolour("violate",1000);
    }
    catch{
        console.log("error caught");
        console.log(err);
    }
    let a =4;
    console.log(a);
    console.log("new number = ",a+3);
}


