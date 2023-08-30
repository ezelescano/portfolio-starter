import React from 'react';
// importamos countup
import CountUp from 'react-countup';
// importamos el hook useInview
import { useInView } from 'react-intersection-observer';
// importamos motion
import { motion } from 'framer-motion';
// importamos las variante
import { fadeIn } from "../variants"


const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.5
  });

  return (

    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* imagen */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          </motion.div>
          {/* texto */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>Sobre mi.</h2>
            <h3 className='h3 mb-4'>
              Soy Full Stack Developer, con 1 año de experiencia.
            </h3>
            <p className='mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Años de <br />
                  Experiencia
                </div>
              </div>
              <div>
                <button className='btn btn-lg'>Contáctame</button>
                <a href='#' className='text-gradient btn-link'>
                  Mi Portfolio
                </a>
              </div>
            </div>
        </motion.div>
      </div>
    </div>
    </section >
  );
};

export default About;
