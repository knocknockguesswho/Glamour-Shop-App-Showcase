import React, { useState } from 'react';
import Styles from '../../assets/styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const profile = {
  width: '20vw',
  height: '25vw',
  backgroundColor: 'white',
  borderRadius: '1vw',
  overflow: 'hidden',
  boxShadow: '.15vw .15vw .3vw #00000040',
  display: 'flex',
  flexDirection: 'column',
  // border: '.20vw solid #DB302250',
  avatar: {
    flex: .7,
    overflow: 'hidden',
    display: 'flex',
    borderBottom: '.35vw solid #DB302250',
  },
  socmed:{
    width: '5vw',
    margin: '1vw auto',
    display: 'flex',
    justifyContent: 'space-between',
    iconWrapper:{
      height: '2vw',
      margin: 0,
      padding: 0,
    },
    icon:{
      color: '#222', 
      width: '2vw', 
      height: '2vw',
      cursor: 'pointer'
    }
  },
  text:{
    flex: .3,
    padding: '.5vw 0',
    name:{
      fontSize: '1vw',
      fontWeight: '600',
      color: '#222',
      textAlign: 'center',
      margin: 0
    },
    job:{
      fontSize: '.8vw',
      fontWeight: '600',
      color: '#22222280',
      textAlign: 'center',
      margin: 0
    }
  }
}

const Profile = ({name, github, linkedIn, job, avatar, history}) =>{
  // const [profiles, setProfiles] = useState({
  //   name: String,
  //   github: String,
  //   linkedIn: String,
  //   avatar: String
  // })
  return(
    <>
      <div style={profile}>
        <div style={profile.avatar}>
          <img
            src={avatar}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'contain'
            }} 
          />
        </div>
        <div style={profile.text}>
          <p style={profile.text.name}>{name}</p>
          <p style={profile.text.job}>{job}</p>
          <div style={profile.socmed}>
            <a
              href={github}
              target='_blank'
              style={profile.socmed.iconWrapper}
            >
              <FontAwesomeIcon href={github} target='_blank' icon={['fab','github']} style={profile.socmed.icon}  /> 
            </a>
            <a
              href={linkedIn}
              target='_blank'
              style={profile.socmed.iconWrapper}
            >
              <FontAwesomeIcon icon={['fab','linkedin']} style={profile.socmed.icon} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;
