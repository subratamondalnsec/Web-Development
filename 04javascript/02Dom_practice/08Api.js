let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
   let fact=await getfact();
    let p1=document.querySelector("#result");
    p1.innerText=fact;
    let doglink= await getimage();
    let imgage=document.querySelector("#imag");
    imgage.src=doglink;
}); 

let url="https://catfact.ninja/fact";
let imgurl="https://dog.ceo/api/breeds/image/random";
fetch(url)
    .then((response) =>{
        console.log(response);
        return response.json()
    })
    .then((data) =>{
        console.log("data 1 =",data);
        return fetch(url);
    })
    .then((response) =>{
        console.log(response);
        return response.json()
    })
    .then((data2) =>{
        console.log("data 2 =",data2);
    }) 
     
    .catch((err)=>{
        console.log("Error -",err);
    });

console.log("My name is Subrata Mondal");

async function getfacts() {
    try{
        let res=await fetch(url);
        let data=await res.json();
        console.log("data 1 - ",data);
        let res2=await fetch(url);
        let data2=await res2.json();
        console.log("data 2 - ",data2); 
    }catch(e){
        console.log("error",e);
    }
}
console.log("bye");

  
async function getfact() {
    try{
        const config={header : {Accept: "application/json"}};
        let res=await axios.get(url,config);
        return  (res.data.fact);
    } catch(e){
        return "No fact found";
    }
}

async function getimage() {
    try{
        let res=await axios.get(imgurl);
        return  (res.data.message);
    } catch(e){
        return "No image found";
    }
};



