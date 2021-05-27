import React, {Component} from 'react'
import './style.css'
import{Link} from 'react-router-dom'


/**
* @author Mukesh Mohanty
* @function Cards
**/

class Cards extends Component{
    render(){
        const link_name = { pathname: '/Home/Reports/' + this.props.pname };
        const dname = this.props.dname;
        return(
            <div className='container' style={{'font-size': ".85em"}}>
                <div className='card'>
                    <div className='face face1'>
                        <div className='content'>
                            <h3>{dname}</h3>
                        </div>
                    </div>
                    <div className='face face2'>
                        <div className='content'>
                            <p className='p1'>{this.props.pdesc}</p>
                            <Link to={link_name} ><button className='button1'>Reports</button></Link>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default Cards