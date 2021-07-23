import React, { useEffect, useState } from 'react';
import StyledShare from './styled';

import ShareFace from '../../assets/shareFace.svg';
import ShareLinkedin from '../../assets/shareLinkedin.svg';
import ShareLink from '../../assets/shareLink.svg';
import ShareTwitter from '../../assets/shareTwitter.svg';
import Container from '../../styles/container';


const Share: React.FC = () => {

  const [ urlCurrent, setUrlCurrent ] = useState(String)


  useEffect(() => {

    const href = window.location.href
    setUrlCurrent(href)
    console.log(urlCurrent)

  }, [])

  const copyUrl = () => {
    navigator.clipboard.writeText(urlCurrent).then(function() {
      console.log('sucess')
    }, function() {
      console.log('errror')
    });
  }

  return (
    <Container>
      <StyledShare>
        <h2>Compartilhar:</h2>
        <div className="iconShare">
          <a href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/blog/">
            <ShareFace />
          </a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=http://localhost:3000/blog/" target={'_blank'} rel="noreferrer">
            <ShareLinkedin />
          </a>
          <a href={"https://twitter.com/intent/tweet?text=Blog sobre Tecnologia, Programação e Ecnonomia+" + urlCurrent} target={'_blank'} rel="noreferrer">
            <ShareTwitter />
          </a>
          <button onClick={copyUrl}>
            <ShareLink />
          </button>
        </div>
      </StyledShare>
    </Container>
  )
}

export default Share;
