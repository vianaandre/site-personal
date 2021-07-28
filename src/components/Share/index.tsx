import React from 'react';
import StyledShare from './styled';

import ShareFace from '../../assets/shareFace.svg';
import ShareLinkedin from '../../assets/shareLinkedin.svg';
import ButtonCopy from '../ButtonCopy';
import ShareTwitter from '../../assets/shareTwitter.svg';

const Share: React.FC<{ href: string[], }> = ({ href }) => {
  return (
      <StyledShare>
        <h2>Compartilhar:</h2>
        <div className="iconShare">
          <a href={'https://www.facebook.com/sharer/sharer.php?u=' + href[0]} target={'_blank'} rel="noreferrer">
            <ShareFace />
          </a>
          <a href={'https://www.linkedin.com/sharing/share-offsite/?url=' + href[1]} target={'_blank'} rel="noreferrer">
            <ShareLinkedin />
          </a>
          <a href={'https://twitter.com/intent/tweet?text='+ href[2]} target={'_blank'} rel="noreferrer">
            <ShareTwitter />
          </a>
          <ButtonCopy />
        </div>
      </StyledShare>
  )
}

export default Share;
