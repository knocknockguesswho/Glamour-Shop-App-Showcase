import React, { useState } from 'react';
import styles from '../../assets/styles/Home.module.css';
import {
  Profile,
  Equipment,
  ThankContributors
} from '../atoms';

import {
  Avatar_Dimas,
  Avatar_Faris,
  Avatar_Prio,
  Avatar_Randi
} from '../../assets/images'

const title = {
  width: '90%',
  margin: '10vw auto 1vw auto',
  fontSize: '2vw',
  color: '#222222'
}
const breakLine = {
  width: '95%',
  height: '.05vw',
  backgroundColor: '#22222250',
  margin: '0 auto'
}

const content ={
  width: '90%',
  margin: '3vw auto',
  fontSize: '1vw',
  color: '#222'
}

const equipWrapper = {
  width: '75%',
  margin: '8vw auto',
  textAlign: 'center'
}

const About = ({history}) =>{

  const [profiles, setProfiles] = useState([
    {
      name: 'Dimas W.J. Mokodompit',
      github: 'https://github.com/dimasdompit',
      linkedIn: 'https://linkedin.com/in/dimasdompit',
      job: 'Back-End Engineer',
      avatar: Avatar_Dimas
    },
    {
      name: 'Faris Ramadhan',
      github: 'https://github.com/knocknockguesswho',
      linkedIn: 'https://www.linkedin.com/in/farisromadhon/',
      job: 'Front-End Engineer',
      avatar: Avatar_Faris
    },
    {
      name: 'Prio Arief Gunawan',
      github: 'https://github.com/prioarief',
      linkedIn: 'https://www.linkedin.com/in/priooarief/',
      job: 'Back-End Engineer',
      avatar: Avatar_Prio
    },
    {
      name: 'Randi Maulana Akbar',
      github: 'https://github.com/RepoRandi',
      linkedIn: 'https://www.linkedin.com/in/randi-maulana-akbar/',
      job: 'Front-End Engineer',
      avatar: Avatar_Randi
    },
  ])

  const [equipments, setEquipments] = useState([
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    'https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/PhpMyAdmin_logo.svg/3890px-PhpMyAdmin_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwYXjvK9xFgNCPeHeRlJcXQrOWOdtiAkEYzg&usqp=CAU',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2000px-Npm-logo.svg.png',
    'https://miro.medium.com/max/9624/1*m6zlwvyKm9BPeFQCKvGQEQ.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Breezeicons-apps-48-android-studio.svg/1200px-Breezeicons-apps-48-android-studio.svg.png',
    'https://cdn.worldvectorlogo.com/logos/redis.svg',
    'https://cdn.worldvectorlogo.com/logos/redux.svg',
    'https://d39w7f4ix9f5s9.cloudfront.net/dims4/default/e194fde/2147483647/strip/true/crop/840x630+180+0/resize/1600x1200!/quality/90/?url=http%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F40%2Fb0%2F16d665224675bf7ecf4431d1e9ca%2Faws-logo-smile-1200x630.png',
  ])

  return(
    <>
      <div className={styles.contributors}>
        <p style={title}>Contributors</p>
        <div style={breakLine}></div>
        <div style={content}>
          <ThankContributors />
        </div>
        <div className={styles.profileContainer}>
          {profiles.map((profile, index)=>{
            return(
              <Profile
                name={profile.name} 
                github={profile.github}
                linkedIn={profile.linkedIn}
                job={profile.job}
                avatar={profile.avatar}
                key={index}
              />
            )
          })}
        </div>
      </div>
      <div className={styles.development}>
        <p style={title}>Equipments</p>
        <div style={breakLine}></div>
        <div style={equipWrapper}>
          {equipments.map((equip, index)=>{
            return(
              <Equipment key={index} src={equip} width='8vw' />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default About;
