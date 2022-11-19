import './Cntctbx.css';
import React from 'react';

const Cntctbx = (props) => {

return(
<div className='cntctbx'>
<span>{props.sin}</span>
<h3>{props.tl}</h3>
<h4>{props.ln}</h4>
<p>{props.msg}</p>


</div>
);
}



export default Cntctbx;