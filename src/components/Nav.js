import React from 'react';
// se importan los iconos de la biblioteca react-icons/bi

import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from "react-icons/bs";

// se importa link de la biblioteca react-scroll

import { Link } from 'react-scroll';


const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>

      <div className='container mx-auto'>

        {/* nav inner/  nav interno */}

        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50'>

          <Link
            to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            {/* este le da el icono casa */}
            <BiHomeAlt />
          </Link >

          <Link
            to='about'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            {/* este le da el icono user */}
            <BiUser />
          </Link>

          <Link
            to='services'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            {/* este le da el icono carpeta de clip */}
            <BsClipboardData />
          </Link >

          <Link
            to='work'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            {/* este le da el icono portafolio */}
            <BsBriefcase />
          </Link>

          <Link
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            {/* este le da el icono portafolio */}
            <BsChatSquareText />
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Nav;
