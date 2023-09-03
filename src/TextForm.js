import React, {useState} from 'react'



export default function TextForm(props) {
  const [text , setText] = useState('') ;
  const handleUpClick = ()=> {
    setText(text.toUpperCase()) ;
  }
  const handlelwClick = ()=> {
    setText(text.toLowerCase()) ;
  }
  const handleClearClick = ()=> {
    setText('') ;
  }
  const handleOnChange = (event)=> {
    setText(event.target.value) ;
  }
  
  return (
    <div>
        <div className="mb-3 , container">
          <h1>{props.heading}</h1>
            {/* <label forEach="MyBox" className="form-label">{props.heading}</label> */}
            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="10"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}> Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handlelwClick}> Convert to LowerCase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}> Clear</button>
        
        <div className='container'>
          <h2>Your Text Summary</h2>
          <p> {text.split(" ").length} Words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length } Minutes Takes to Read</p>
          <h4>Preview</h4>
          <p>{text}</p>
        </div>
    </div>
  )
}
