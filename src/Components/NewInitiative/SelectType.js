import React, { useState } from 'react'
import { BorderBottom, InitButtonBlack, InitButtonWhite, InitiativeSelectMain, InitImg, InitLeftButtons, InitResultImg, InitResultMain, InitRightButtons } from './StyledInitiative'
import init1 from '../../assets/initCard1.svg';
import init2 from '../../assets/initCard2.svg';
import init3 from '../../assets/initCard3.svg';
import init4 from '../../assets/initCard4.svg';
import init5 from '../../assets/initCard5.svg';
import initiativeImg1 from '../../assets/initiativeImg2.png';
import initiativeImg3 from '../../assets/initiativeImg3.png';
import initiativeImg4 from '../../assets/initiativeImg4.png';
import initiativeImg5 from '../../assets/initiativeImg5.png';
import initiativeImg6 from '../../assets/initiativeImg6.png';
import { Col, Row } from 'react-bootstrap';
import SideBarCanvas from '../reusable/SideBarCanvas/Index'
import TrackIntiative from './InitiativeComponents/TrackIntiative';
import GetItDone from './InitiativeComponents/GetItDone';
import TrackCompletion from './InitiativeComponents/TrackCompletion';
import GenerateOutput from './InitiativeComponents/GenerateOutput';
import MonitorStatus from './InitiativeComponents/MonitorStatus';
import AchieveMilestone from './InitiativeComponents/AchieveMilestone';
const SelectType = ({handleCanvas}) => {
    const [getItDone, setGetItDone] = useState(false);
    const [imgIndex, setImgIndex] = useState(0)

  
    console.log(imgIndex,"index");
    const initTypes = [{
        head: 'Objective',
        subhead: 'Be proactive with customer success',
    }, {
        head: 'Key Result',
        subhead: 'Get 10 outbound meetings',
    }]
    const cards = [{
        head: 'Get It Done',
        subhead: 'Binary - Yes/No',
        img: init1
    },
    {
        head: 'Track Completion',
        subhead: 'Track Completion',
        img: init2
    },
    {
        head: 'Generate Output',
        subhead: 'Volume Based - Call 50 customers',
        img: init3
    },
    {
        head: 'Monitor Status',
        subhead: 'Not done, Little done, Halfway done, Almost done, Done',
        img: init4
    },
    {
        head: 'Achieve Milestones',
        subhead: 'Track Multiple Items',
        img: init5
    },]
    const img = [
        initiativeImg3,initiativeImg4, initiativeImg5,initiativeImg6
    ]
    const Form=[GetItDone,TrackCompletion,GenerateOutput,MonitorStatus,AchieveMilestone]

    const handleClose = () => {
        setGetItDone(false)
    };

    const handleChange = (index) => {
        setGetItDone(true);
        setImgIndex(index)
    }
    return (
        <div>
            <SideBarCanvas show={getItDone} placement='end' handleClose={handleClose} children={<TrackIntiative handleClose={handleClose} img={img[imgIndex]}  Form={Form[imgIndex]}/>} />
            <InitiativeSelectMain>
                <Row className='justify-content-between'>
                    <Col lg={7} md={5}  style={{
                        padding: '4rem 4rem 0 4rem',
                    }}>
                        <h3>
                            Select Your Initiative Type
                        </h3>
                        {
                            initTypes.map((data, index) => {
                                const { head, subhead } = data;
                                return (
                                    <p key={index}>
                                        <span className='head'>{head}:</span>
                                        <span className='sub-head'>
                                            {subhead}
                                        </span>
                                    </p>
                                )
                            })
                        }
                        <p className='init-status'>
                            How do you want to track STATUS of EXECUTION of your Initiative?
                        </p>
                        <Row>
                            {
                                cards.map((data, index) => {
                                    const { head, subhead, img } = data;
                                    return (
                                        <Col lg={6} className=' gap-5'>
                                            <div className="cards" onClick={() => handleChange(index)}>
                                                <div key={index} className="inner-card">
                                                    <InitImg src={img} alt={img} />
                                                    <p className='head'>{head}</p>
                                                    <p className='sub-head'>{subhead}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        <BorderBottom />
                        <InitLeftButtons>
                            <div>
                                <InitButtonWhite onClick={()=>handleCanvas()}>Cancel </InitButtonWhite>
                            </div>
                            <div>
                                <InitButtonBlack onClick={() => handleChange(6)}>Next Step </InitButtonBlack>
                            </div>
                        </InitLeftButtons>
                    </Col>
                    <Col lg={5} md={5}>
                        <InitResultMain>
                            <InitResultImg src={initiativeImg1} alt={initiativeImg1} />
                            <h5>
                                Initiatives vs. Key Results
                            </h5>
                            <p>Initiatives move the needle on Key Results. These are the things you can control and tangibly work on. Projects, tasks, whatever you want to call it, it’s the effort you put in!</p>
                            <p>
                                Key Results quantify success of the Objective. They are measurable over time but cannot be directly controlled. They are measurable and verifiable outcomes, human behavior and impact that drives business results.

                                Want to learn more? Check out our course about Key Results & Initiatives!
                            </p>
                            <InitRightButtons>
                                <div>
                                    <InitButtonBlack>View Course </InitButtonBlack>
                                </div>
                            </InitRightButtons>
                        </InitResultMain>

                    </Col>
                </Row>

            </InitiativeSelectMain>
        </div>

    )
}

export default SelectType