import React from 'react'
import Input from '../Input'
import { GetItDoneMain, SetupLabel } from '../StyledSetupIntiative'
import generateOutput from '../../../assets/generateOutput.svg';
import { FloatingLabel, Form } from 'react-bootstrap';
import Select from '../Select';


const GenerateOutput = () => {
    const options = ['Franz Fisher (You)']
    return (
        <GetItDoneMain>
            <div className='get-done'>
                <img src={generateOutput} alt="get it done" />
                <p className='text'>Generate Output</p>
            </div>

            <Input placeholder='Your Initiative' value='Increase product sales this quarter by 30 percent' label='What is your Initiative?' />

            <SetupLabel>
                <label htmlFor="" className='label'>What is your Initiative?</label>
            </SetupLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Why is this important? (Optional)">
                <Form.Control
                    as="textarea"
                    placeholder="Give some context into your Initiative (Optional) "
                    style={{ height: '63px' }}
                />
            </FloatingLabel>
            
            <Input placeholder='' value='' label='Target Volume of Output' />
            <Input placeholder='' value='' label='Align to Additional Key Results (Optional)' />

            <SetupLabel>
                <label htmlFor="" className='label'>Owner</label>
            </SetupLabel>
            <Select options={options} />
        </GetItDoneMain>
    )
}

export default GenerateOutput