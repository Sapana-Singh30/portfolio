import './Skills.css';
import React from 'react';
import Skl from './skl';
import Header from '../Header/Header';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { FaReact, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiVisualstudiocode } from 'react-icons/si';




const Skills = (props) => {
    let ht = < AiFillHtml5 />
    let cs = < IoLogoCss3 />
    let js = < IoLogoJavascript />
    let mongo = < SiMongodb />
    let express = < SiExpress />
    let rct = < FaReact />
    let node = < FaNodeJs />
    let vs = < SiVisualstudiocode />
    let gt = < FaGithub />

    return (
        <div className='skl' id='Skills'>

            <div className='skill-header'>
                <Header title="Skills" qs="My Strength" />
            </div>

            <div className='skil'>

                <Skl id="skil_ico" className="skil_icon" title="HTML" li={ht} />
                <Skl className="skil_icon" title="Javascript" li={js} />
                <Skl className="skil_icon" title="CSS" li={cs} />
                <Skl className="skil_icon" title="ReactJs" li={rct} />
                <Skl className="skil_icon" title="NodeJs" li={node} />
                <Skl className="skil_icon" title="ExpressJs" li={express} />
                <Skl className="skil_icon" title="VisualStudio" li={vs} />
                <Skl className="skil_icon" title="MongoDB" li={mongo} />
                <Skl className="skil_icon" title="Github" li={gt} />



            </div>
        </div>
    );
}

export default Skills;

