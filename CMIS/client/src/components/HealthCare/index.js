import React, { Component, Fragment } from 'react'
import Header from '../Header2'
import '../GDP/style.css'
import hci_png from '../../data/images/home/HEDS.png'

export default class HC extends Component {
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
const introduction = <span><p>Child mortality is a very worrying demographic phenomenon especially in developing countries, 
    which has attracted the attention of various researchers and policymakers. Today, combating this issue is considered 
    an important objective, therefore many international organizations, such as the United Nations Children’s Fund (UNICEF), 
    the World Bank and the World Health Organization (WHO) have incorporated the objective of reducing child mortality into most 
    of their future programs.<br/>
Healthcare financing, whether through private or public means, remains fundamental for the improvement of children’s health status 
all over the world. So, one of the factors having a significant impact on the Global Child Mortality Rate is the Health Expenditures
 done by the nations across the world.<br/>
The role of health economics today is crucial because of growing international awareness of the close relationship between economic 
development and health. Furthermore, as health in childhood is one of the key predictors of health and productivity in later life, child 
mortality is an important indicator of socioeconomic development. In the regions, where health infrastructure is largely underdeveloped, 
increasing health expenditure will contribute to progress towards reducing the child mortality rates. Therefore, in order to achieve the 
same, the governments in those regions need to increase amounts allocated to health care service delivery.<br/>
Globally, the health spending is highly unequal. Hence, the main objective of this effort is to assess the impact of health expenditure 
on child mortality, as measured by under-five child mortality rates in countries with 50 highest child mortality rates for the period of 
2000 to 2015. In addition, we also aim to predict the same using supervised machine learning models.<br/>
The data source for this study is the World Health Organization’s Global Health Expenditure Database (GHED). This data in the GHED is 
collected by the WHO and is availed publicly by the World Bank Group according to the open data standards and licenses datasets under 
the Creative Commons Attribution 4.0 International license (CC-BY 4.0). They are labeled accordingly, and when they are accessed by users, 
users agree to comply with all of the terms of the respective licenses. GHED is the source of the health expenditure data republished by 
the World Bank and the WHO Global Health Observatory.  The World Bank Group also quotes that in some cases it is not possible to make data 
available, either because the data are too sensitive, or have been lost or damaged. However, users may still benefit from the available 
metadata for these datasets.
</p><img src={hci_png} alt="" style={{height:'65vh',width:'60%'}}/><h6>(Health Expenditures in $ per capita across globe, 2015: World Bank)</h6></span>;
const functional = <p><br/>•	Data retrieval from World Bank database for Health Expenditures.
<br/>•	Data processing and exploratory analysis on Child Mortality and HE datasets.
<br/>•	Regression Model Application on merged dataset for predictive analysis country-wise. 
<br/>•	Data Visualizations for the analysis on target datasets and predictions. 
<br/>•	Report delivery to primary receivers such as UN and government health body for respective countries.
</p>;
const model = <p>This dataset comprises of Health Expenditure per Capita data for around 190 countries in the world for the time period of 2000 to 2018. This data is collected in local currencies for different nations and then is converted to US$ as per applicable and acceptable norms and conditions. The amount estimates of the 
    current health expenditures include healthcare goods and services consumed during each year by both private and public organizations.</p>;