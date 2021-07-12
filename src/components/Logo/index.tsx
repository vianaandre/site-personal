import React from 'react';

import ImageLogo from '../../assets/logo.svg';
import StyledLogo from './styled';

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <div className="logo">
        <div className="img">
          <ImageLogo />
        </div>
        <h1>André Vi<span>ana</span></h1>
      </div>
    </StyledLogo>
  )
}

export default Logo
