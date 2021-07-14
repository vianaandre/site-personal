import { useState, ChangeEvent } from 'react';

type UseFormReturn = {
  value: string;
  error: string;
  setError: unknown;
  onChange: (event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => void;
  onBlur: () => void;
  validate: () => boolean;
}

const types = {
  name: {
    regex: /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/,
    message: 'Nome Inválido'
  },
  telefone: {
    regex: /^\s?[0-9]{2}\s?[0-9]{4,5}[0-9]{4}$/,
    message: 'Telefone Inválido',
  },
  email: {
    regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?)*$/,
    message: 'Email Inválido'
  },
  text: {
    regex: "",
    message: "",
  }
}

const useForm = (type: string): UseFormReturn => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  const validate = (value) => {
    if (value.length === 0) {
      setError("Preencha um Valor Válido")
      return false;
    } else if (!types[type].regex.test(value)) {
      setError(types[type].message)
      return false;
    } else {
      setError(null)
      return true;
    }
  }

  const onChange = (event) => {
    if (error) validate(event.target.value);
    setValue(event.target.value)
  }

  return {
    value,
    error,
    setError,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value)
  }
}

export default useForm;
