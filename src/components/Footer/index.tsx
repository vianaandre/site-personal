import React from 'react';

import FooterAbout from './FooterAbout';
import FooterSites from './FooterSites';
import FooterSocial from './FooterSocial';
import StyledFooter from './styled';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FooterAbout />
      <FooterSites />
      <FooterSocial />
    </StyledFooter>
  )
}

export default Footer;
