import React, { Component } from 'react'
import Cards from '../../components/Cards'
import Header from '../../components/Header2'
import './style.css'
import world_rate_png from '../../data/images/home/world_rate.png'
import disease_png from '../../data/images/home/disease_data.png'
import continent from '../../data/images/home/continent.png'

import { ScrollPanel } from 'primereact/scrollpanel';





const options = ['Global Child Mortality Rate (World Map)','Diseases Death Rate and Percentage'];
export default class HomePage extends Component {
    constructor(){
        super();
        this.state = {
            activeIndex : false,
            activeWorld : true,
        };
        this.onToggleImage1  = this.onToggleImage1.bind(this);
        this.onToggleImage2  = this.onToggleImage2.bind(this);
    }
    onToggleImage1(){
        this.setState({activeWorld:true, activeIndex:false});
        document.getElementById('btn1').style.opacity = 1;
        document.getElementById('btn2').style.opacity = 0.5;
    }
    onToggleImage2(){
        this.setState({activeWorld:false, activeIndex:true});
        document.getElementById('btn2').style.opacity = 1;
        document.getElementById('btn1').style.opacity = 0.5;
    }
    
    render() {
        
        return (
            <div className='homepagecontainer'>
                <div className="homeheader">
                    <Header/>
                </div>
                <div className="homebodycontainer">
                    <div className="card-containers">
                        <span><Cards dname='Gross Domestic Product' pname='GDP' pdesc='Comprehensive report on GDP/Child Mortality rate for different Diseases'/></span>
                        <span><Cards dname='Health Care Expenditure' pname='HC' pdesc='Comprehensive report on Health Care/Child Mortality rate for different Diseases'/></span>
                        <span><Cards dname='Education Index' pname='ED' pdesc='Comprehensive report on Education Index/Child Mortality rate for different Diseases'/></span>
                        <span><Cards dname='Female Yrs Schooling' pname='FER' pdesc='Comprehensive report on Avg Years of Feamale Education/Child Mortality rate for different Diseases'/></span>
                        <span><Cards dname='Life Expectancy' pname='LER' pdesc='Comprehensive report on Life Expectancy Rate/Child Mortality rate for different Diseases'/></span>
                    </div>

                    <span style={{display: 'inline-flex'}}>
                        <button className='tog-button btn1' id='btn1' value={this.state.activeWorld} onClick={this.onToggleImage1}>{options[0]}</button>
                        <button className='tog-button btn2' id='btn2' value={this.state.activeWorld} onClick={this.onToggleImage2}>{options[1]}</button>
                    </span>
                    
                    <div className="image-container">
                       
                        { this.state.activeWorld ? 
                        <ScrollPanel style={{width: '100%', height: 'initial'}}>
                            <img src={world_rate_png} alt=""/>
                        </ScrollPanel> 
                        :
                        <ScrollPanel style={{width: '100%', height: 'initial'}}>
                            <img src={disease_png} alt=""/>
                        </ScrollPanel> 
                        }
                    </div>


                    <div className="intro-container">
                        <div className="clcontainer">
                            <span className='abs-cont'><i>ABSTRACT</i></span>
                            <ScrollPanel style={{width: '98%', height: '500px'}} className='custom'>
                            {abstarct}
                            <img src={continent} alt=""/>
                            </ScrollPanel>
                        </div>

                        <div className="clcontainer">
                           <span className='int-cont'><i>INTRODUCTION</i></span>
                            <p>{intro}</p>
                        </div>
                    </div>
                </div>           
            </div>
        )
    }
}
const abstarct = <p>With increase in the figures for overall population, rate of infectious diseases mortality,
rate of burden diseases mortality, rate of maternal mortality and increase in average median age across the globe, 
child mortality ratios for countries have been an important factor of consideration for United Nations and governing bodies. 
Why is this more important than other factors? The Global Human Population growth amounts to 83 million annually, 
nearly 1.1% per year. Moreover, average median age, single most important factor for age distribution is also increasing. 
As per, world data Japan tops the list by 45.9 years with 45 other countries and dependent territories over 40 years – 31 belongs 
to Europe, 9 to North America and 6 to Asia. With active increase in global infections due to recent novel COVID-19 pandemic 
outbreak and other life-threatening epidemics before it, such as HIV and AIDS have disrupted quality of life index across countries. 
Further, “healthcare disruptions could reverse decades of improvements. Hundreds of thousands of additional under-5 deaths may be expected
in 2020” are directly referenced United Nations Department of Economic and Social Affairs Sustainable Goals. 
Hence, child mortality is considered in  
<b> UN Sustainable Development Goal</b> <i style={{color:'cornflowerblue'}}>(SDG Goal 3: Good health and Well-being).</i><br/> 
 The overall study scopes different factors such as Gross Domestic Product, Life Expectancy Rate, Health Index, Education Index and Average 
 Female Education Years across countries with highest child mortality rates. It measures whether above factors have positive, negative or 
 neutral correlation with the mortality rates? The mortality rate is calculated on the basis of deaths for 'HIV/AIDS', 'Diarrhoeal diseases', 
 'Pertussis', 'Tetanus', 'Measles', 'Meningitis/Encephalitis', 'Malaria', 'Acute Lower Respiratory Infections', 'Prematurity', 
 'Birth Asphyxia and Birth Trauma', 'Sepsis and Other Infectious Conditions of the Newborn', 'Other Communicable, Perinatal and 
 Nutritional Conditions', 'Congenital Anomalies', 'Other noncommunicable diseases', and 'Injuries'. The specific age group 
 considered for the analysis resides between 0-5 Years of the cases, inclusive of 0-27 days and 1-59 months of data. 
 Below is percentage wise distribution of selected countries from continents for mortality rate analysis. Above factors are 
 determined for these specific countries and regression model are applied to provide the predictive analysis of child mortality
 (in terms of deaths) for the target variable. The overall goal is to reduce the mortality rates with predictive analysis by 
 10% annually.</p>

 const intro = "“Gross domestic product (GDP) is the total monetary or market value of all the finished goods and services produced within a country's borders in a specific time period. As a broad measure of overall domestic production, it functions as a comprehensive scorecard of a given country’s economic health.” [4] GDP plays a significant role in determining the mortality factor for a country by directly or indirectly contributing to it. In developing countries, many studies have concluded that people with higher income and higher standard of living have better health rates, increased life expectancy and lower comorbidity and mortality (see Gwatkin et al. 2007 for a review). Although, GDP is not the only factor that directly correlates to the rate of mortality other factors such as healthcare infrastructure, healthcare finance, logistics etc. contributes to it."+
 "By studying the GDP and its growth in terms of child mortality for specific countries and implementing machine learning models we can astutely make predictions for number of deaths. The study analyses and evaluates 15 years of available GDP data for specific countries – having highest deaths for the age groups between 0 to 5 years. However, after model development we can increase the scope to rest of the countries and even train the model to incorporate children age groups of 5 to 10 years and 11 to 15 years." 