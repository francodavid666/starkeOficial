import React,{useState,useEffect}from 'react';

//importamoas el header
import { header } from '../data';

//importamos los componentes
import { NavMobile } from './NavMobile';
import {Nav} from './Nav';


//importamos iconos
import {RiMenu4Fill, RiCloseFill} from 'react-icons/ri'

//importamos logo starke
import logoStarke from '../assets/img/starke/logo.png'

const Header = () => {
  //estado del header
  const[isActive, setIsActive] = useState(false);

  //nav mobile estado
  const[navMobile,setNavMobile] = useState(false);

  //scroll event
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY > 80 ? setIsActive(true): setIsActive(false);
    })
  })

  //destructuramos los datoa del header
  {/*const {btnLoginText,btnSignupText} = header;*/}
  

  
  return (
    <header className={`${isActive ?'bg-neutral-500 py-[16px]':'bg-transparent py-[20px]'} fixed max-w-[1440px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}>
      {/*logo */}
    <a href="/">
      <img className='h-[60px]' src={logoStarke} alt="" />
      </a>
      {/*nav initially hidden - show on desktop*/}
      <Nav/>
      {/**btns - initially hidden -show on desktop */}
      {/*<div className='hidden lg:flex space-x-4'>
        <button className='btn btn-sm text-white hover:text-red-500 transition' >{btnLoginText}</button>
        <button className='btn btn-sm bg-red-500' >{btnSignupText}</button>
      </div>*/}
      {/*nav menu btn - hide on */}
    <div onClick={()=>setNavMobile(!navMobile)} className='lg:hidden absolute right-4'>
      {console.log(navMobile)}


      {navMobile 
      ?<RiCloseFill className='text-red-500 text-3xl cursor-pointer'/>
      :<RiMenu4Fill className='text-red-500 text-3xl cursor-pointer'/>}


    </div>


    {/*nav  mobile - hide on desktop */}
   <NavMobile navMobile={navMobile}/>
    </header>
  )



};

export default Header;
