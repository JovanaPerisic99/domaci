import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import '../App.css';

const Header = () => {
  return (
    <div className='navbar'>
        <Link to="/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoFiiA4om9zqQpItJVE0GKarIASiGQEPoDp3w9VCVw-eumQVscMOpPvLic8_OYU_a8Ts&usqp=CAU" alt="blogIcon" /> </Link>
        <Button href="/add" variant="primary"> Add post </Button>
    </div>
  )
}

export default Header