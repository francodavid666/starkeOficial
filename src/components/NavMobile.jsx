import React from 'react';
import { Link } from 'react-scroll'

//import data

import { nav } from '../data';

export const NavMobile = ({navMobile}) => {
  return <nav
  className={`${navMobile ? 'min-h-screen': 'min-h-0'} lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}>

<ul className='w-full h-full flex flex-col justify-center items-center gap-y-8' >
  {nav.map((item,index)=>{
    return(
      <li key={index}>
        <Link  className='text-red-500 text-body-md' to={item.href} spy={true} smooth={true} offset={10}
            duration={500} >
        {item.name}
        </Link>
   
    </li>
    )
    
  })}
</ul>
{/**buttons */}
{/*<div className='-mt-44 flex justify-center gap-x-8 '> 
  <button className='btn btn-lg text-white'>Log in</button>
  <button className='btn btn-lg text-red-500' >Sing up</button>
</div>*/}

  </nav>;
};


