import React from 'react';
// importar motion
import { motion } from 'framer-motion';
// importar variantes
import { fadeIn } from '../variants';
// import imagenes
import img1 from '../assets/Marvel.svg'
import img2 from '../assets/Portfolio.svg'
import img3 from '../assets/urbanClub.svg'



const Work = () => {
  return (

    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* {texto} */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Mis <br />
                Trabajos
              </h2>
              <p className='max-w-sm nb-16'>
                Estos son hasta el momento los proyectos en los cuales participé. Las tecnologías usadas fueron HTML, CSS, Javascript, React, Redux, Express, PostgreSQL,
                Sequelize. Además de otros frameworks como Bootstrap, Tailwind, etc.
              </p>
            </div>
            {/* {imagen} */}
            <a href='https://proyecto-marvel-six.vercel.app/' target='_blank' rel="noreferrer">
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* {overlay} */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* {img} */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt='' />
              {/* {subtitulo} */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Proyecto Marvel</span>
              </div>
              {/* {titulo} */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text3xl text-white'>SPA hecho con HTML, CSS, Javascript, React, Express, Bootstrap</span>
              </div>
            </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            {/* {imagen} */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* {overlay} */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* {img} */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt='' />
              {/* {subtitulo} */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Portfolio Personal</span>
              </div>
              {/* {titulo} */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text3xl text-white'>Landing hecho con React, HTML, CSS, Tailwind, Javascript</span>
              </div>
            </div>
           <a href='https://www.urbanclub.club/' target='_blank' rel="noreferrer">
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* {overlay} */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* {img} */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt='' />
              {/* {subtitulo} */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UrbanClub</span>
              </div>
              {/* {titulo} */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text3xl text-white'>Proyecto Final hecho para Henry Bootcamp</span>
              </div>
            </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>

  );
};

export default Work;
