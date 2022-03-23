import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import { SetupLabel } from './StyledSetupIntiative'

const Input = ({placeholder,label,value}) => {
    
    return (
        <>
        <SetupLabel> 
            <label htmlFor="" className='label'>{label}</label>
        </SetupLabel>
        <InputGroup className='input-group' size="lg">
            <FormControl className='input' value={value} placeholder={placeholder} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        </>
    )
}

export default Input