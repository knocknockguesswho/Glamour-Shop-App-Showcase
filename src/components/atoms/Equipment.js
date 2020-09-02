import React, { useState } from 'react';
import styles from '../../assets/styles/Home.module.css';

const Equipment = ({src, width}) =>{
  return(
    <>
      {/* JS, MySQL, PHPMyAdmin, NodeJS, ExpressJS, NPMJS, NPM, Yarn, ReactNative, AndroidStudio, Redis, Redux, AWS, manymore */}
      <img 
        src={src}
        style={{
          width: width,
          margin: '2vw 1vw'
        }}
      />
    </>
  )
}

export default Equipment;