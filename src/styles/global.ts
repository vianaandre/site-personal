import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

    /* RESET */
    a {
	text-decoration: none;
  }
  ol, ul {
	list-style: none;
  }
  html, body, div, span, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, a, em, img, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, article, footer, header, nav, section, main {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  h1, h2, h3, h4, h5, h6, p, a, ul {
    font-weight: normal;
  }
  html, body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.family.primary};
  };

  button {
    box-shadow: none;
    border: none;
    font-size: 0;
  }

`

export default GlobalStyled;
