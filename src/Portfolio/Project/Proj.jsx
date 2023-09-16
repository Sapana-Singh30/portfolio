import React from 'react'
import "./Proj.css"
import Header from '../Header/Header'
import Annapurna from '../pics/Annapurna.PNG';
import portfolio from '../pics/portfolio.png';
import wtthhr from '../pics/wtthhr.jpeg';
import ch from '../pics/ch.jpeg';
import Prjctprp from './Prjctprp';


const Proj = () => {
  return (
    <div className='proj'>
      <div className="proj_header">
        <Header title="Project" qs="Which I made" />
      </div>
      <div className="proj_cards">
      < Prjctprp titl="Annapurna: Tiffin service" imgg={Annapurna} />
      < Prjctprp titl="My Portfolio App" imgg={portfolio} />
      < Prjctprp titl="Chatbot Application" imgg={ch} />
      < Prjctprp titl="Weather Report App" imgg={wtthhr} />
    </div>
    </div>
  )
}

export default Proj