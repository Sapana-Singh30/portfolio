import './Home.css';
import React from 'react';
/*import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillTwitterSquare } from 'react-icons/ai';*/
import TransparentButton from '../Portfolio/Button/TransparentButton';
import FilledButton from '../Portfolio/Button/FilledButton';
import cv from '../Portfolio/pics/Sapana_Resume.pdf';

const Home = () => {

    return (
        <div className='home' id="Home">
            <div className='cntnt'>
                <div className='socialmedia'>

                    <p>Hello, I am Sapana</p>
                    <span>Enthusiatic Fullstack Developer</span>
                </div>
                <div className='button'>
                   <a href="#Contact"><TransparentButton /></a>
                    <a href={cv} download><FilledButton /></a>
                </div>
            </div>
            <div className='profilepic'>
                <div className='profilepic-bcg'>

                </div>
            </div>
        </div>
    );

}

export default Home;




/*
  <a href=' '>
                        <AiFillFacebook />
                    </a>
                    <a href=' '>
                        <AiFillInstagram />
                    </a>
                    <a href=' '>
                        <AiFillYoutube />
                    </a>
                    <a href=' '>
                        <AiFillTwitterSquare />
                    </a>
*/