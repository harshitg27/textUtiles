import React, { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [mode , setMode] = useState('light') ;
  const [alert , setAlert] = useState(null) ;

  const showAlert = (message , type)=> {
    setAlert({
      msg : message ,
      type : type
    })
    setTimeout(()=> {
      setAlert(null) ;
    } , 1000) ;
  }


  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark') ;
      document.body.style.background = '#512B81' ;
      showAlert("Dark Mode Haas been Enabled", "success") ;
    }else {
      setMode('light') ;
      document.body.style.background = 'white' ;
      showAlert("Light Mode Haas been Enabled", "success") ;
    }
    
  }
  return (
    <div className="App">
      <Navbar title = 'TextUtiles' aboutText = 'About Us' mode = {mode} toggleMode = {toggleMode} />
      <Alert  alert ={alert} />
      <div className='container' >
        <TextForm heading = 'Enter the Text to Analyze' mode = {mode} />
      </div>
    </div>
  );
}

export default App;
