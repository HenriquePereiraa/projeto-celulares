import React from 'react';
import styles from './Footer.module.css'


const Footer = () => {
    return ( 
        <>
            <div className={styles.container}>
                <p className={styles.footer}>© Copyright 2020 - Melhor Celular - Todos os direitos reservados à Melhor Celular LTDA.</p>
            </div>
        </>
     );
}
 
export default Footer;