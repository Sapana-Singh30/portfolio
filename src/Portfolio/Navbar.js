import './Navbar.css';
import React, { useState } from 'react';
import { AiOutlineMenu }  from 'react-icons/ai';
import { FaUserGraduate } from 'react-icons/fa';


const Navbar = () => {

const [navLinkOpen, navLinkToggle] = useState(false);

    const handleNavLinksToggle = () => {
        navLinkToggle(!navLinkOpen);

    };

    const renderClasses = () => {
        let classes="navlinks";

        if(navLinkOpen){    
            classes ='active';
            }
            return classes;
    }


    return (
<nav>


<div className='logo'>
    < FaUserGraduate />
</div>
<ul className={renderClasses()} id="xyz" >

    <li className='link'><a href="#Home">Home</a></li>
    <li className="link"><a href="#About">AboutMe</a></li>
    <li className="link"><a href="#Skills">MySkills</a></li>
    <li className="link"><a href="#Journey">Journey</a></li>
    <li className="link"><a href="#Project">Projects</a></li>
    <li className="link"><a href="#Contact">ContactMe</a></li>


</ul>
<div onClick={handleNavLinksToggle} className='hamburger-toggle'>
    
       < AiOutlineMenu />
</div>



</nav>
        

    );
}

export default Navbar;


/*<i className='fas fa-bars fa-lg'></i>*/

/*<nav>


            <div className='logo'>
                
            </div>
            <ul className={renderClasses()} id="xyz" >

                <li className='link'><a href="#Home">Home</a></li>
                <li className="link"><a href="#About">AboutMe</a></li>
                <li className="link"><a href="#Skills">MySkills</a></li>
                <li className="link"><a href="#Journey">Journey</a></li>
                <li className="link"><a href="#Project">Projects</a></li>
                <li className="link"><a href="#Contact">ContactMe</a></li>


            </ul>
            <div onClick={handleNavLinksToggle} className='hamburger-toggle'>
                
                   < AiOutlineMenu />
            </div>



        </nav>*/
