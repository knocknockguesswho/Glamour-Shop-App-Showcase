import React, { useState } from 'react';
import styles from '../../assets/styles/Home.module.css';
import {
  Display,
  Usage
} from '../molecules'

const Main = () =>{
  return(
    <>
      <div className={styles.usage}>
        <Usage />
      </div>
      <div className={styles.display}>
        <Display />
      </div>
    </>
  )
}

export default Main;