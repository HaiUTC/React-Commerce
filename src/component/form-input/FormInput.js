<<<<<<< HEAD
import React from 'react';
import {FormInputContainer,Group,Label} from'./FormInput-Styled'
const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <Group>
            <FormInputContainer onChange={handleChange} {...otherProps}/>
            {
                label ?
                (
                    <Label {...otherProps}>{label}</Label>
                )
                : null
            }
        </Group>
    );
}

=======
import React from 'react';
import './FormInput.scss'
const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps}/>
            {
                label ?
                (
                    <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
                )
                : null
            }
        </div>
    );
}

>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
export default FormInput;