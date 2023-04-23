import React from 'react'

const Input = (props) => {

  const handleChange=(e)=>{
    e.preventDefault();
    props.setValue({...props.inputFields,[e.target.name]:e.target.value})
  }

  return (
    <div className='input-container'>
        <label htmlFor={props.label}>{props.label}</label>
        {
            props.type==="text"? (
                <input name={props.name} type={props.type} maxLength={props.maxLenght? props.maxLenght : 300 } value={props.value} onChange={(e)=>handleChange(e)}/>
            ):(
                <textarea name={props.name} maxLength={250} rows="3" cols="30" value={props.value} onChange={(e)=>handleChange(e)} />
            )
        }
    </div>
  )
}

export default Input