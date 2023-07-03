import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
        <nav className='bg-slate-800 px-8 py-3 text-xl font-semibold flex justify-between items-center rounded-md'>
            <Link className='text-white' href="/">NotePade</Link>
            <Link className='bg-white p-2 rounded-md' href="/addNote">Add Note</Link>
        </nav>
  )
}

export default Navbar