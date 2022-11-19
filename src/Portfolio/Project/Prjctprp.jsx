import React from 'react';
import './Prjctprp.css';
import '../Button/FilledButton.css';



const Prjctprp = (props) => {
return(
<div className='prjctprp'>
<div className='prjctimg'>

<img src = {props.imgg} alt=" " />

</div>

<div className='prjctcntnt'>
<h3>{props.titl}</h3>
<a href= ' '>
<button className='transbtn'>Github Code</button>
</a>
<a href= ' '>
<button className='fldbtn'>View Demo</button>
</a>
</div>

</div>
);
}


export default Prjctprp;