import React from 'react';

// importamos el logo
import Logo from "../assets/logo.svg"

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
            {/* aca va el boton */}
            <button className='btn btn-sm'>Trabaja Conmigo</button>
        </div>
      </div>
    </header>
  )
};

export default Header;
