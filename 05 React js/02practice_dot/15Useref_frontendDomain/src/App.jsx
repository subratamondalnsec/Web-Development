import { useRef, useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form';

function App() {
  const name = useRef(null);
  const age = useRef(null);

  const [formData,setformData]=useState({
    name:"",
    age: "", 
  })

  const {register,handleSubmit}=useForm();


  const handleSubmitfrom=(event)=>{
    event.preventDefault();
    console.log(formData);
    setformData(
      {
        name:"",
        age: ""
      }
    )
  }

  const changehandeler=(event)=>{
    const{name,type,value,checked}=event.target;
    setformData((previous)=>{
      console.log(previous);
      return {...previous,[name] : type==="Checked" ? checked : value  }
    })
  }

  const handlesubmit=(event)=>{
      event.preventDefault();
      console.log(name.current.value,age.current.value);
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input ref={name} type='text' placeholder='Enter Anything '/>
        <input ref={age} type='number' placeholder='Enter our age '/>
        <input type='Submit'/>
      </form>
      <br/>
      <form onSubmit={handleSubmitfrom}>
        <input type='text' name='name' onChange={changehandeler} value={formData.name} placeholder='Enter Anything '/>
        <input  type='number' name='age' onChange={changehandeler} value={formData.age} placeholder='Enter our age '/>
        <button type='Submit'>Submit</button>
      </form>
      <br/>
      <form onSubmit={handleSubmit(data=>console.log(data))}>
        <input {...register('name')} type='text'  placeholder='Enter Anything '/>
        <input {...register('age')} type='number' placeholder='Enter our age '/>
        <button type='Submit'>Submit</button>
      </form>
    </>
  )
}

export default App
