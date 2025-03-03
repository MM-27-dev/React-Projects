import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Card from './components/card';

function App() {

  let myObj = {
    name : "Monika",
    age: 23,
    address : {
      city: "Bangalore",
      state : "karnataka",
      country : "India"
    }
  }

  let newArr = [1,2,3,4]
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Hello, Tailwind CSS!
      </h1>
      <Card userName="Monika" post= "Hiii..."/>
      <Card post= "Good Morning!!" myArr = {[1,2,3]} />
      <Card post= "Good Morning!!" myArr= {newArr} />
      <Card post= "Good Morning!!"  myObj = {myObj}/>
      <Card post= "Good Morning!!" />
    </>
  );
}

export default App
