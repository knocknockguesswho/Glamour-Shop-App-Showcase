import React, { useState } from 'react'
import styles from '../../assets/styles/Home.module.css';
import {
  AppDisplay
} from '../../assets/images';

const DisplayItem = () =>{
  return(
    <>
      <img 
        className={styles.displayItem}
        src={AppDisplay}
      />
    </>
  )
}

export default DisplayItem;
