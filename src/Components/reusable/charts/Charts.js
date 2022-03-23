import React from 'react'
import { Heading, Incre, Main, Progress, Variant } from './style'

const Charts = ({left, fade, dark}) => {
  return (
    <Main left={left}>
      <Incre>{fade}</Incre>
      <Heading>{dark}</Heading>
      <div style={{ display: 'flex', justifyContent:'space-evenly'}}>
        <div><Progress left='-150px'></Progress><Variant/></div>
        <div><Progress left='-100px'></Progress></div>
        <div><Progress left='-50px'></Progress></div>
      </div>
    </Main>
  )
}

export default Charts