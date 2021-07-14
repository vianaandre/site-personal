import React from 'react';

import { FormProps } from '../../../../types/types';
import StyledInput from './styled';
import AlertError from '../../../../assets/alertError.svg';

const Input: React.FC<FormProps> = ({ value, type, placeholder, id, error, handleChange, onBlur }) => {
  return (
    <StyledInput>
      <label htmlFor={id} />
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        name={id}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
      />
      {error && <div className='alertError'>
        <p>{error}</p>
        <AlertError />
      </div> }
    </StyledInput>
  )
}

export default Input;
