import React, { useState } from 'react';
import styles from '../../assets/styles/Home.module.css';
import {
  UsageItem_Description,
  NavItem_DownloadAPK
} from '../atoms';


const Usage = () =>{
  return(
    <div className={styles.innerUsage}>
      <div className={styles.description}>
        <UsageItem_Description />
        <div style={{listStyle: 'none'}}>
          <NavItem_DownloadAPK />
        </div>
      </div>
    </div>
  )
}

export default Usage;

