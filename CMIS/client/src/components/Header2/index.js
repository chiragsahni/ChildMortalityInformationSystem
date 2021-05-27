import React, { Component, Fragment } from 'react'
import './style.css'
import {Link} from 'react-router-dom'

import logo from '../../data/images/logo/rpi2.png'

/**
* @author
* @function Header
**/

export class Header2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             setLink: false,
             isModuleVisible: false,
        }
        this.items = [
            {label: 'Dashboard', icon: 'pi pi-fw pi-home',link:'/Home/Dashboard'},
            {label: 'Home', icon: 'pi pi-fw pi-home',link:'/Home'},
            {label: 'Tracking', icon: 'pi pi-fw pi-globe'},
            {label: 'Modules', icon: 'pi pi-fw pi-book'},
            {label: 'About', icon: 'pi pi-fw pi-question'},
            {label: 'Settings', icon: 'pi pi-fw pi-sliders-h'}
        ];
        this.openModuleTab = this.openModuleTab.bind(this);
    }
    openModuleTab(e){
        e.preventDefault();
        this.setState({isModuleVisible:"true"});
    }

    
    render() {
        
        return(
            <Fragment>
            <div className="header-card">
                        <div className="card-logo">
                        <a href="https://www.rpi.edu"> <img className='rpi-logo' src={logo} alt="Kiwi standing on oval" /></a>
                        </div>
                        <div className="card-name"><h2>CHILD <br/>MORTALITY <br/>INFORMATION SYSTEM</h2></div>
                                  
                <div className="card">
                    <ul className='homebar'>
                        <Link className='pi pi-desktop' to='/Home/Dashboard'>Dashboard</Link>
                        <Link className='pi pi-home' to='/Home'>Home</Link>
                        <Link className='pi pi-fw pi-globe' to='/Home/ChartDisplay'>Tracking</Link>
                        <Link className='pi pi-fw pi-book' onClick={this.openModuleTab}>Modules</Link>
                        <Link className='pi pi-fw pi-sliders-h' to='/Settigns'>Settings</Link>
                        <Link className='pi pi-fw pi-question' to='/AboutUs'>About</Link>
                    </ul>
                </div>
                        
                
            </div>
            {this.state.isModuleVisible ? 
            <div className='module-card'>
                <Link to='/Home/Reports/GDP'>GDP</Link>
                <Link to='/Home/Reports/LER'>Life Expectency Rate</Link>
                <Link to='/Home/Reports/HC'>Health Expenditure</Link>
                <Link to='/Home/Reports/FER'>Avg Female Education</Link>
                <Link to='/Home/Reports/ED'>Education Index</Link>
            </div> 
                
            : null}
            </Fragment>
           )
    }
}

export default Header2
