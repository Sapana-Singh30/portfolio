import React from 'react';
import './strctr.css';



const Strctr = (props) => {


    return (
        <div className='jrnycntnt'>
            <div className='line'>
                <span>{props.ss}</span>
                <hr />
            </div>
            <div className='para'>
                <span></span>
                <h3>{props.hh}</h3>

                <p>
                    {props.gg1}
                </p>

                <p>{props.gg2}</p>
                <p>{props.gg3}</p>
            </div>


        </div>
    );
}

export default Strctr;