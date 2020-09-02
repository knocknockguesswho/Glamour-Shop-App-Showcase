import React, { useState } from 'react';
import styles from '../../assets/styles/Home.module.css';


const descParagraph = {
  textAlign: 'justify',
  fontSize: '1.3vw',
  secondary:{
    fontWeight:'600',
    fontSize: '1.3vw'
  }
}

const UsageItem_Description = () =>{
  return(
    <>
      <p className={styles.descTitle}>
        Look Glamourous With Us!
      </p>
      <div className={styles.descContent}>
        <p style={descParagraph}>
          We serve you with all of the best limited fashion on quality and style. Give you high quality of product with low price!
        </p>
        <p style={descParagraph.secondary}>
          It's all just for you.
        </p>
      </div>
    </>
  )
}

export default UsageItem_Description;
