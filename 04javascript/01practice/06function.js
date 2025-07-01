function hello(){
    console.log("Hello");
}
function printname(){
    console.log("Subrata");
}
// hello();
// printname();

function roll_dice(){
    let n = Math.floor(Math.random()*6) +1;
    console.log(n);
}

roll_dice();
roll_dice();
roll_dice();
roll_dice();
roll_dice();

function print(name,age){
    console.log(`${name}'s age is ${age}.`);
}

print("Subrata",20);


function avg3(a,b,c){
    return((a+b+c)/3);
}

console.log(avg3(2,6,4));

function printTable(n){
    for(let i=1;i<=10;i++){
        console.log(`${n}X${i}=${n*i}`);
    }
}
printTable(5);


let array=["hi " ,"Subrata" , "Mondal"];
function concat(arr){
    let ans;
    for(let i=0;i<arr.length;i++){
        ans+=arr[i];
    }
    return ans;
}

console.log(concat(array));


//scope
let greet="hi bro";
function scope(){
    let greet="Hi Subrata";
    console.log(greet);

    function innerscope(){
        console.log(greet);
    }

    innerscope();
}
console.log(greet);
scope();
console.log(greet);

//function expression 
const sum= function(a,b){
    return a+b;
}

console.log(sum(5,6));


//High order function 
function multiple(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}

let gre=function(){
    console.log("hello");
}

multiple(gre,6);



//return function

function oddevenTest(request){
    if(request=="odd"){
        return function(n){
            console.log((n%2!=0));
        }
    }
    else if(request=="even"){
        return function(n){
            console.log((n%2==0));
        }
    }
    else {
        console.log("Wrong request");
    }
}

let request="odd";

let func=oddevenTest(request);
func(3);


// const calculator={
//     add:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     },
//     mul:function(a,b){
//         return a*b;
//     },
//     div:function(a,b){
//         return a/b;
//     },
// }

const calculator={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    },
    div(a,b){
        return a/b;
    },
}

calculator.add(1,3);
calculator.sub(1,3);
