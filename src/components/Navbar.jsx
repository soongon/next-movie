import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex bg-amber-100 p-4 text-lg justify-center gap-7 my-3'>
        <NavbarItem title='Now Playing' param='now_playing' />
        <NavbarItem title='Top Rated' param='top_rated' />
    </div>
  )
}
