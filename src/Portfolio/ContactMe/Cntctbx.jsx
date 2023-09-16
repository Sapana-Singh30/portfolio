import './Cntctbx.css';
import React from 'react';

const Cntctbx = (props) => {

return(
<div className='cntctbx'>
<span>{props.sin}</span>
<p className="Contact_title">{props.tl}</p>
<p className="Contact_link">{props.ln}</p>
<p className="Contact_msg">{props.msg}</p>


</div>
);
}



export default Cntctbx;