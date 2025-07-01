let arr=[1,2,3,4,5];
function print(el){
    console.log(el);
}

arr.forEach(print);

//or 

arr.forEach(function(el) {
    console.log(el);
});

//or 

arr.forEach((el) => {
    console.log(el);
});


let array=[
    {
        name:"subrata",
        mark : 152,
    },
    {
        name:"Aman",
        mark : 162,
    },
    {
        name:"raju",
        mark : 744,
    },
];

array.forEach((student)=>{
    console.log(student.mark)
});


let num=[1,2,3,4];
let double=num.map(function(el){
    return el*2;
});
console.log(double);


let arr2=[1,2,3,4,5,6];
let even=arr2.filter((el)=>(el%2==0));
console.log(even);

console.log(arr2.every((el)=>(el%2==0)));
let arr3=[2,4,6];
console.log(arr3.every((el)=>(el%2==0)));

console.log(arr2.some((el)=>(el%2==0)));
console.log(arr3.some((el)=>(el%2==0)));
let arr4=[1,3,5];
console.log(arr4.some((el)=>(el%2==0)));

let ans=arr4.reduce((res,el)=>(res+el));
console.log(ans);
let ans1=arr4.reduce((res,el)=>(res*el));
console.log(ans1);


let max=arr4.reduce((res,el)=>{
    if(res<el) return el;
    else return res;
});
console.log(max);

console.log(arr4.every((el)=>el%10==0));

let min=arr4.reduce((res,el)=>{
    if(res<el) return res;
    else return el;
});
console.log(min); 

let newArr=[...arr];//copy of Arr
console.log(newArr);
let nums1=[...arr,...arr2];
console.log(nums1);

//object using spread

const data={
    email: "subrata@gmail.com",
    password:"123456",
};

const datacopy={...data,id:"123",country:"India"};


function sum3(...arg){
    return arg.reduce((sum,el)=>sum+el);
};

function amni(msg,...arg){
    console.log(msg);
    return arg.reduce((min,el)=>{
        if(min>el) return el;
        else min;
    });
};


let names=["subrata","surjo","samrat","ayan","Arijit"];
let [winner,runnerup,...others]=names;
console.log(winner,runnerup,others);

const Student={
    name:"Subrata",
    age:20,
    eng:95,
    phy:97,
    math:95,
    subjects: ["hindi","english","math","science"],
    username:"Subrata",
    password:"123456",
}
 
let {username,password}=Student;
console.log(username, password);

let {username:user,password:pass}=Student;
console.log(user,pass);
