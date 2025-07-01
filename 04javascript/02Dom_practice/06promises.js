// h1=document.querySelector("h1");
// function changecolour(color,delay,nextcolorchange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextcolorchange) nextcolorchange();
//     },delay);
// }

// changecolour("red",1000,()=>{//call back hall
//     changecolour("orange",1000,()=>{
//         changecolour("green",1000);
//     });
// });

//upgrade

// h1=document.querySelector("h1");
// function changecolour(color,delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//         h1.style.color=color;
//         resolve("color change")
//     },delay);
//     }) 
// }

// changecolour("red",1000)
// .then(()=>{
//     console.log("red color complrte");
//     return changecolour("orange",1000);
// })
// .then(()=>{
//     console.log("orange color complrte");
//     return changecolour("green",1000);
// })
// .then(()=>{
//     console.log("green color complrte");
//     return changecolour("blue",1000);
// })
// .then(()=>{
//     console.log("blue color complrte");
// });






// function savetoDb(data,success,failure){
//     let internetspreed=Math.floor(Math.random()*10)+1;
//     if(internetspreed>4) {
//         console.log("your data was saved");
//     }else{
//         console.log("weak connection,your data not saved")
//     }
// }


// function savetoDb(data,success,failure){
//     let internetspreed=Math.floor(Math.random()*10)+1;
//     if(internetspreed>4) {
//         success();
//     }else{
//         failure();
//     }
// }

// savetoDb("sub",()=>{
//     console.log("Succes : your data was saved");
//     savetoDb("hello",()=>{
//         console.log("Succes : your data was saved 2");
//         savetoDb("subrata",()=>{
//             console.log("Succes : your data was saved 3");
            
//         },()=>{
//             console.log("failure : weak connection,your data not saved");
//         });
//     },()=>{
//         console.log("failure : weak connection,your data not saved");
//     });
// },()=>{
//     console.log("failure : weak connection,your data not saved");
// },);


function savetoDb(data,success,failure){
    return new Promise((resolve,reject)=>{
        let internetspreed=Math.floor(Math.random()*10)+1;
        if(internetspreed>4) {
            resolve("Succes : your data was saved");
        }else{
            reject("failure : weak connection,your data not saved");
        }
    }); 
}
// savetoDb("sub");

// promises

// let request=savetoDb("sub");
// request
//     .then(()=>{
//         console.log("promises was resolve,data1 saved");
//         // console.log(request);
//         return savetoDb("subrata");
//     })
//     .then(()=>{
//         console.log("data2 saved");
//         return savetoDb("hello");
//     })
//     .then(()=>{
//         console.log("data3 saved");
//     })
//     .catch(()=>{
//         console.log("promises was rejected");
//         // console.log(request);
//     });

//promises chaining 

let request=savetoDb("sub");
request
    .then((result)=>{
        console.log("promises was resolve,data1 saved");
        // console.log(request);
        console.log(result);
        return savetoDb("subrata");
    })
    .then((result)=>{
        console.log("data2 saved");
        console.log(result);
        return savetoDb("hello");
    })
    .then((result)=>{
        console.log("data3 saved");
        console.log(result);
    })
    .catch((error)=>{
        console.log("promises was rejected");
        // console.log(request);
        console.log(error);
    });