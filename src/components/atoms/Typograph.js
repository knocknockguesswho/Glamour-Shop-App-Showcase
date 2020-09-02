import React, { useState } from 'react';
import styles from '../../assets/styles/Home.module.css';

const typoGraph = {
  width: 'max-content',
}

const typoGraph_1 = {
  marginBottom: '-3.5vw',
  fontSize: '2.5vw',
  padding: '0 1vw'
}
const typoGraph_2 = {
  display: 'flex',
  flexDirection: 'row',
  padding: '0 1vw',
  first:{
    fontSize: '1.5vw',
    fontWeight:'600',
    color: '#DB3022'
  },
  second:{
    fontSize: '2vw',
    fontWeight: '600'
  }
}

const Typograph = () =>{
  return(
    <div style={typoGraph} className={styles.typoGraph}>
      <div style={typoGraph_1}>
        <p>
          Up to date.
        </p>
      </div>
      <div style={typoGraph_2}>
        <p style={typoGraph_2.first}>
          High Quality.
        </p>
        <p style={typoGraph_2.second}>
          Limited.
        </p>
      </div>
    </div>
  )
}

export default Typograph;
