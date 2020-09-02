import React, { useState } from 'react';

const Badge = ({src, width, height, submit}) =>{

  const [size, setSize] = useState({
    width: width,
    height: height
  })

  const handleBadgeClick = () =>{
    if(submit!=undefined){
      submit()
    }
  }

  return(
    <>
      <img 
        src={src}
        style={{
          width: size.width,
          height: size.height,
          cursor: 'pointer'
        }}
        onClick={handleBadgeClick}
      />
    </>
  )
}

export default Badge;
