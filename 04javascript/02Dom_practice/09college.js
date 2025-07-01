let url="http://universities.hipolabs.com/search?country=";
let btn = document.querySelector("button");

btn.addEventListener("click",async() => {
    let country=document.querySelector("input").value;
    let colArr=await getcolleges(country);
    show(colArr);
});

function show(colArr){
    let list=document.querySelector("#list");
    for(col of colArr){
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);    
    }
}
async function getcolleges(country) {
    try{
        let res=await axios.get(url+country);
        return  (res.data);
    } catch(e){
        return "No College found";
    }
};
