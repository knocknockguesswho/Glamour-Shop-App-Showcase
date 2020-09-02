import React, { useState } from 'react';
import styles from '../../assets/styles/Home.module.css';
import {
  About,
  FootBar
} from '../molecules'

const Footer = ({history}) =>{
  return(
    <>
    <div className={styles.about}>
      <About 
        history={history}
      />
    </div>
    </>
  )
}

export default Footer;
