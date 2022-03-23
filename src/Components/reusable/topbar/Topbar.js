import React from 'react'
import { Body, Cross, Ex, Left } from './style'

const Topbar = ({color, border, arrow, Cros , handleClose }) => {
  return (
    <Body color={color} border={border}>
      {arrow ? 
      <Left>
           <img onClick={() => handleClose()} src={arrow} className="" alt="" />
       </Left>
       : '' }
       {Cros ? 
       <Cross>
         <Ex>{Cros}</Ex>
        </Cross>
        : '' }
    </Body>
  )
}

export default Topbar