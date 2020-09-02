import React, { useState } from 'react';
import styles from '../../assets/styles/Home.module.css';
import {
  AppStore,
  GooglePlay
} from '../../assets/images'
import {
  DisplayItem,
  Typograph,
  Badge
} from '../atoms';

const badges = {
  width: '90%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around'
}

const Display = () =>{
  return(
    <>
      <div className={styles.appDisplay}>
        <DisplayItem />
        <div className={styles.rightComp}>
          <Typograph />
          <div style={badges}>
            <Badge 
              src={AppStore}
              width='10vw'
            />
            <Badge 
              src={GooglePlay}
              width='10vw'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Display;