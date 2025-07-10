const express=require("express");
const app= express();


const BookStore = [
    {id:1,name:"Harry Potter", author:"DevFlux"},
    {id:2, name:"Friends", author: "Vikas"},
    {id:3 , name:"Nexus", author:"Rohit"},
    {id:4 , name:"DSA", author:"Maharaj"},
    {id:5, name:"Prem Kahani", author:"Rohan"}
]

app.use(express.json());

app.get("/book",(req,res)=>{
    res.send(BookStore);
    console.log("Data send you");
})


app.get("/book/:id",(req,res)=>{
    const Bookid = parseInt(req.params.id);
    const Book=BookStore.filter((Item)=>Item.id===Bookid);
    res.send(Book);
    console.log("Book Data send you");
})


app.post("/book",(req,res)=>{
    BookStore.push(req.body);
    res.send("Data Load Successful");
})

app.patch("/book",(req,res)=>{
    const Bookid=req.body.id;
    console.log(Bookid);
     const Book=BookStore.find((Item)=>Item.id===Bookid);
    if(req.body.name) Book.name= req.body.name;
    if(req.body.author) Book.name= req.body.author;
    console.log(Book);
    res.send("Data Update Successful");
});

app.put("/book",(req,res)=>{
     const Book=BookStore.find(Item=>Item.id===req.body.id);
     console.log(req.body);
     Book.name= req.body.name;
     Book.author= req.body.author;
     console.log(Book);
    res.send("Changes Updated Succesfully");
});

app.delete("/book/:id",(req,res)=>{
    const id = parseInt(req.params.id);
     const Bookid= BookStore.findIndex(info => info.id === id);
     BookStore.splice(Bookid,1);
     res.send("Delete Successful");
})


app.listen(4000,()=>{
    console.log("Listening at port 4000");
})