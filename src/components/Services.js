import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variantes
import { fadeIn } from '../variants'


// services data
const slides = [
  {
    name: 'Mauro Moyano',
    comentario: 'De compañeros a amigos! Porque es una gran persona, es muy empático y trabaja muy bien en quipo! Fue un gusto poder compartir con Eze el rol de TA y como compañero de estudio puedo decir que es super responsable ...',
    link: 'https://www.linkedin.com/in/mauro-moyano-dev-full-stack'
  },
  {
    name: 'Juan Daniel Gonzalez',
    comentario: 'Eze es una gran persona, tuve la oportunidad de ser compañero de el como TA y de conocerlo. Estoy seguro que seguirá dando lo mejor de el en todo momento y que es una integrante muy importante para cualquier equipo!',
    link: 'https://www.linkedin.com/in/gonzalezjuanr'
  },
  {
    name: 'Ricardo Ariel Maya',
    comentario: 'Sin lugar a dudas, Eze es una persona con la que es un placer trabajar. Tiene la habilidad de enfrentar desafíos sin temor y no duda en buscar apoyo cuando lo requiere. Se entrega completamente al equipo y comprende ...',
    link: 'https://www.linkedin.com/in/ricardomaya'
  }
];

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
            <h2 className='h2 text-accent mb-6'>EL TRABAJO EN EQUIPO!</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Como mencioné previamente, considero que el trabajo en equipo es esencial para alcanzar nuestros objetivos</h3>
            {/* <button className='btn btn-sm '>Mira mi trabajo</button> */}
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
              {slides.map((slide, index) => {
                const { name, comentario, link } = slide;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary text-gradient font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {comentario}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href={link} className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
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



