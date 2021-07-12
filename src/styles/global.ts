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

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${props => props.theme.spacing(5)};
    margin-top: ${props => props.theme.spacing(7)};
    width: 100%;

    @media(max-width: 767px) {
      justify-content: space-between;
    }

    svg {
      margin-right: ${props => props.theme.spacing(3)};

      @media(max-width: 767px) {
        margin-right: 0;
      }
    };

      p {
        font-size: ${props => props.theme.spacing(2.25)};
        font-weight: 500;
        font-family: ${props => props.theme.fonts.family.primary};
        color: ${props => props.theme.colors.colorText};

        @media(max-width: 767px) {
          font-size: ${props => props.theme.spacing(1.75)};
        }
      }
  }
`

export default GlobalStyled;
