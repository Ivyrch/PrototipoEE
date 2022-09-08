import React from "react";
import styles from "./informations.module.css";
import entregador from "../../assets/entregador.jpg";
 

    const Informations = () => {

        return (
      
          <header className={styles.informations}>
            
            <div className={styles.p}>
             <p>Uma nova  forma de estar presente nas comunidades.  <p>
              </p>Conectando você e a suas compras sem dor de cabeça.</p>
            </div>
           
      
            <div className={styles.entregador}>
            <img src={entregador} alt={entregador} className={styles.img}/>
              
            
            
            </div>
          </header>
        );
      };
      
      export default Informations;