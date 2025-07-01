import { useState } from "react";

function Form(){

    let [formData,setformData]=useState({
        fullName : "",
        Username:"",
        passWord:""
    });

    let handleInputChange=(event)=>{
        let fieldname=event.target.name;
        let newvalue=event.target.value;
        setformData((currData) =>{
            currData[fieldname]=newvalue;
            return{...currData};
        })
    }
    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
        setformData({
            fullName : "",
            Username:"",
            passWord:"",
        });
    }
    return(
        <form>
            <label htmlFor="fullname">Full Name </label>
            <input placeholder="Enter your Full Name" value={formData.fullName} onChange={handleInputChange} id="fullname" name="fullName" />
            <br/>
            <br/>
            <label htmlFor="username">Username </label>
            <input placeholder="Enter your Username" value={formData.Username} onChange={handleInputChange} id="username" name="Username" />
            <br/>
            <br/>
            <label htmlFor="password">Password </label>
            <input type="password" placeholder="Enter your Password" value={formData.passWord} onChange={handleInputChange} id="password" name="passWord" />
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}
export default Form;