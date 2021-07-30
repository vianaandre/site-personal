import React from 'react';
import StyledCopyrigth from './styled';
import CopyrigthIcom from '../../assets/copyrigth.svg';

const Copyrigth: React.FC= () => {
  return (
    <StyledCopyrigth>
      <div className='containerCopyrigth'>
          <div className="copyrigth">
              <CopyrigthIcom />
            <p>Direitos resevados 2021 | André Viana</p>
          </div>
        </div>
    </StyledCopyrigth>
  )
}

export default Copyrigth;
