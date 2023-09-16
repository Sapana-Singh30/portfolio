import React from 'react';
import './Footer.css';
import {FaTwitterSquare , FaInstagramSquare } from 'react-icons/fa';
import {AiFillLinkedin } from 'react-icons/ai';

const Footer = () =>{
return(


<div className='footer' id="Footer">

<a href=" " className='footer_logo'>Dreamer</a>



<ul className='footrlink'>
<li className='ftr'><a href="#Home">Home</a></li>
<li className="ftr"><a href="#About">AboutMe</a></li>
<li className="ftr"><a href="#Skills">MySkills</a></li>
<li className="ftr"><a href="#Journey">Journey</a></li>
<li className="ftr"><a href="#Project">Projects</a></li>
<li className="ftr"><a href="#Contact">ContactMe</a></li>
</ul>


<div className='footer_social'>
<a href='https://www.linkedin.com/in/sapana-singh30/'>< AiFillLinkedin /></a>
<a href='https://www.instagram.com/_rajput_sapna30/'>< FaInstagramSquare /></a>
<a href='https://twitter.com/@SapanaS50008387'>< FaTwitterSquare /></a>

</div>

<div className='footer_copyright'>
<small>&copy; Dreamer. All rights reserved.</small>

</div>

</div>




);


}


export default Footer;