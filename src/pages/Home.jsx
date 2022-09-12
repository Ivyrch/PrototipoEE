import React from 'react';
import {useHistory} from "react-router-dom";
import Header from '../Components/Header/Header';
import Informations from '../Components/Informations/Informations';
import Forms from '../Components/Forms/Forms';
import Footer from '../Components/Footer/Footer';



function Home() {


  

    return (
        <div>
        <Header />
        <Informations />
        <Forms/>
        <Footer />
     
      
        
        </div> 
       
    )
}

export default Home;