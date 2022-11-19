import React from 'react';
import './Contact.css';
import Cntctbx from './Cntctbx';
import { MdEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Header from '../Header/Header';

const Contact = () => {

     const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_puiy1bt', 'template_97iilfl', form.current, 'zp325NQvGCeuVLjTM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    let mail = < MdEmail />
    let lnk = < BsLinkedin />
    let ins = < AiFillInstagram />
    const aa1 = (
        <a href='mailto:rktsapana@gmail.com '>
            Send a message
        </a>);
    const aa2 = (
        <a href='https://www.linkedin.com/in/sapana-kumari-singh-b476341bb'>
            get connected
        </a>);
    const aa3 = (
        <a href='https://www.instagram.com/_rajput_sapna30/'>
            follow now
        </a>
    );

    return (
        <div className='contact' id='Contact'>
            <div>
                <Header title="Contact Me" qs="By following mediums" />
            </div>
            <div className='both'>
                <div className='boxes'>
                    <Cntctbx
                        sin={lnk}
                        tl="Connect Me"
                        ln="Sapana Kumari Singh"
                        msg={aa2}

                    />
                    <Cntctbx
                        sin={ins}
                        tl="Follow Me"
                        ln="_rajput_sapna30"
                        msg={aa3}

                    />
                    <Cntctbx
                        sin={mail}
                        tl="Email Me"
                        ln="rktsapana@gmail.com"
                        msg={aa1}

                    />
                </div>

                <div className='forms'>
                    
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="name" placeholder="Your Full Name" required />
                            <input type="email" name="email" placeholder="Your  Email" required />
                            <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
                           
                        <button type='submit' className='fldbtn'>Send Message</button>

                        </form>
                  
                   

                </div>
            </div>
        </div>
    );
}


export default Contact;