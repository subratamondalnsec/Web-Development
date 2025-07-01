import React, { useState, useMemo, useCallback, useEffect } from "react";
import StopWatch from "./StopWatch";
import './App.css'

// useMemo hook
// 1: Counter button: increase
// 2: Input field: Fibonnaci number
// 0 1 1 2 3 5 8 13 21 34
// Recursive Code: Time Complexit 2^n

function App() {
  const [count, setCount] = useState(0);
  const [Number, setNumber] = useState(null);
   // const [result,setResult] = useState(null);
  // counter

  function Fibonacci(n){
    if(n<=1) return n;
    return Fibonacci(n-1) + Fibonacci(n-2);
  }
  const result = useMemo(()=>Fibonacci(Number),[Number]);

  // useEffect(()=>{
  //   setResult(Fibbonnaci(number));
  // },[number]);


  
  // const Fibonacci=useCallback((n)=>{
  //   if(n<=1) return n;
  //   return Fibonacci(n-1) + Fibonacci(n-2);
  // },
  // []);

  return (
   <>
  <div className='flex flex-col h-screen w-full items-center justify-center'>
    <div className='flex items-center'>
      <button
        className='p-5 m-2 bg-blue-500 text-white cursor-pointer'
        onClick={() => setCount((count) => count + 1)}
      >
        Increment
      </button>

      <h1 className='m-2 text-xl'>count = {count}</h1>

      <button
        className='p-5 m-2 bg-red-600 text-white cursor-pointer'
        onClick={() => setCount((count) => count - 1)}
      >
        Decrement
      </button>
    </div>

    <div className='text-center mt-4'>
      <label htmlFor='fibInput' className='block mb-2 text-lg font-medium'>
        Enter the number
      </label>
      <input
        value={Number}
        type='number'
        id='fibInput'
        className='border p-2 rounded'
        onChange={(e)=>setNumber(e.target.value)}
      />
      <h1 className='mt-2 text-lg'>
        This Number Fibonacci number is: {result}
      </h1>
    </div>
    <StopWatch/>
  </div>
</>

  )
}

export default App
