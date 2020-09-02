import React, { useState } from 'react';
import {
  NavItem_Logo
} from '../atoms'
import {
  NavItem
} from '../molecules';
import styles from '../../assets/styles/Nav.module.css'

const Navbar = () =>{
  return(
    <nav className={styles.defaultNavbar}>
      <NavItem />
    </nav>
  )
}

export default Navbar;
