import React from 'react';
import './style.css'
import {Link} from 'react-router-dom'

/**
* @author
* @function Header
**/

const Header = (props) => {

  return(
    <div className='container-head'>
        <i><h1 className='green'>CMIS</h1></i>
        <h1>WEB REPORTS</h1>
        <ul style={{"margin-left": "-450px"}}>
            <Link to='/Home' style={{'padding-right': '20px'}}> 
                <li><i id='icon-home' className="pi pi-home" style={{'fontSize': '1.5em', 'color':'white'}} /></li>
            </Link>
            <Link to='/Logout'> 
                <li><i id='icon-home' className="pi pi-sign-out" style={{'fontSize': '1.5em', 'color':'white'}}/></li>
            </Link>            
        </ul>
    </div>
   )

 }

export default Header