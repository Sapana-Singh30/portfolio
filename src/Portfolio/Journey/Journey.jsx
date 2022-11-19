import React from 'react';
import './Journey.css';
import Strctr from './strctr';
import { SiTata } from 'react-icons/si';
import { FaGraduationCap } from 'react-icons/fa';
import { BsBookFill , BsFillPenFill } from 'react-icons/bs';
import Header from '../Header/Header';


const Journey = () => {
let data = [
{
sign1: <SiTata />,
ttl1 : "Software Developer(AUG 2021-PRESENT)",
p11 : " ~ Currently working as Software Developer at TCS",
p21: "~ developing frontend using ReactJs ",
p31: "~ Also have handson on ServiceNow and Solarwinds"

},
{

sign2: <FaGraduationCap />,    
ttl2 : "Engineering(AUG 2017-AUG 2021)",
p12: " ~ From Raj Kumar Goel Institute of Technology,Ghaziabad",
p22 : "~ Graduated in Computer Science Engineering ",
p32: "~ Completed with aggr. of 82.0 %"

},

{
   sign3 : < BsBookFill />,
    ttl3 : "Intermediate(JUL 2017-JUL 2015)",
    p13 : " ~ From Aditya Birla Intermediate college, Renukoot",
    p23 : "~ Studied PCM with CS ",
    p33: "~ Qualified with 78.4 %"
    
    },

    {
        sign4: < BsFillPenFill/>,
        ttl4 : "High School(AUG 2014- JUL 2015)",
        p14 : " ~ From Aditya Birla Intermediate college, Renukoot",
        p24 : "~ Qualified with 82.63 %"
        
        
        }



];
return(
<div className='jrny' id='Journey'>

<div className='journey-header'>
<Header title="Journey" qs="Till now" />
</div>
<div>
    <Strctr ss={data[0].sign1} hh={data[0].ttl1}  gg1={data[0].p11} gg2={data[0].p21} gg3={data[0].p31}/>
    <Strctr ss={data[1].sign2} hh={data[1].ttl2}  gg1={data[1].p12} gg2={data[1].p22} gg3={data[1].p32}/>
    <Strctr ss={data[2].sign3} hh={data[2].ttl3}  gg1={data[2].p13} gg2={data[2].p23} gg3={data[2].p33}/>
    <Strctr ss={data[3].sign4} hh={data[3].ttl4}  gg1={data[3].p14} gg2={data[3].p24} gg3={data[3].p34}/>
</div>

</div>
);
}

export default Journey;