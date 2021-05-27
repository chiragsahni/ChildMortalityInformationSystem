import React, { Component } from 'react'
import { Button } from 'primereact/button';

import child_data from '../../data/child_1_4_3.json'

export default class IndexComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            _country : this.props.pcountry,
            _type : this.props.ptype,
            _group : this.props.pgroup,
            _p_mortality_val : Object.entries(child_data.Deaths),
            _hue : [],
            _xcoordinate : [],
            _ycoordinate : [],
            
        }
        this.helpergetxyarray = this.helpergetxyarray.bind(this);
    }
    // async componentDidMount(){
    //     const request_ = {
    //         country : this.state._country,
    //         type : this.state._type,
    //         group : this.state._group,
    //     }
    //     axios.post('http://localhost:4000/api/getDetails', request_)
    //     .then(response => this.setState({ _response: response.data }))
    //     .catch(error => {
    //         console.error('There was an error!', error);
    //     });

    // }

    helpergetxyarray(e){
        // alert(this.state._country );
        e.preventDefault();
        var __xcoordinate = []; var __ycoordinate = []; var __hue = [];
        var country = '';
        
       
        
        if(this.state._p_mortality_val.length === 0 || this.state._country === "") return;

        this.state._p_mortality_val.forEach(element => {       
            country = element[0].split(",")[0].trim().slice(2,-1);
            // alert(country);

            if(country === this.state._country){
                // __hue.push(element[0].split(",")[2].trim().slice(1,-1));
                // __xcoordinate.push(element[0].split(",")[1].trim());
                __ycoordinate.push(element[1]);
            }
        });
        

        this.setState({_xcoordinate:__xcoordinate,_ycoordinate:__ycoordinate, _hue:__hue});
    }
    


    render() {
        var {_xcoordinate, _ycoordinate, _hue} = this.state;
        return(
           
            <div className="container">
                <div className="submit">
                    <Button label="Generate Graph" className="p-button-raised p-button-text" onClick={this.helpergetxyarray} />
                </div>
                {_xcoordinate}
                {_ycoordinate}
                {_hue}
            </div>
        )
        
    }
}
