import React from 'react';
import StyledCopyrigth from './styled';

const Copyrigth: React.FC= () => {
  return (
    <StyledCopyrigth>
      <div className='containerCopyrigth'>
          <div className="copyrigth">
              <img src={'/assets/copyrigth.svg'} alt="Ícone de Copyrigth" />
            <p>Direitos resevados 2021 | André Viana</p>
          </div>
        </div>
    </StyledCopyrigth>
  )
}

export default Copyrigth;
