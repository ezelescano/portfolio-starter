import React from 'react';
// importamos countup
import CountUp from 'react-countup';
// importamos el hook useInview
import { useInView } from 'react-intersection-observer';
// importamos motion
import { motion } from 'framer-motion';
// importamos las variante
import { fadeIn } from "../variants"
import { Link } from 'react-scroll';


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
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
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
              Soy un desarrollador Full Stack con una sólida trayectoria de 11 años en el transporte público de pasajeros, desempeñando el rol de chofer de colectivo.
              Sin embargo, después de un extenso período en una profesión que ya no me desafiaba, tomé la decisión de cambiar de rumbo tras conversar con mi familia.
              Fue entonces cuando regresé a los estudios y me di cuenta de que nunca debí alejarme de la programación, una pasión que había cultivado desde mi adolescencia,
              cuando programaba en Pascal. Hoy me encuentro en constante desafío, explorando nuevas tecnologías, lenguajes y conceptos.
              Disfruto colaborar en equipos y motivar a mis compañeros a trabajar de manera conjunta. Mi objetivo es aportar mis conocimientos y creatividad
              para impulsar proyectos hacia el éxito. Estoy comprometido con mi crecimiento profesional en la industria de la tecnología y estoy ansioso por continuar
              aprendiendo y desarrollándome en este emocionante campo.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Años de <br />
                  Experiencia
                </div>
              </div>
              <div>
               <Link to='contact'> <button className='btn btn-lg'>Contáctame</button></Link>
                <a href='/CV_Eze_Actualizado.pdf' download='CV_Eze_Actualizado' className='text-gradient btn-link'>
                  Mi CV
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
