import React, { useState } from 'react';


const eachStep = {
  height: '12vw',
  width: '12vw',
  border: '.2vw solid white',
  borderRadius: '1vw',
  padding: '1vw 1vw',
  num:{
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '1.5vw',
    width: '2vw',
    height: '2vw',
    color: '#DB3022',
    borderRadius: '100%',
    backgroundColor: 'white',
    margin: '1vw auto'
  },
  text:{
    fontSize: '1.3vw',
    textAlign: 'center',
    color: 'white'
  }
}

const Step = ({num, text}) =>{
  return(
    <div style={eachStep}>
      <p style={eachStep.num}>{num}</p>
      <p style={eachStep.text}>
        {text}
      </p>
    </div>
  )
}

export default Step;
