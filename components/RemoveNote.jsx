'use client'
import React from 'react'
import { FiDelete } from "react-icons/fi";
import {useRouter} from "next/navigation";
const RemoveNote = ({id}) => {
    const router = useRouter();
const handleRemoveNote = async() =>{
    const confirmed = confirm("Are Your Sure?");
    if(confirmed){
        // console.log(id);
        const res = await fetch(`http://localhost:3000/api/notes?id=${id}`,{
            method: "DELETE",
        })
        router.refresh();
    }else{
        console.log("Please confirm")
    }
}
  return (
    <span onClick={handleRemoveNote} className='text-blue-500'>
        <FiDelete size={24} />
    </span>
  )
}

export default RemoveNote