const Student ={
    name : "Subrata Mondal",
    age : 20,
    marks : 85,
    city : "kolkata"
};
const items={
    price: 99.99,
    discount: 50,
    colors: ["red","pink"],
};
const post={
    username : "@subrataMondal",
    content : "i winning my first hackathon",
    likes: 50,
    repost:["susovan","hritik"],
    tags :"co-ordinator",
};

//add/update 
Student.city="mumbai";//update 
Student.marks="A"
Student.gender="male";//add

delete Student.age;//age property delete

const classinfo={
    aman:{
        grade:"A+",
        city:"kolkata",
    },
    subrata:{
        grade:"AA",
        city:"kolkata",
    },
    hari:{
        grade:"A",
        city:"Burdhamman",
    },
};

console.log(classinfo.subrata.city);



const classinfo_array=[
    {
        grade:"A+",
        city:"kolkata",
    },
    {
        grade:"AA",
        city:"kolkata",
    },
    {
        grade:"A",
        city:"Burdhamman",
    },
];

console.log(classinfo_array[1].city);