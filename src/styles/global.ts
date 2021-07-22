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
  .containerCopyrigth {
    width: 1280px;
    margin: 0 auto;
    padding: 0;
    position: relative;

    @media(max-width: 1279px) and (min-width: 1025px) {
      width: 1024px;
    };

    @media(max-width: 1024px) and (min-width: 768px) {
      width: 768px;
    };

    @media(max-width: 767px) {
      width: 300px;
    }

    .copyrigth {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: ${props => props.theme.spacing(6)};
      margin-bottom: ${props => props.theme.spacing(6)};

      p {
        margin-left: ${props => props.theme.spacing(3)};
        font-size: ${props => props.theme.spacing(2.25)};
        font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
        font-weight: 500;
        color: ${props => props.theme.colors.colorText};
      }

      @media(max-width: 767px) {
        width: 300px;
        justify-content: space-between;
        margin-top: ${props => props.theme.spacing(4)};
        margin-bottom: ${props => props.theme.spacing(4)};
        p {
          font-size: ${props => props.theme.spacing(1.75)};
          margin-left: ${props => props.theme.spacing(0)};
        }
      }
    }
  }
`

export default GlobalStyled;
