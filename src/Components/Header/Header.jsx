import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/EE.png";

 

    const Header = () => {

        return (
      
          <header className={styles.header}>
            
            <div className={styles.logodiv}>
            <img src={logo} alt={logo} className={styles.img}/>
            </div>
           
      
            <nav className={styles.nav}>
              <a className={styles.link}>Quem Somos</a>
              
                
              <a  className={styles.link}>Clientes</a>
            
            
              <a className={styles.link}>Cadastre-se</a>
            
            
            
            </nav>
          </header>
        );
      };
      
      export default Header;
  