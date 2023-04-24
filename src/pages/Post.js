import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import './Post.css'

const Post = () => {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(()=>{
    axios.get(`https://jsonblob.com/api/jsonBlob/1099697245481353216/`)
        .then((response) => {
          const data = response.data.find((post)=> post.id===params.postId)
          setPost(data)
        });
  },[params.postId])

  if(post){
    return (
      <div className="post-cont">
          <div className='post-img-cont'>
            <img src={post.url} className='post-img' alt="random-pic" />
          </div>
          <div className="post-body">
              <h1 className="post-title">{post.title}</h1>
              <h5 className="post-author">{post.author}</h5>
              <p className="post-content">{post.content}</p>
          </div>
      </div>
    )
  }else{
    return (<div>
      <img className='loading-spinner' src="https://media.tenor.com/G7LfW0O5qb8AAAAC/loading-gif.gif" alt="Loading..."/>
    </div>)
  }
  
}

export default Post