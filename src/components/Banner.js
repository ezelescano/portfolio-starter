import React from 'react';

// importamos la imagen
import Image from "../assets/avatar.svg"
// importamos  los iconos que vamos a usar
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa"
// importamos los tipos de animacion
import { TypeAnimation } from 'react-type-animation';
// importamos motion
import { motion } from 'framer-motion';
// importamos variantes
import { fadeIn } from "../variants"


const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className='container mx-auto'>
        <div>
          {/* aca va el texto */}
          <div>
            <h1>
              EZE <span>LESCANO</span>
            </h1>
            <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]' >
              <span className='text-white mr-4'>Yo soy</span>
              <TypeAnimation
                sequence={[
                  "Full",
                  2000,
                  "Stack",
                  2000,
                  "Developer",
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            </p>
            <div>
              <button className='btn btn-lg'>Contactame</button>
              <a href='#' className='text-gradient btn-link'>
                Mi Portfolio
              </a>
            </div>
            {/* redes sociales */}
            <div>
                <a href='#'>
                  <FaYoutube/>
                </a>
                <a href='#'>
                  <FaGithub/>
                </a>
                <a href='#'>
                  <FaDribbble/>
                </a>
            </div>
          </div>
          {/* aca va la imagen */}
          <div>
            <img src={Image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
