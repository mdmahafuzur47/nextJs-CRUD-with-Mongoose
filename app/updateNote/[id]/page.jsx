import UpdateNote from '@/components/EditNote';
import React from 'react'

async function getSingleNote(id){
    const res = await fetch(`http://localhost:3000/api/notes/${id}`)

    if(!res.ok){
        throw new Error("Failed to get single note");
    }
    return res.json();
}

const Update = async({params}) => {
    // console.log(params)
    const id = params.id;
    const {note} = await getSingleNote(id);
    console.log(note);
  return (
    <div><UpdateNote title={note.title} desc={note.desc} id={note._id} /></div>
  )
}

export default Update
