import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variantes
import { fadeIn } from '../variants'

// services data
const services = [
  {
    name: "Development",
    description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
    link: 'learn more'
  },
  {
    name: "UX/UI Desing",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
    link: 'learn more'
  },
  {
    name: "Digital Marketing",
    description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
    link: 'learn more'
  },
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* texto  e imagen*/}
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>Que es lo que hago?</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Soy Full Stack Developer, con 1 año de experiencia.</h3>
            <button className='btn btn-sm'>Mira mi trabajo</button>
          </motion.div>
          {/* servicios */}
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
            {/* lista de servicios */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);
};

export default Services;



