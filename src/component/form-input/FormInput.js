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

export default FormInput;