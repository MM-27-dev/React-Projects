import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx';


const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com/maps",
    target: "_blank",
  },
  children: "Click me to vist google",
};

function MyApp(){
    return (
      <div>
        <h1>Custom app</h1>
      </div>
    );
}

const AnotherElement = (
    <a href="https://goggle.com"> Visit google</a>
)

const areacteElemnt = React.createElement(
    'a',
    {href : "https://google.com"},
    "Click to visit gogle"
)
createRoot(document.getElementById('root')).render(
 
    // <MyApp />
    // AnotherElement
    // areacteElemnt
    <App/>

)