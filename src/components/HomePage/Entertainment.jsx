import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Entertainment = () => {
  const [cat, setCat] = useState(localStorage.getItem('categories').split(','))
  const navigate = useNavigate();
  const handleToggle = (e) => {
    e.preventDefault();
    navigate('/');
  }
  return (
    <div className='entertainment_container'>
       <div className='nav'>
        <p className='logo_text'>Super App</p>
      <div className="profile_logo" onClick={(e)=> handleToggle(e)}></div>
      </div>
      <div className="inner_e_container">
       <p className="e_title"> Entertainment according to your choice </p>
      { cat ? cat.map((elem,idx)=> <div className="movies_e_categories" key={idx}> </div>): ''}
        </div>
    </div>
  )
}

export default Entertainment