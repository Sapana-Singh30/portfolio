import React from 'react';
import './skl.css';


const Skl = (props) =>{
return(
<div className='sklbox'>
<h2>{props.title}</h2>
<span>{props.li}</span> 
</div>


);
}

export default Skl;

/*<p>{props.li}</p> */