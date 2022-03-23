import React from 'react'
import Topbar from '../../reusable/topbar/Topbar'
import LeftArrow from '../../../assets/LeftArrow.svg'
import { Bars, Date, Exec, Feb, Flex, Grey, Heading, MainH, P, Text, Wrapper } from './style'

const Index = () => {
  return (
    <div>
      <Topbar arrow={LeftArrow} color="#000000" border="1px solid #D8D8D8" />
      <Wrapper>
      <MainH>
          <Heading>OBJECTIVE CHECK_IN: Be Proactive About Customer Success</Heading>
          <Date>
            <Feb>February 22,2022</Feb>
          </Date>
        </MainH>
        <Flex>
          <Exec top='57px' left='40px' fsize='14px' fweight='600' lheight='19px'>Executive Summary</Exec>
          <Grey>
            <Text>Great start to the year!</Text>
          </Grey>
        </Flex>
        <Flex >
          <Exec top='58px' left='40px' fsize='14px' fweight='600' lheight='19px'>Objective Status</Exec>
          <Bars left='7%'>
            <P left='20%'>Really Off Track</P>
          </Bars>
          <Bars left='2.70%'>
            <P left='30%'>Off Track</P>
          </Bars>
          <Bars left='2.70%'>
            <P left='30%'>Going Okay</P>
          </Bars>
          <Bars left='2.70%'>
            <P left='30%'>On Track</P>
          </Bars>
          <Bars left='2.70%'>
            <P left='20%'>Really On Track</P>
          </Bars>
        </Flex>
      </Wrapper>
    </div>
  )
}

export default Index