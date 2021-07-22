import React, { useContext, useEffect, useState } from 'react';

import { CircularProgress } from '@material-ui/core';
import StyledResponse from './styled';
import ContextForm from '../../../../context/ContextForm';
import Sucess from '../../../../assets/sucess.svg';
import Error from '../../../../assets/error.svg';
import theme from '../../../../styles/theme';

type ResponseProps = {
  response: string;
  colorFont: string;
  colorBackground: string;
}

const Response: React.FC<ResponseProps> = ({ response, colorFont, colorBackground }) => {
  const [ documentWidth, setDocumentWidth ] =useState(Boolean);
  const { loading, request } = useContext(ContextForm)

  useEffect(() => {
    const document = window.innerWidth;

    const documentSize = document > 767 ? true : false

    setDocumentWidth(documentSize)
  })

  return (
    <StyledResponse>

      {loading ?  <div className="responseSend" style={{ backgroundColor: colorBackground  }}>
        <p style={{ color: colorFont }} >
          {response}
        </p>
        {request ? <Sucess /> : <Error />}
      </div> : <div className="circularProgress" >
        <CircularProgress size={documentWidth ? 100 : 60} style={{ color: theme.colors.primary}} />
      </div>
      }

    </StyledResponse>
  )
}

export default Response;
