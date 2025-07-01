import Products from './Products'
import NewProduct from './NewProduct'
import './App.css'
import { useState } from 'react';

function App() {
 
  const [product,setproduct]=useState([
    {
      title: 'Nirma',
      date: new Date(2021, 8, 10),
    },
    {  
      title: 'Sirf Excel', 
      date: new Date(2021, 2, 2) },
    {
      title: 'Tide',
      date: new Date(2021, 12, 28),
    },
    {
      title: 'Maggi',
      date: new Date(2021, 5, 5),
    },
  ]);
  
  
  function printProductData(data) {

    console.log("i am inside APP.js")
    console.log(data)
    setproduct([...product,data])
  }
  
  return (
    <>
       <NewProduct pranay = {printProductData} />
       <Products items={product} />
    </>
  )
}

export default App
