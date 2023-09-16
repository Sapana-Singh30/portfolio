import React from 'react';
import './About.css';
import '../Button/FilledButton.css';
import Header from '../Header/Header';

const About = () => {
    return (
        <div className='about' id="About">
            <div className='About-header'>
                <Header title="About Me" qs="Why choose me?" />
            </div>
            <div className='abt'>
                <div className='abt-pic'>
                    <div className='abt-pic-bcg'>

                    </div>
                </div>
                <div className='abt-cntnt'>
                    <h1>Hello,</h1>
                    <p>My Name is <span>Sapana Singh</span>,I belong from Sonebhadra,UP, INDIA.
                        I am a tech enthusiast who is always eager to learn more tech stuffs.
                        My core interest is to develop an effective and comprehensive solutions using my skills.
                        Currently I am working in TCS as a <span>Software Developer</span>.</p>
                    {/*<div className='abt-btn'>
    <a href=' '>
<div className='fldbtn'>Skills</div>
</a>
</div>*/}
                </div>
            </div>
        </div>
    );


}


export default About;

/*<h1>About Me</h1>
          <h4>Why choose me?</h4>
          <hr />
          <span><hr /></span>*/