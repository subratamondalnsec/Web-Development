let btns=document.querySelectorAll("button");
for(bt of btns){
    bt.onclick=click;
    bt.onmouseenter=function(){
        console.log("you entered a button ");
    };
    bt.addEventListener("click",sayhello);
    bt.addEventListener("click",sayname);
}

function click(){
    // alert("hello");
    console.log("button was clicked");
};

function sayhello(){
    alert("hello");
};

function sayname(){
    alert("Hi,Subrata");
};

let p=document.querySelector("p");
p.addEventListener("click",function(){
    console.log("para was click");
});
let box=document.querySelector(".box");

box.addEventListener("mouseenter",function(){
    console.log("mouse inside div");
});
let head1=document.querySelector("h1");
let head2=document.querySelector("h2");

function changecolor(){
    console.log(this.innerTest);
    this.style.backgroundColor="blue";
}

head1.addEventListener("click",changecolor);
head2.addEventListener("click",changecolor);

keyevent 

let inp=document.querySelector("input");
inp.addEventListener("keydown",function(event){
    console.log("key=",event.key);
    console.log("code=",event.code);
    console.log("key was pressed");

    if(event.code=="ArrowUp") console.log("character move upward");
    else if(event.code=="ArrowDown") console.log("character move backward");
    else if(event.code=="ArrowRight") console.log("character move right");
    else if(event.code=="ArrowLeft") console.log("character move left");
});

let form=addEventListener("submit", function(event){
    event.preventDefault();// onno kono page jabe na
    alert("from submitted");
    // let user=document.querySelector("#user");
    // let pass=document.querySelector("#pass");
    let user=this.elements[0];
    let pass=this.elements[1];
    // console.dir(user);
    console.log(user.value);
    console.log(pass.value);
    alert(`Hi ${user.value}, your password is set to ${pass.value}`);

});
let user=document.querySelector("#user");
user.addEventListener("change",function(){
    console.log("change event");
    console.log("final value = ",this.value)
});

user.addEventListener("input",function(){
    console.log("input event");
    console.log("final value = ",this.value)
});
