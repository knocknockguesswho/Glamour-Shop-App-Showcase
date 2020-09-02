import React, {useState} from 'react'
import {
  Link
} from 'react-router-dom';
import styles from '../../assets/styles/Nav.module.css'

const NavItemHome = () =>{
  return(
    <li>
      <Link className={styles.defaultNavText} to='/' >Home</Link>
    </li>
  )
}

export default NavItemHome;