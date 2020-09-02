import React, {useState} from 'react'
import {
  Link
} from 'react-router-dom';
import styles from '../../assets/styles/Nav.module.css'

const NavItemAbout = () =>{
  return(
    <li>
      <a 
        href='https://github.com/knocknockguesswho/Glamour-Shop'
        target='_blank'
        className={styles.defaultNavText}  
      >
        Source
      </a>
    </li>
  )
}

export default NavItemAbout;