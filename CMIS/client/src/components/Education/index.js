import React, { Component, Fragment } from 'react'
import Header from '../Header2'
import '../GDP/style.css'
import ei_data from '../../data/images/home/DataEI.png'
import ed_png from '../../data/images/home/ED.PNG'

export default class ED extends Component {
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

const introduction = <span><p>Education Index is a component of Human Development Index which is published each year by the United Nations. This education index is combined with GDP Index and Life Expectancy Index to measure the GDP per capita and life expectancy.
<br/>Education Index is measured by combining the average of average adult years of schooling and expected years of schooling for children. Both factors have equal 50% share each in it.
 <br/><br/><b><i>Education Index (EI):</i></b><br/>EI = (MYSI + EYSI) / 2 <br/>
 <br/>•	Mean Years of Schooling Index (MYSI): MYS/15
Mean years of schooling (MYS) is a calculation of the average number of years of education received by people ages 25 and older in their lifetime based on education attainment levels of the population converted into years of schooling based on theoretical duration of each level of education attended.
Fifteen is the projected maximum of this indicator for 2025.
<br/>•	Expected Years of Schooling Index (EYSI): EYS/18
Expected Years of Schooling is a calculation of the number of years a child is expected to attend school, or university, including the years spent on repetition. It is the sum of the age-specific enrollment ratios for primary, secondary, post-secondary non-tertiary and tertiary education and is calculated assuming the prevailing patterns of age-specific enrollment rates were to stay the same throughout the child's life. Expected years of schooling are capped at 18 years.
Eighteen is equivalent to achieving a master's degree in most countries. 

 </p><img src={ed_png} alt="" style={{height:'65vh',width:'80%'}}/><h6>(Education Index across globe, 2015: UN Database)</h6></span>
const functional = <p><br/>•	Data retrieval from UN database for Education Indext.
<br/>•	Data processing and exploratory analysis on Child Mortality and EI datasets.
<br/>•	Regression Model Application on merged dataset for predictive analysis country-wise. 
<br/>•	Data Visualizations for the analysis on target datasets and predictions. 
<br/>•	Report delivery to primary receivers such as UN and government health body for respective countries.
</p>;
const model = <span><p>The data source for this study is the United Nations Development Programme’s Education Index. The Education Index is calculated by UNESCO Institute for Statistics (2020).

<br/>This data will help in increasing the access of education to the regions where education index is low.

 The data published here contribute to a better understanding of:

 <br/>•	How Education Index varies around the world?
 <br/>•	What are the countries/ regions that have low Education Index and require improvement?
 <br/>As the time period information is on different axis in both the datasets i.e., on available in rows in the Education Index dataset and available in a column in the Child Mortality dataset,
  the Education Index dataset is melted and transformed using suitable python libraries in order to make both the datasets similar and compatible. 
  Multiple data pre-processing techniques are applied for exploratory data analysis and then this dataset is merged with the Child Mortality data to find its one-to-one correlation with it by applying suitable machine learning models to predict the child mortality rate for the all the countries for future years, given the estimated values of the Education Index for that time period.
</p><img src={ei_data} alt="" style={{height:'35vh',width:'40%'}}/><h6>( Screenshot of the Dataset Formed After Fusing EI and CM Datasets)</h6></span>