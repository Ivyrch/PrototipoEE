import React from "react";
import styles from "./informations.module.css";
import entregador from "../../assets/entregador.jpg";
 

    const Informations = () => {

        return (
      
          <header className={styles.informations}>
      
            <div className={styles.p}>
              
              <p> Por uma entrega que realmente chegue na sua porta. </p>
            </div>
            
      
            <div className={styles.entregador}>
            <img src={entregador} alt={entregador} className={styles.img}/>
            
            </div>
          </header>
        );
      };
      
      export default Informations;