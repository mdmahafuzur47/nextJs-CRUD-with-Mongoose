'use client'
import React, { useState } from 'react'
import {useRouter} from "next/navigation"

const UpdateNote = ({id, title,desc}) => {
  const router = useRouter();
  // console.log(id,title,desc)
    const [newtitle, setNewtitle] = useState(title);
    const [newdesc, setNewdesc] = useState(desc);
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try {
          const res = await fetch(`http://localhost:3000/api/notes/${id}`,{
            method: 'PUT',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({newtitle,newdesc})
          })
          if(!res.ok){
            throw new Error("Failed to Update notes");
          }
          router.refresh();
          router.push('/');
        } catch (error) {
          console.log(error);
        }
    }
  return (
    <form onSubmit={handleSubmit} className="flex my-8 flex-col gap-3">
      <input
        onChange={(e) => setNewtitle(e.target.value)}
        value={newtitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setNewdesc(e.target.value)}
        value={newdesc}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Update Note
      </button>
    </form>
  )
}

export default UpdateNote