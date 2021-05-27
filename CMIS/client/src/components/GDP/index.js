import React, { Component, Fragment } from 'react';
import Header from '../Header2';
import './style.css';
import gdp_data from '../../data/images/home/gdp_data.png'

// import { TabView, TabPanel } from 'primereact/tabview';


export default class GDP extends Component {
    constructor(props){
        super(props);
        this.state = {
            is_intro: true,
            is_fr: false,
            is_er: false,
            is_model: false,
        };
        this.handleIntro = this.handleIntro.bind(this);
        this.handleFr = this.handleFr.bind(this);
        this.handleEr = this.handleEr.bind(this);
        this.handleModel = this.handleModel.bind(this);
    }
   
    handleIntro(event){
        event.preventDefault();
        this.setState({
            is_intro:true,is_fr: false,
            is_er: false,
            is_model: false});
           
    }
    handleFr(event){
        event.preventDefault();
        this.setState({
            is_intro:false,is_fr: true,
            is_er: false,
            is_model: false});
    }
    handleEr(event){
        event.preventDefault();
        this.setState({
            is_intro:false,is_fr: false,
            is_er: true,
            is_model: false});
    }
    handleModel(event){
        event.preventDefault();
        this.setState({
            is_intro:false,is_fr: false,
            is_er: false,
            is_model: true});
    }
    

    render() {
        var {is_intro, is_fr, is_model} = this.state;
        return (
            <Fragment> 
                <Header />
                <div className="intro-card">
                    <div className="card-head">
                        <span id='idintro' className='ind-head' value={this.state.is_intro} onClick={this.handleIntro}>Introduction</span>
                        <span id='idfr'  className='ind-head' value={this.state.is_fr} onClick={this.handleFr}>Functional Requirements</span>
                        {/* <span id='ider' className='ind-head' value={this.state.is_er} onClick={this.handleEr}>Entropy and Uncertaintiy</span> */}
                        <span id='idmodel' className='ind-head' value={this.state.is_model} onClick={this.handleModel}>Analysis and Modeling</span>
                    </div>
                    <div className="card-body">
                        {is_intro ? introduction : null}
                        {is_fr ? functional : null}
                        {is_model ? model : null}
                    </div>
                </div>
            </Fragment>
        )
    }
}

const introduction = <span><p> “Gross domestic product (GDP) is the total monetary or market value of all the finished goods and services produced within a 
    country's borders in a specific time period. As a broad measure of overall domestic production, it functions as a comprehensive scorecard of a 
    given country’s economic health.” GDP plays a significant role in determining the mortality factor for a country by directly or indirectly 
    contributing to it. In developing countries, many studies have concluded that people with higher income and higher standard of living have better 
    health rates, increased life expectancy and lower comorbidity and mortality <i style={{color:'cornflowerblue'}}>(see Gwatkin et al. 2007 for a review)</i>. Although, GDP is not the only 
    factor that directly correlates to the rate of mortality other factors such as healthcare infrastructure, healthcare finance, logistics etc. contributes to it.
By studying the GDP and its growth in terms of child mortality for specific countries and implementing machine learning models we can astutely make predictions for number of deaths. 
The study analyses and evaluates 15 years of available GDP data for specific countries – having highest deaths for the age groups between 0 to 5 years. However, after model development we can 
increase the scope to rest of the countries and even train the model to incorporate children age groups of 5 to 10 years and 11 to 15 years.
</p><img src={gdp_data} alt="" style={{height:'65vh',width:'70%'}}/><h6>(World GDP Line Graph from 1960 to 2015)</h6></span>;

const functional = <p><br/>•	Data retrieval from World Bank database for Gross Domestic Product.
<br/>•	Data processing and exploratory analysis on Child Mortality and GDP datasets.
<br/>•	Regression Model Application on merged dataset for predictive analysis country-wise. 
<br/>•	Data Visualizations for the analysis on target datasets and predictions. 
<br/>•	Report delivery to primary receivers such as UN and government health body for respective countries.
</p>;

const model = <p>Here I am in the Model Part</p>;


