console.dir(document.all);//selecting
console.dir(document.all[8].innerText);
document.getElementById("pets")// using id
let smallImages = document.getElementsByClassName("rider");//using class name 

for(let i=0;i<smallImages.length;i++){
    console.dir(smallImages[i]);
    // smallImages[i].src="cat.jpg";
    console.log(`value of image no.${i} is change.`);
}

console.log(document.getElementsByTagName("p"));//using tag


console.dir(document.querySelector("h1"));//select for 1st heading 
console.dir(document.querySelector("#pets"));//select for 1st id 
console.dir(document.querySelector(".card"));//select for 1st class 


console.dir(document.querySelectorAll("p"));// select all paragraph

let para=document.querySelector("p");

console.log(para.innerText);
console.log(para.textContent);
console.log(para.innerHTML);

para.innerText="i am a house rider";//change the text use in normal text 
para.innerHTML="i am a <b>house rider</b>";//change the text use in html class

let imag=document.querySelector('img');
console.log(imag.getAttribute('id')); //get the id value
imag.setAttribute('id','king');//set the id 
// imag.classList.add('alu');
console.log(imag.getAttribute('id'));//get the id value

console.dir(imag);

let heading=document.querySelector('h3');

heading.style.color='blue';

heading.style.backgroundColor='yellow';

console.dir(para.classList);

para.classList.add("green");

console.dir(para.classList);

para.classList.remove("green");

console.log(para.classList.contains("green"));

para.classList.toggle("green");

console.dir(para.classList);

para.classList.toggle("green");

console.dir(para.classList);

console.dir(para.parentElement);

console.dir(para.children);

let box= document.querySelector('div');
console.dir(box.children); 

console.log(box.childElementCount); 

console.dir(box.children[0].nextElementSibling); 

console.dir(box.children[1].previousElementSibling); 

let newp=document.createElement('p');

newp.innerText="Hi, i am new p.";

let body=document.querySelector('body');

// body.prepend(newp); // body.append(newp);
// box.appendChild(newp);

let heading3=document.querySelector('h3');

heading3.appendChild(newp);
newp.append("This is new text.");
newp.prepend("Hi,subrata,");

//  newp.remove();

let par=document.createElement ("p");
par.innerText="hey,i am red";
par.style.color="red";
body.appendChild(par); 

let head3=document.createElement ("h3");
head3.innerText="hey,im a green h3";
head3.style.color="green";
body.appendChild(head3); 

let h1=document.createElement("h1");
let par2=document.createElement("p");
let div=document.createElement("div");
h1.innerText="I'm in a div";
h1.style.color='green'
par2.innerText="ME TOO!";

div.append(h1);
div.append(par2);

div.classList.add("box");
body.append(div);

let botton =document.createElement("button");
let inp =document.createElement("input");

botton.innerText="Click me";
body.append(inp);
body.append(botton);
inp.placeholder="username";
botton.setAttribute("id","btn");

let dom=document.createElement("h1");
dom.innerText="DOM Practice";
dom.classList.add("practice");
body.append(dom);

let hea1=document.querySelector("h1");
hea1.innerText="This page create, Subrata";
hea1.style.backgroundColor="yellow";
hea1.style.color="blue";

let paragr=document.createElement('p');
paragr.innerHTML="my name is <b>Subrata Mondal</b>";

body.append(paragr);