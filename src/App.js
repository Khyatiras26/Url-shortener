import React, { useState } from 'react'
import './App.css'
import InputShortener from './InputShortener'
import BackgroundAnimate from './BackgroundAnimate'
import LinkResult from './LinkResult'

const App = () => {
  const[inputValue, setInputValue] = useState("");
  return (
    <div className="container">
        <InputShortener setInputValue = {setInputValue}/>
        <BackgroundAnimate/>
        <LinkResult inputValue = {inputValue}/>
    </div>
  )
}

export default App
