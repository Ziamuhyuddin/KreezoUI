import React from 'react'
import { AddContributionLeft, AddContributionMain, AddContributionRight } from './StyledAddContribution'
import closeBtn from '../../../assets/closeBtn.svg'
import { Col, Row } from 'react-bootstrap'
const AddContribution = ({ handleClose }) => {
    const marketOptions = [{ number: 22, name: 'Marketing' }, { number: 15, name: 'Sales' }, { number: 12, name: 'Business Development' }, { number: 10, name: 'Product Management' }, { number: 8, name: 'Engineering' }, { number: 8, name: 'Customer Success' }, { number: 5, name: 'Customer Support' }, { number: 4, name: 'Account Management' }, { number: 4, name: 'Human Resources' }, { number: 4, name: 'Marketing' }, { number: 4, name: 'Operations ' }, { number: 175, name: 'All Company' },];
    const names = ['April Smith', 'Bob Johnson', 'Carol Baskin', 'Denzel Washington', 'Edward Scissors', 'Frank Costanza', 'Gerald Ford', 'Henry Ford', 'Iris Elba', 'Avery Jo', 'April Smith', 'Bob Johnson', 'Carol Baskin', 'Denzel Washington',]
    return (
        <AddContributionMain>
            <div className='head-div'>
                <h4>Add Contributor(s)</h4>
                <img style={{ cursor: 'pointer' }} onClick={() => handleClose()} src={closeBtn} alt="close-btn" />
            </div>
            <div className='industry-div'>
                <Row className='p-0'>
                    <Col lg={6} className='p-0'>
                        <AddContributionLeft>
                            <div className='inner-div'>
                                {
                                    marketOptions.map((data, index) => {
                                        const { name, number } = data;
                                        return (<p className='industry' key={index}>{name} ({number})</p>)
                                    })
                                }
                            </div>
                        </AddContributionLeft>
                    </Col>
                    <Col lg={6} className='p-0'>
                        <AddContributionRight>
                            <div className='inner-div'>
                                {
                                    names.map((name, index) => (<div  className='mt-3' key={index}>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                        <label className='label ms-2 ' for="vehicle1"> {name}</label>
                                    </div>)
                                    )
                                }
                            </div>
                        </AddContributionRight>
                    </Col>
                </Row>
                <div className="process-div">

                    <button className='cancel-btn'>
                        Cancel
                    </button>
                    <button className='contribute-btn'>
                        Add Contributor(s)
                    </button>
                </div>


            </div>
        </AddContributionMain>
    )
}

export default AddContribution