import React from 'react'
import Input from '../Input'
import { GetItDoneMain, SetupLabel } from '../StyledSetupIntiative'
import getDone from '../../../assets/getDone.svg';
import { FloatingLabel, Form } from 'react-bootstrap';
import Select from '../Select';


const GetItDone = () => {
    const options = ['Franz Fisher (You)']
  return (
    <GetItDoneMain>
    <div className='get-done'>
        <img src={getDone} alt="get it done" />
        <p className='text'>Get it Done</p>
    </div>

    <Input placeholder='Your Initiative' value='Increase product sales this quarter by 30 percent' label='What is your Initiative?' />

    <SetupLabel>
        <label htmlFor="" className='label'>Why is this important? (Optional)</label>
    </SetupLabel>
    <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '63px' }}
        />
    </FloatingLabel>
    <Input placeholder='' value='' label='Align to More Key Results (Optional)' />

    <SetupLabel>
        <label htmlFor="" className='label'>Owner</label>
    </SetupLabel>
    <Select options={options} />
</GetItDoneMain>
  )
}

export default GetItDone