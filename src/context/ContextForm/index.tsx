import { createContext } from 'react';

type ContextFormProps = {
  sucess: boolean,
  setSucess: (boolean) => void,
  loading: boolean,
  setLoading: (boolean) => void,
  request: boolean,
  setRequest: (bolean) => void,
}

export const ContextForm = createContext({} as ContextFormProps)

export default ContextForm;
