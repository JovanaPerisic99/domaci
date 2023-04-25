
import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <Link to={`/post/${props.id}`} className="card-cont">
        <img src={props.url} className="card-img-top" alt={props.title} />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-author">{props.author}</p>
        </div>
    </Link>
  )
}

export default Card