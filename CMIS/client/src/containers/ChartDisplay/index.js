import React, { Component, Fragment } from 'react'
import './style.css'
import IndexComponent from '../IndexComponent'

import { Button } from 'primereact/button';
import Header2 from '../../components/Header2';

const countries = [
    {name: 'Afghanistan', code: 'AF'},
    {name: 'Brazil', code: 'BR'},
    {name: 'China', code: 'CN'},
    {name: 'Egypt', code: 'EG'},
    {name: 'France', code: 'FR'},
    {name: 'Germany', code: 'DE'},
    {name: 'India', code: 'IN'},
    {name: 'Japan', code: 'JP'},
    {name: 'Spain', code: 'ES'},
    {name: 'United States', code: 'US'},
    {name: 'None', code: 'NAN'}
];
const indextype = [
    {name: 'Gross Domestic Product (National)', code: 'GDP'},
    {name: 'HealthCare Expenditures (per capita)', code: 'HCE'},
    {name: 'Education Index (National)', code: 'EI'},
    {name: 'Number of Years Schooling (Female)', code: 'NYSF'},
    {name: 'Life Expectancy Rate', code: 'LER'},
    {name: 'None', code: 'NAN'}
];
const agegroup = [
    {name: '0 to 27 Days', code: 'DY'},
    {name: '1 to 59 Months', code: 'MN'},
    {name: '1 to 4 Years', code: 'YR'},
    {name: 'None', code: 'NAN'}
];

export default class ChartDisplay extends Component {


    constructor(props){
        super(props);
        this.state = {
            selectedCountry: "None",
            indexType: "None",
            ageGroup: "None",
            isSubmit: false,
            
        };
        this.handleonCountryChange = this.handleonCountryChange.bind(this);
        this.handleonTypeChange = this.handleonTypeChange.bind(this);
        this.handleonAgeGroupChange = this.handleonAgeGroupChange.bind(this);
        this.handleonSubmit = this.handleonSubmit.bind(this);

    
    }

    handleonCountryChange(e){
        e.preventDefault();
        this.setState({selectedCountry:e.target.value, isSubmit:false});
    }
    handleonTypeChange(e){
        e.preventDefault();
        this.setState({indexType:e.target.value, isSubmit:false});
    }
    handleonAgeGroupChange(e){
        e.preventDefault();
        this.setState({ageGroup:e.target.value, isSubmit:false});
    }

    handleonSubmit(e){
        e.preventDefault();
        var age_group_ = document.getElementById('age_dropdown').value;
        var type_dropdown_ = document.getElementById('type_dropdown').value;
        var country_dropdown_ = document.getElementById('country_dropdown').value;
        if(age_group_ === 'None' || type_dropdown_ ===  'None' || country_dropdown_ === 'None' ){ 
            alert("Please Select Dropdown values other than 'NONE'");
            this.setState({isSubmit:false});
            return;
        }
        
        this.setState({isSubmit:true});

        // Save the value in the variable and call respective modules.

    }

    
    render() {
        var {selectedCountry, indexType, ageGroup} = this.state;
        return ( 
        <Fragment>
        <Header2 />
        <div className = 'container' >
            <div className="header">
                <select id="country_dropdown" onChange={this.handleonCountryChange} value={this.state.selectedCountry}>
                    {
                        countries.map((option)=>{
                            // console.log(option.name);
                            return(<option key={option.code} value={option.name}>{option.name}</option>)
                        })
                    }
                </select>
                <select id="type_dropdown" onChange={this.handleonTypeChange} value={this.state.indexType}>
                    {
                        indextype.map((option)=>{
                            // console.log(option.name);
                            return(<option key={option.code} value={option.name}>{option.name}</option>)
                        })
                    }
                </select>
                <select id="age_dropdown" onChange={this.handleonAgeGroupChange} value={this.state.ageGroup}>
                    {
                        agegroup.map((option)=>{
                            // console.log(option.name);
                            return(<option key={option.code} value={option.name}>{option.name}</option>)
                        })
                    }
                </select>

                <div className="submit">
                    <Button label="Select Options" className="p-button-raised p-button-text" onClick={this.handleonSubmit} />
                </div>

            </div>
            <div className="graph">
                    {
                        this.state.isSubmit ? <IndexComponent pcountry={selectedCountry} ptype={indexType} pgroup={ageGroup}/> 
                        : <div className="error">
                            <h1>No Data Selected</h1>
                        </div>
                    }

            </div>

        </div>
        </Fragment>
        )
    }
}