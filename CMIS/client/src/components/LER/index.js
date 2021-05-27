import React, { Component, Fragment } from 'react'
import Header from '../Header2'
import '../GDP/style.css'
import data_png from '../../data/images/home/DataLER.png'

export default class LER extends Component {
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

const introduction = <p>Life Expectancy and Child Mortality are very closely related. Child mortality rate plays a very important role in determining the overall life expectancy of a country, this is because a large number of child fatality cancels out the old age people and thus brings down the average lifespan.

Over the last 50 years, the general trend over the world has been to move towards better health and living. All countries, irrespective of the economic condition, always make significant efforts to improve the health of their citizens. One of the major indicators of a country’s health well-being is the average Life Expectancy at birth as it reflects the overall mortality index of a population across all the age groups. 

The dataset used for our analysis in this project was sourced from The World Bank database. The dataset contained information of most of over 100 countries with the value of Life Expectancy in each for the period of 1950 – 2019. For our analysis, we specifically focused on the top 50 countries with the worst Child Mortality Index and considered the data from the period 2000 – 2015. 
</p>

const functional = <p><br/>•	Data retrieval from UN database for Life Expectency Rate.
<br/>•	Data processing and exploratory analysis on Child Mortality and LER datasets.
<br/>•	Regression Model Application on merged dataset for predictive analysis country-wise. 
<br/>•	Data Visualizations for the analysis on target datasets and predictions. 
<br/>•	Report delivery to primary receivers such as UN and government health body for respective countries.
</p>;


const model = <span><p>For the analysis on this dataset, the data was first pruned to remove any unwanted data i.e., data from the year before the year 2000 and after the year 2015. After the pruning, the data was cleared to remove the rows of the countries that were not part of the considered list. Various data pre-processing
     techniques are applied for exploratory data analysis and then this dataset is merged with the Child Mortality data to find its one-to-one correlation with it by applying suitable machine learning models to predict the child mortality rate for the all the countries for future years, given the life expectancy at birth.<br/>
     </p><img src={data_png} alt="" style={{height:'35vh',width:'40%'}}/><h6>(Screenshot of the datasets formed after merging the Life Expectancy and Child Mortality Data)</h6></span>

//Need to add comments.