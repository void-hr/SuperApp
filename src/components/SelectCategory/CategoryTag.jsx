import React, { useEffect } from 'react'

const CategoryTag = ({category,setCategory, setCategoryError}) => {

  const handleTag = (e) => {
    const cat = e.target.parentNode.firstChild.innerText
    setCategory(prev => prev.filter(item=> item !== cat));

  }

  useEffect(()=> {
    if(category.length >= 3) {
      setCategoryError(false)
    }else {
      setCategoryError(true)
    }
  },[category,setCategoryError])
  
  return (
    <>  
      {category.map((elem,idx)=> {
    return  <div style={{background:'#148A08', 
      padding:'0px 22px', fontSize:'large',
       fontFamily:'Roboto',
        borderRadius:'30px', 
        display:'flex', 
        alignItems:'center',
         justifyContent:'center',
          gap:'12px' 
        }} key={idx}>
       <span>{elem}</span>
      <p style={{color: '#085C00', cursor:'pointer'}} onClick={(e) => handleTag(e)}>X</p></div>

    })}
  </>

  )
}

export default CategoryTag