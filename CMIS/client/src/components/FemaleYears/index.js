import React, { Component, Fragment } from 'react'
import Header from '../Header2'
import '../GDP/style.css'
import fe_data from '../../data/images/home/DataAF.png'
import avg_data from '../../data/images/home/ASY.png'

export default class FER extends Component {
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


const introduction = <span><p>Mean years of schooling is a calculation of the average number of years of education received by female in their lifetime based on education attainment levels of the population converted into years of schooling based on theoretical duration of each level of education attended. SDG 4 is ‘to ensure inclusive and equitable quality education and promote lifelong learning opportunities for all'.

<br/>Furthermore, children education is one of the key factors for socio-economic development of a nation, therefore improving the quality of education and providing the access of education to every female child will help in reducing the child mortality rates. Therefore, regions where access to education is very low or poor, improving it will help in addressing the issue of child mortality.
<br/>Globally, the education quality and years of schooling varies very much especially due to gender discrimination. Hence, the main objective of this effort is to analyze the impact of female education on child mortality, as measured by under-five child mortality rates in countries with 50 highest child mortality rates for the period of 2000 to 2015. In addition, we also aim to predict the same using supervised machine learning models.
</p><img src={avg_data} alt="" style={{height:'65vh',width:'60%'}}/><h6>(Female Mean Years of Schooling, 2015: UN Database)</h6></span>

const functional = <p><br/>•	Data retrieval from UN database for Average Female Years of Education.
<br/>•	Data processing and exploratory analysis on Child Mortality and Average Education datasets.
<br/>•	Regression Model Application on merged dataset for predictive analysis country-wise. 
<br/>•	Data Visualizations for the analysis on target datasets and predictions. 
<br/>•	Report delivery to primary receivers such as UN and government health body for respective countries.
</p>;

const model = <span><p>The data source for this study is the United Nations Development Programme’s Expected Years of Schooling data. This data is collected by the UNESCO Institute of Statistics,
     ICF Macro Demographic and Health surveys and UNICEF multiple indicator cluster surveys (2019b).<br/>This data will help in increasing and improving the access of education to female child. In particular, the data will give better understanding of :
<br/><br/>•	Which countries have highest and lowest years of schooling?
<br/>•	What is the mean year of schooling of female child?
<br/><br/>As the time period information is on different axis in both the datasets i.e., it is available in rows in the Mean Years of Schooling dataset and available in a column in the Child Mortality dataset, the Health Expenditure dataset is melted and transformed using suitable python libraries in order to make both the datasets similar and compatible. 
Various data pre-processing techniques are applied for exploratory data analysis and then this dataset is merged with the Child Mortality data to find its one-to-one correlation with it by applying suitable machine learning models to predict the child mortality rate for the all the countries for future years, given the mean years of schooling (female).
</p><img src={fe_data} alt="" style={{height:'35vh',width:'40%'}}/><h6>(World GDP Line Graph from 1960 to 2015)</h6></span>;