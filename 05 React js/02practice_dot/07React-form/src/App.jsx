import { useState } from 'react'
import './App.css'

function App() {
  const[formData,setformData]=useState({
    firstname:"",
    lastname:"",
    email:"",
    comments:"",
    checkbox:false,
    mode:"",
    favcar:""
  })
  function changehandler(event){
      const{name,value,type,checked}=event.target
      setformData((prevdata)=>{
        // prevdata[event.target.name]=event.target.value;
        console.log(prevdata);
        return {...prevdata,[name]: type==="checkbox"? checked : value};
      })
  } 
  function submitHandle(event){
    event.preventDefault()
    console.log(formData);
  }
  return (
    <>
     <form onSubmit={submitHandle}>
      <input
        type='text'
        placeholder='First Name'
        name='firstname'
        value={formData.firstname}
        onChange={changehandler}
      />
      <br/>
      <br/>
      <input
        type='text'
        placeholder='Last Name'
        name='lastname'
        value={formData.lastname}
        onChange={changehandler}
      />
      <br/>
      <br/>
      <input
        type='email'
        placeholder='Enter your mail'
        name='email'
        value={formData.email} 
        onChange={changehandler}
      />
      <br/>
      <br/>
      <textarea
      placeholder='Enter your Comment here...'
      onChange={changehandler}
      name='comments'
      value={formData.comments}
      />
      <br/>
      <br/>
      <label htmlFor='check'>i am checked</label>
      <input
        id='check'
        type='checkbox'
        name='checkbox'
        checked={formData.checkbox} 
        onChange={changehandler}
      />
      <br/>
      <br/>
      <fieldset>
        <legend>Mode</legend>
          <input
          id='online-mode'
          type='radio'
          name='mode'
          value="online-mode"
          checked={formData.mode==="online-mode"} 
          onChange={changehandler}
        />
        <label htmlFor='online-mode'>online mode</label>

        <input
          id='offline-mode'
          type='radio'
          name='mode'
          value="offline-mode"
          checked={formData.mode==="offline-mode"} 
          onChange={changehandler}
        />
        <label htmlFor='offline-mode'>offline mode</label>

      </fieldset>
      <label htmlFor='favcar'>Tell me your favourate car : </label>
      <select
        onChange={changehandler}
        name='favcar'
        id='favcar'
        value={formData.favcar}
      >
        <option value="scarpio">scarpio</option>
        <option value="fartuner">fartuner</option>
        <option value="Thar">Thar</option>
        <option value="Defender">Defender</option>
        <option value="ode">ode</option>
      </select>
      <br/>
      <br/>
      <button>Submit</button>
     </form>
    </>
  )
}

export default App
