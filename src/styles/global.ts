import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    background-color: ${props => props.theme.dark.colors.secondary};
    height: 100vh;


  }
`

export default GlobalStyled;
