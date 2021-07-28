import React, { useEffect, useState } from 'react';

import StyledButton from './styled';
import ShareLink from '../../assets/shareLink.svg';
import Check from '../../assets/check.svg';

const ButtonCopy: React.FC = () => {
  const [ urlCurrent, setUrlCurrent ] = useState(String)
  const [ sucess, setSucess ] = useState(false)

  useEffect(() => {

    const href = window.location.href
    setUrlCurrent(href)

  }, [])

  const copyUrl = () => {
    navigator.clipboard.writeText(urlCurrent).then(function() {
      setSucess(true)
    }, function() {
      setSucess(false)
    });
  }


  return (
    <StyledButton>
      <button onClick={copyUrl}>
        { sucess ? <div className="check">
          <Check />
          <p>Copiado</p>
        </div> : <ShareLink /> }
      </button>
    </StyledButton>
  )
}

export default ButtonCopy;
