import React from 'react';

// importamos la imagen
import Image from "../assets/avatar.svg"
// importamos  los iconos que vamos a usar
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa"
// importamos los tipos de animacion
import { TypeAnimation } from 'react-type-animation';
// importamos motion
import { motion } from 'framer-motion';
// importamos variantes
import { fadeIn } from "../variants"


const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* aca va el texto */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold  leading-[0.8] lg:text-[110px]'>
              EZE <span>LESCANO</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]' >
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
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0' >
              <button className='btn btn-lg'>Contactame</button>
              <a href='#' className='text-gradient btn-link'>
                Mi Portfolio
              </a>
            </motion.div>
            {/* redes sociales */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <FaLinkedin />
              </a>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          {/* aca va la imagen */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={"show"}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
