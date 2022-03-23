import React from 'react'
import Topbar from '../../reusable/topbar/Topbar'
import { Feb ,Date, Heading, MainH, Wrapper, Cal, Text, Exec, Grey, Remain, Value, Re, Filt, Conf, Fide, Bar, Circ, Board, TopIcons, Ico, BottomIcons, Figm, Heads, Desc, Boot, Cro, EXX } from './style'
import Calender from '../../../assets/Calender.svg'
import Aee from '../../../assets/Excel/Aee.png'
import Bee from '../../../assets/Excel/Bee.png'
import Iee from '../../../assets/Excel/Iee.png'
import Yuu from '../../../assets/Excel/Yuu.png'
import Right from '../../../assets/Excel/Right.png'
import Down from '../../../assets/Excel/Down.png'
import Triple from '../../../assets/Excel/Triple.png'
import Line from '../../../assets/Excel/Line.png'
import Edit from '../../../assets/Excel/Edit.png'
import Photo from '../../../assets/Excel/Photo.png'
import Smile from '../../../assets/Excel/Smile.png'
import Plus from '../../../assets/Excel/Plus.png'
import Larrow from '../../../assets/Excel/Larrow.png'
import Rarrow from '../../../assets/Excel/Rarrow.png'
import Dots from '../../../assets/Excel/Dots.png'
import Battery from '../../../assets/Excel/Battery.png'
import Share from '../../../assets/Excel/Share.png'
import Excel from '../../../assets/Excel/Excel.png'
import Menu from '../../../assets/Excel/Menu.png'
import Minus from '../../../assets/Excel/Minus.png'

const CheckIn = () => {
  return (
    <div>
      <Topbar color='#30009B' border='1px solid #D8D8D8' Cros='X'/>
      <Wrapper>
        <MainH>
          <Heading>KEY RESULT CHECK_IN: GET 10k users on the platform</Heading>
          <Date>
            <Cal src={Calender}/>
            <Feb>February 22,2022</Feb>
          </Date>
        </MainH>
        <div style={{display: 'flex'}}>
          <Exec top='20px' left='25px' fsize='14px' fweight='600' lheight='19px'>Executive Summary</Exec>
          <Grey>
            <Text>Going to be a bit slow to start the year, but we’ll be picking things up. I am confident in the team's ability to execute what we need them to do in 160 charact</Text>
          </Grey>
        </div>
        <Remain >Characters Remaining: 160</Remain>
        <div style={{ display: 'flex'}}>
          <Exec top='11px' left='25px' fsize='14px' fweight='600' lheight='19px'>Reference Data</Exec>
          <Value left='5.75%' top='11px'>
            <Exec fsize='14px' fweight='600' lheight='19px'>Starting Value</Exec>
            <Exec top='5px' fsize='24px' fweight='700' lheight='33px'>0</Exec>
          </Value>
          <Value left= '12.75%' top= '11px'>
            <Exec fsize='14px' fweight='600' lheight='19px'>Previous Value</Exec>
            <Exec top='5px' fsize='24px' fweight='700' lheight='33px'>0</Exec>
          </Value>
          <Value left= '12.5%' top= '11px'>
            <Exec fsize='14px' fweight='600' lheight='19px'>Current Value</Exec>
            <Exec top='5px' fsize='24px' fweight='700' lheight='33px'>0</Exec>
          </Value>
          <Value left='12.5%' top= '11px'>
            <Exec fsize='14px' fweight='600' lheight='19px'>Target Value</Exec>
            <Exec top='5px' fsize='24px' fweight='700' lheight='33px'>10,000</Exec>
          </Value>
        </div>
        <div style={{display: 'flex'}}>
          <Exec top='40px' left='25px' fsize='14px' fweight='600' lheight='19px'>Key Result Performance</Exec>
          <Re></Re>
          <Filt>
          <Conf top='40px'>
            <Fide>Confidence</Fide>
            <Bar left= '16px'>
              <Circ/>
            </Bar>
          </Conf>
          <Conf>
            <Fide>Pacing</Fide>
            <Bar left= '46px'>
              <Circ/>
            </Bar>
          </Conf>
          </Filt>
        </div>
        <div style={{display: 'flex'}}>
          <Exec top='18px' left='25px' fsize='14px' fweight='600' lheight='19px'>Addional Detail</Exec>
          <Board>
            <TopIcons>
              <Ico src={Bee} left='3%'/>
              <Ico src={Iee} left='5%'/>
              <Ico src={Yuu} left='4%'/>
              <Ico src={Aee} left='3.5%'/>
              <Ico src={Right} left='5%'/>
              <Ico src={Down} left='4.5%'/>
              <Ico src={Triple} left='5%'/>
              <Ico src={Line} left='4.25%'/>
              <Ico src={Edit} left='3%'/>
              <Ico src={Photo} left='3.5%'/>
              <Ico src={Smile} left='4%'/>
              <Ico src={Plus} left='4%'/>
              <Ico src={Larrow} color='lightGrey' left='12%'/>
              <Ico src={Rarrow} color='lightGrey' left='5%'/>
              <Ico src={Dots} left='5%'/>
            </TopIcons>
            <Figm>
              <Heads>This is a WYSIWYG Figma Editor</Heads>
              <Desc>
                Gastropub chillwave lumbersexual umami lyft. Poke austin direct trade, marfa raclette letterpress actually. Chartreuse sriracha pinterest twee lo-fi try-hard. Meditation banh mi kitsch, prism organic hot chicken literally heirloom occupy af semiotics food truck.<br/> 
                Aesthetic asymmetrical gluten-free, health goth shaman meh lumbersexual bespoke kinfolk helvetica vaporware fashion axe freegan. Pour-over hammock succulents disrupt chartreuse raw denim. Brunch aesthetic fanny pack subway tile everyday carry green juice neutra beard cray small batch poke yuccie plaid pork belly. Blue bottle 8-bit flexitarian hashtag. Scenester marfa yuccie snackwave edison bulb. VHS blog pickled scenester venmo hashtag lo-fi
              </Desc>
            </Figm>
            <BottomIcons>
              <Cro ><EXX>X</EXX></Cro>
              <Boot src={Photo} top='2%'/>
              <Boot src={Battery} left='6%' top='2%'/>
              <Boot src={Share} left='6%' top='2%'/>
              <Boot src={Excel} left='6%' top='2%'/>
              <Boot src={Menu} left='6%' top='2%'/>
              <Boot src={Triple} left='6%' top='2%'/>
              <Boot src={Minus} left='6%' top='3%'/>
            </BottomIcons>
          </Board>
        </div>
        <div style={{display: 'flex'}}></div>
      </Wrapper>
    </div>
  )
}

export default CheckIn