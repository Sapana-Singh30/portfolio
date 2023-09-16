import './Navbar.css';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaUserGraduate } from 'react-icons/fa';


const Navbar = () => {

    const [click, setClick] = useState(false);
    const handlemenuClick = () => {
        console.log(click)
       
        if (click) {
            document.getElementsByClassName("mobile_navbar_container")[0].style.display = "none";
        }
        else {
            document.getElementsByClassName("mobile_navbar_container")[0].style.display = "flex";
        }

        setClick(!click);
    }


    return (
        <div className='navbar_container'>

            <div className='lappy_navbar'>
                <div className='logo'>
                    < FaUserGraduate />
                </div>
                <ul className='navbar' id="xyz" >

                    <li className='link'><a href="#Home">Home</a></li>
                    <li className="link"><a href="#About">AboutMe</a></li>
                    <li className="link"><a href="#Skills">MySkills</a></li>
                    <li className="link"><a href="#Journey">Journey</a></li>
                    <li className="link"><a href="#Project">Projects</a></li>
                    <li className="link"><a href="#Contact">ContactMe</a></li>


                </ul>
                <div className='hamburger-menu' onClick={handlemenuClick}>

                    < AiOutlineMenu />
                </div>

            </div>
            <div className='mobile_navbar_container'>
            <ul className="mobile_navbar" id="xyz" >

                <li className='link'><a href="#Home">Home</a></li>
                <li className="link"><a href="#About">AboutMe</a></li>
                <li className="link"><a href="#Skills">MySkills</a></li>
                <li className="link"><a href="#Journey">Journey</a></li>
                <li className="link"><a href="#Project">Projects</a></li>
                <li className="link"><a href="#Contact">ContactMe</a></li>

               
            </ul>
            </div>



        </div>


    );
}

export default Navbar;



