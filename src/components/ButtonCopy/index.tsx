import React, { useEffect, useState } from 'react';

import StyledButton from './styled';

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
          <img src={'/assets/check.svg'} alt="Logo de Check" />
          <p>Copiado</p>
        </div> : <img src={'/assets/shareLink.svg'} alt="Logo de Link" /> }
      </button>
    </StyledButton>
  )
}

export default ButtonCopy;
