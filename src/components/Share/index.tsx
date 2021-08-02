import React from 'react';
import StyledShare from './styled';

import ButtonCopy from '../ButtonCopy';

const Share: React.FC<{ href: string[], }> = ({ href }) => {
  return (
      <StyledShare>
        <h2>Compartilhar:</h2>
        <div className="iconShare">
          <a href={'https://www.facebook.com/sharer/sharer.php?u=' + href[0]} target={'_blank'} rel="noreferrer">
            <img src={'/assets/shareFace.svg'} alt="Ícone do Facebook" />
          </a>
          <a href={'https://www.linkedin.com/sharing/share-offsite/?url=' + href[1]} target={'_blank'} rel="noreferrer">
            <img src={'/assets/shareLinkedin.svg'} alt="Ícone do Linkedin" />
          </a>
          <a href={'https://twitter.com/intent/tweet?text='+ href[2]} target={'_blank'} rel="noreferrer">
            <img src={'/assets/shareTwitter.svg'} alt="Ícone do Twitter" />
          </a>
          <ButtonCopy />
        </div>
      </StyledShare>
  )
}

export default Share;
