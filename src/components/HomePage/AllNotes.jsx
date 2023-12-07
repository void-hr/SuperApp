import React, { useState } from 'react'

const AllNotes = () => {
    const [notes,setNotes] = useState(localStorage.getItem('notes'));
   
 
    const handleNotes = (e) => {
        setNotes(e.target.value)
        localStorage.setItem('notes',notes)
    }
    return (
        <div className='allnotes'>
            <p className="notes_title">All Notes</p>
            <textarea className='notes_textarea' value={notes} onChange={(e)=> handleNotes(e)} />
        </div>
    )
}

export default AllNotes