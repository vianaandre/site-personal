import React from 'react';

import StyledFooterTitle from './styled';

const FooterTitle: React.FC<{ title: string }> = ( { title } ) => {
  return (
    <StyledFooterTitle>{title}</StyledFooterTitle>
  )
}

export default FooterTitle;
