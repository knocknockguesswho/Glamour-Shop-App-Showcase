import React, { useState } from 'react'
import {
  NavItem_Logo,
  NavItem_About,
  NavItem_DownloadAPK,
  NavItem_Home
} from '../atoms'
import styles from '../../assets/styles/Nav.module.css'


const NavItem = () =>{
  return(
    <>
    <div className={styles.defaultNavLogo}>
      <div className={styles.logoContainer}>
        <NavItem_Logo />
      </div>
      <p>Glamour Shop</p>
    </div>
    
    <ul className={styles.defaultNavItem}>
      <NavItem_Home />
      <NavItem_About />
      <NavItem_DownloadAPK />
    </ul>
    </>
  )
}


export default NavItem;