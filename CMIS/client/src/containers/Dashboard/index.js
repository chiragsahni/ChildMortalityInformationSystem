import React, { Component } from 'react'
// import Header from '../../components/Header'
import Header2 from '../../components/Header2'
import childimage1 from '../../data/images/child_img.jpg'
import childimage2 from '../../data/images/child_img2.jpg'

import './style.css'

import { ListBox } from 'primereact/listbox';


// const isUserLoggedIn = '';
export class Dashboard extends Component {


        constructor(props) {
            super(props)
        
            this.state = {
                selectedCountry: null,
                // isUserLoggedIn: false,
                 
            }
             this.countries = [
                {name: 'Australia', code: 'AU'},
                {name: 'Brazil', code: 'BR'},
                {name: 'China', code: 'CN'},
                {name: 'Egypt', code: 'EG'},
                {name: 'France', code: 'FR'},
                {name: 'Germany', code: 'DE'},
                {name: 'India', code: 'IN'},
                {name: 'Japan', code: 'JP'},
                {name: 'Spain', code: 'ES'},
                {name: 'United States', code: 'US'},
            ];
            
            this.setSelectedCountry = this.setSelectedCountry.bind(this);
            this.countryTemplate = this.countryTemplate.bind(this);
        }

        
        setSelectedCountry(event){
            event.preventDefault();
            this.setState({selectedCountry: event.value});

        }
        countryTemplate(option){
            // option.preventDefault();
            var flag_png = "http://www.geonames.org/flags/x/" + option.code.toLowerCase() + ".gif";
            return (
                <div className="country-item">
                    <img alt={option.name} src={flag_png} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} style={{'height':'45px','width':'60px'}} />
                    <div>{option.code}</div>
                </div>
            );
        }


    render() {

        return (
            <div>
                <Header2 />
                <div className="container">
                    <div className="defcontents">
                        <div className='defcard'>
                            <span>
                                <div className="imgcontent">
                                    <a href={unicef_link}><h2>UnderFive MORTALITY</h2></a>
                                    <img src={childimage1} alt="" style={{"height":"20vh", "width":"23vh"}}/>
                                </div>
                            </span>
                            <span className="defcardcontent">
                                <p>{underfive_content}.</p>
                            </span>
                        </div>
                        <div className='defcard'>
                            <span>
                                <div className="imgcontent">
                                    <a href={unicef_link}><h2>CHILD MORTALITY</h2></a>
                                    <img src={childimage2} alt="" style={{"height":"20vh", "width":"23vh"}}/>
                                </div>
                            </span>
                            <span className="defcardcontent">
                                <p>{child_content}</p>

                            </span>
                        </div>
                    </div>

                    <div className="dashcontainer">
                        <div className="sidebar">
                            <div className="cardcountrydata">
                                <div className="cardcountry">
                                    <div className="blkname">TOTAL DEATHS</div>
                                    <div className="deathcount">12,345</div>
                                </div>
                            </div>
                            <div className="cardcountrydata">
                                <div className="cardcountry">
                                    <div className="blkname">GDP</div>
                                    <div className="deathcount">12,345,5667</div>
                                </div>
                            </div>
                            <div className="cardcountrydata">
                                <div className="cardcountry">
                                    <div className="blkname">Health Expenditures</div>
                                    <div className="deathcount">12,3454</div>
                                </div>
                            </div>
                            <div className="cardcountrydata">
                                <div className="cardcountry">
                                    <div className="blkname">Education Index</div>
                                    <div className="deathcount">12,3454</div>
                                </div>
                            </div>
                            <div className="cardcountrydata">
                                <div className="cardcountry">
                                    <div className="blkname">Avg Schooling Yrs, Female</div>
                                    <div className="deathcount">12,3454</div>
                                </div>
                            </div>
                            <div className="cardcountrydata">
                                <div className="cardcountry">
                                    <div className="blkname">Life Expectancy</div>
                                    <div className="deathcount">12,3454</div>
                                </div>
                            </div>
                        </div>
                        <div className="countrybar">
                            <ListBox value={this.state.selectedCountry} options={this.countries} onChange={this.setSelectedCountry} filter optionLabel="name"
                                itemTemplate={this.countryTemplate} style={{width: '15rem'}} listStyle={{maxHeight: '25rem'}} />
                        </div>
                    </div>
                    

                </div>

                
                
            </div>
        )
    }
}

const underfive_content = "The global under-five mortality rate declined by 59 per cent, from 93 deaths per 1,000 live births in 1990 to 38 in 2019. Despite this considerable progress, improving child survival remains a matter of urgent concern. In 2019 alone, roughly 14,000 under-five deaths occurred every day, an intolerably high number of largely preventable child deaths"
const child_content = "The world made remarkable progress in child survival in the past three decades, and millions of children have better survival chances than in 1990—1 in 27 children died before reaching age five in 2019, compared to 1 in 11 in 1990. Moreover, progress in reducing child mortality rates has been accelerated in the 2000–2019 period compared with the 1990s, with the annual rate of reduction in the global under-five mortality rate increasing from 1.9 per cent in 1990–1999 to 3.7 per cent in 2000–2019. Despite the global progress in reducing child mortality rates over the past few decades, an estimated 5.2 million children under age five died in 2019—more than half of those deaths occurred in sub-Saharan Africa."
const unicef_link = "https://data.unicef.org/topic/child-survival/under-five-mortality/"
export default Dashboard
