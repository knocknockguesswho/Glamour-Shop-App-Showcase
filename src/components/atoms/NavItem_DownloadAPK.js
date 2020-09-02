import React, {useState} from 'react'
import {
  Link
} from 'react-router-dom';
import styles from '../../assets/styles/Nav.module.css'

const NavItemDownloadAPK = () =>{
  return(
    <li>
      <Link className={styles.borderedNavText} to='/downloadAPK' >Download APK</Link>
    </li>
  )
}

export default NavItemDownloadAPK;