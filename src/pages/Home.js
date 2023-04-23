import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import './Home.css'
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    axios.get('https://jsonblob.com/api/jsonBlob/1099697245481353216')
        .then((response) => {
          //console.log(response.data);
          setPosts(response.data)
        });
  },[])

  return (
    <div className='home-page'>
      {posts.map((post)=>(<Card key={post.id} id={post.id} title={post.title} author={post.author} url={post.url} />))}
    </div>
  )
}

export default Home