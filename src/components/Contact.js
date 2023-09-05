import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// motion
import { motion } from 'framer-motion';
// importa variantes
import { fadeIn } from '../variants';



const Contact = () => {
  const [input, setInput] = useState({
    name:'',
    email:'',
    message:''
  });

  const handleInputChange = (event) => {
    setInput({
        ...input,
        [event.target.name]: event.target.value
    });
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hdmjhsk', 'template_c0k04dp', form.current, 'lcYEIa0RE6Us4TXug')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setInput({
      user_name:'',
      user_email:'',
      message:''
    })
  };

  return (
    <section className='section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* {texto} */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Contactame
              </h4>
              <h2 className='text-[45px] lg:text-[90px]  leading-none mb-12'>
                Trabajemos <br /> Juntos!
              </h2>
            </div>
          </motion.div>
          {/* {form} */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col  gap-6 pb-24 p-6 items-start'>
            <input className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all zesixe-none'
            value={input.user_name} onChange={handleInputChange} autoComplete='off' placeholder='Nombre' type='text' name='user_name' />
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
            value={input.user_email} onChange={handleInputChange} autoComplete='off' placeholder='Email' type='text' name='user_email'/>
            <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-12' 
            value={input.message} onChange={handleInputChange} autoComplete='off' placeholder='Mensaje' type='text' name='message'></textarea>
            <button className='btn btn-lg'>Enviar Mensaje</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
