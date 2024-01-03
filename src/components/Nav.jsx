import React from 'react'
import { Link } from 'react-scroll'

//import data
import { nav } from '../data'

export const Nav =()=> {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex text-white gap-x-8'>
      {nav.map((item,index)=>{
        return (
          <li key={index}>
            <Link className='hover:text-red-500 trasnsition' to={item.href} spy={true} smooth={true} offset={10}
            duration={500}  >{item.name}</Link>
        </li>
        )
        
      })}
      </ul>
    </nav>
  )
}
