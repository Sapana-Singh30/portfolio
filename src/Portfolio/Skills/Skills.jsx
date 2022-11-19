import './Skills.css';
import React from 'react';
import Skl from './skl';
import Header from '../Header/Header';
import { AiFillHtml5 }  from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript}  from 'react-icons/io';
import { FaJava, FaReact , FaGithub}  from 'react-icons/fa';
import { SiMysql , SiMicrosoftazure , SiVisualstudiocode }  from 'react-icons/si';



const Skills = (props) => {
let ht = < AiFillHtml5 />
let cs = < IoLogoCss3 />
let js = < IoLogoJavascript />
let ja = < FaJava />
let sq = < SiMysql />
let rct = < FaReact />
let az = < SiMicrosoftazure />
let vs = < SiVisualstudiocode />
let gt = < FaGithub />

return (
<div className='skl' id='Skills'>

                <div className='skill-header'>
                    <Header title="Skills" qs="My Strength" />
                    </div> 

<div className='skil'>

    <Skl title="HTML" li={ht} />
    <Skl title="Javascript" li={js} />
    <Skl title="CSS" li={cs} /> 
    <Skl title="ReactJs" li={rct} />
    <Skl title="Azure" li={az} />
    <Skl title="Java" li={ja} />
    <Skl title="VisualStudio" li={vs} />
    <Skl title="SQL" li={sq} />
    <Skl title="Github" li={gt} />
   
    
    
</div>
</div>
);
}

export default Skills;

/* <Skills /> */

/*<div className='sklcntnt'></div> */