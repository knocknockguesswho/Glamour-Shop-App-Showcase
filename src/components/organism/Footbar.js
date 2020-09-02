import React, { useState } from 'react';
import styles from '../../assets/styles/FootBar.module.css';
import {
  AppStore,
  GooglePlay
} from '../../assets/images/'
import {
  Badge
} from '../atoms'

const FootBar = () =>{
  return(
    <>
      <div className={styles.footBar}>
        <div className={styles.badges}>
          <Badge 
            src={AppStore}
            width='10vw'
          />
          <Badge 
            src={GooglePlay}
            width='10vw'
          />
        </div> 
        <div className={styles.copyright}>
          <p >&#169;2020 Glamour Shop </p>
        </div>
      </div>
    </>
  )
}

export default FootBar;
