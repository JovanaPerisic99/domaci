import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input'
import axios from 'axios';
import './AddPost.css'

const AddPost = () => {
  const [posts, setPosts] = useState([]);
  const btnRef = useRef(null);
  const navigate = useNavigate();

  const [inputFields, setInputFields] = useState({
    id:"0",
    title:"",
    author:"",
    url:"",
    content:""
  });

  useEffect(()=>{
    axios.get('https://jsonblob.com/api/jsonBlob/1099697245481353216')
          .then((response) => {
            if(response.data.length !== 0){
              setPosts(response.data);
              let newId = Number(response.data.slice(-1)[0].id) + 1;
              setInputFields(state=> ({...state, id: newId.toString()}))
            }
    });
  },[])

  useEffect(()=>{
    const isEmpty = Object.values(inputFields).some(x => x === "");
    if(isEmpty){
      btnRef.current.setAttribute('disabled', true);
    }else{
      btnRef.current.removeAttribute('disabled')
    }
  },[inputFields])

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data = [...posts, inputFields];
    axios.put('https://jsonblob.com/api/jsonBlob/1099697245481353216/', data, {
      'Content-Type': 'application/json'
    },);
    navigate('/');
  }

  return (
    <div className='addPost-page'>
      <div className='addPost-container'>
        <h1 style={{color:"darkblue"}}> Add new post </h1>
        <form className='form-container'>
          <Input label="Title" name="title" maxLength={20} type="text" value={inputFields.title} inputFields={inputFields} setValue={setInputFields} />
          <Input label="Image url" name="url" type="text" value={inputFields.url} inputFields={inputFields} setValue={setInputFields} />
          <Input label="Author" name="author" type="text" value={inputFields.author} inputFields={inputFields} setValue={setInputFields} />
          <Input label="Content"  name="content" type="textarea" value={inputFields.content} inputFields={inputFields} setValue={setInputFields}/>
          <button ref={btnRef} href="/addPost" variant="primary" type="submit" className='add-btn' onClick={(e)=>handleSubmit(e)}> Add post </button>
        </form>
      </div>
    </div>
  )
}

export default AddPost