import React, { useState } from 'react';
import {
  Step
} from '../atoms';
import styles from '../../assets/styles/Home.module.css'

const Steps = () =>{

  const [steps, setSteps] = useState([
    {
      text: 'Signup with your valid email address'
    },
    {
      text: 'Get OTP to activate your account'
    },
    {
      text: 'Login with your account and Stay Glamour!'
    },
  ])

  return(
    <div className={styles._step}>
      {steps.map((step, index)=>{
        return(
          <Step
            num={index+1}
            text={step.text}
          />
        )
      })}
    </div>
  )
}

export default Steps;
