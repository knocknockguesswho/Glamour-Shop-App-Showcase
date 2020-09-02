import React, { useState } from 'react';
import {
  Logo
} from '../../assets/images'
import styles from '../../assets/styles/Nav.module.css'

const NavItem_Logo = () =>{
  return(
    <div>
      <img className={styles.logo} src={Logo} />
    </div>
  )
}

export default NavItem_Logo