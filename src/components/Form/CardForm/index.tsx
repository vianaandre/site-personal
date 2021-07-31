import React, { useContext } from 'react';

import StyledCardForm from './styled';
import Input from './Input';
import useForm from '../../../Hooks/useForm';
import ContextForm from '../../../context/ContextForm';
import SendEmail from '../../../services/sendEmail';

const CardForm: React.FC = () => {

  const name = useForm('name');
  const telefone = useForm('telefone');
  const email = useForm('email');
  const text = useForm('text');

  const { setSucess } = useContext(ContextForm);
  const { setLoading } = useContext(ContextForm);
  const { setRequest } = useContext(ContextForm);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(name.validate() && telefone.validate() && email.validate()) {
      console.log('Enviar')
      setSucess(true)

      const data = {
        name: name.value,
        telefone: telefone.value,
        email: email.value,
        text: text.value,
      }

      const responseRequest = await SendEmail(data)

      if(responseRequest === 'Error') {
        setLoading(true)
        setRequest(false)
      }else {
        setLoading(true)
        setRequest(responseRequest)
      }

    } else {
      console.log('Não Enviado')
    }
  }

  return (
    <StyledCardForm>
      <form onSubmit={handleSubmit}>
        <div className="nameTel">
          <Input type={'text'} id={'name'} placeholder={'Nome'} value={name.value} error={name.error} handleChange={name.onChange} onBlur={name.onBlur} />
          <Input  type={'tel'} id={'telefone'} placeholder={'45 988040665'} value={telefone.value} error={telefone.error}  handleChange={telefone.onChange} onBlur={telefone.onBlur} />
        </div>
        <Input type={'email'} id={'email'} placeholder={'Digite seu melhor Email'} value={email.value} error={email.error} handleChange={email.onChange} onBlur={email.onBlur} />
        <div>
          <label htmlFor={'text'}></label>
          <textarea id={'text'} name={'text'} value={text.value} placeholder={'Mensagem'} onChange={text.onChange} onBlur={text.onBlur} rows={5} />
        </div>
        <button>Enviar</button>
      </form>
    </StyledCardForm>
  )
}

export default CardForm;
