import React from 'react';

import StyledLogo from './styled';

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <div className="logo">
        <div className="img">
          <img src={'/assets/logo.svg'} alt="Logo do Site" />
        </div>
        <h1>André Vi<span>ana</span></h1>
      </div>
    </StyledLogo>
  )
}

export default Logo
