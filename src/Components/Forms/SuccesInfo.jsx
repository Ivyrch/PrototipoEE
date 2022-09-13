import React from 'react';
import styles from "./SucessInfo.module.css";
import { NavLink } from 'react-router-dom';
import sucess from "../../assets/pngwing.com.png";
import { Button} from "@chakra-ui/react";

function SucessInfo() {


  

    return (
    
        
        <div className={styles.informations}>
            <img src={sucess} alt={sucess} className={styles.img} />

            <h1 className={styles.title}>Suas informações foram salvas com sucesso no nosso sistema! </h1>
            <p class={styles.p}> Obrigado por nos ajudar a melhorar!</p>

            <NavLink to="/"> <Button className={styles.button}>voltar</Button> </NavLink>
        </div>
        
          
               
         
        
    )
}

export default SucessInfo;

