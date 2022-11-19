import './Project.css';
import React from 'react';
import Prjctprp from './Prjctprp';
import ff from '../pics/ff.png';
import portfolio from '../pics/portfolio.png';
import wtthhr from '../pics/wtthhr.jpeg';
import ch from '../pics/ch.jpeg';
import Header from '../Header/Header';

const Project = () => {

    return (
       
        <div className='Project' id='Project'>
     

    <div classname="Project-header">
<Header title="Project" qs="Which I made" />
        </div>
        
            <div className='pjt'>
                < Prjctprp titl="Monitoring Task and tracking progress" imgg={ff} />
                < Prjctprp titl="My Portfolio App" imgg={portfolio} />
                < Prjctprp titl="Chatbot Application" imgg={ch} />
                < Prjctprp titl="Weather Report App" imgg={wtthhr} />

            </div>
        </div>
    );
}

export default Project;