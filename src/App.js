import React from 'react';  

import {Cards, Charts, CountryPicker } from './Components'  
import styles from './App.module.css'  
import coronaImage from './images/covid.jpg';  

import { fetchData } from './api/index';

class App extends React.Component {  
    

    state ={

        data: {},
        country : '',
    }

    async componentDidMount(){

        const fetchedData= await fetchData();
        
        this.setState({data:fetchedData});
    }
    
    handelCountryChange= async (country) => {
        const data = await fetchData(country);  
        this.setState({data: data, country: country}); 


    }

    render(){ 
        const {data, country }=this.state; 
       return(  
       <div className={styles.container} >
            <img className={styles.image} src={coronaImage} alt="Covid-19"/>
           <Cards data={data} />
           <CountryPicker  handelCountryChange={this.handelCountryChange}/>
           <Charts  data ={data}  country={country}/>
           
       </div>  
    );  
}  
}  
  
export default App;