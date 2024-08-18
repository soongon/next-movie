import Link from 'next/link'
import React from 'react'

export default function NavbarItem({title, param}) {
  return (
    <div>
        <Link
            className='hover:text-amber-500'
            href={`/?category=${param}`}>{title}</Link>
    </div>
  )
}
