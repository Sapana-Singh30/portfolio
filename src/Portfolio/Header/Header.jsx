import './Header.css';
import React from 'react';

const Header = (props) => {
return(
<div className='header'>
<h1>{props.title}</h1>
            <h4>{props.qs}</h4>
            <hr />
            <span><hr /></span>

</div>

);


}

export default Header;