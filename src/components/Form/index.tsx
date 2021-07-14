import React, { useState } from 'react';

import Title from '../UI/Title';
import StyledForm from './styled';
import ContextForm from '../../context/ContextForm';
import CardForm from './CardForm';
import Response from './CardForm/Response';
import theme from '../../styles/theme';

const Form: React.FC = () => {

  const [ sucess, setSucess ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ request, setRequest ] = useState(false);

  const responseValue = request ? 'Formulário Enviado com Sucesso!' : 'Erro no envio do Formulário'
  const colorFont = request ? theme.colors.sucess.colorText : theme.colors.error.colorText
  const backgroundColor = request ? theme.colors.sucess.background : theme.colors.error.background

  return (
    <ContextForm.Provider value={{ sucess, setSucess, loading, setLoading, request, setRequest}}>
      <StyledForm>
        <Title  sectionTitle={'Contato'} effect={true} description={''} />
        <div className='contentContact'>
          <div className='informationEmail'>
            <h3>Entre em contato comigo!</h3>
            <a href='mailto:andredapperviana@gmail.com' target='_blank' rel="noreferrer">andredapperviana@gmail.com 📩</a>
          </div>
          <div className='divider'></div>
          <div className='form'>
            {sucess ? <Response  response={responseValue} colorFont={colorFont}  colorBackground={backgroundColor} /> : <CardForm />}
          </div>
        </div>
      </StyledForm>
    </ContextForm.Provider>
  )
}

export default Form;
