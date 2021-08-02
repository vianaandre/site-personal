import React from 'react';

import { FormProps } from '../../../../types/types';
import StyledInput from './styled';

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
        <img src={'/assets/alertError.svg'} alt="Ícone de Alert" />
      </div> }
    </StyledInput>
  )
}

export default Input;
