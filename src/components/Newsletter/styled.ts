import styled from 'styled-components';

const StyledNewsletter = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${props => props.theme.spacing(11)};

  background-color: ${props => props.theme.colors.secondary};

  padding-bottom: ${props => props.theme.spacing(5)};

  @media(max-width: 767px) {
    padding-bottom: ${props => props.theme.spacing(4)};
  }

  .apresentation {
    width: 400px;
    text-align: center;
    margin-top: ${props => props.theme.spacing(-3)};
    background-color: ${props => props.theme.colors.primary};
    padding: ${props => props.theme.spacing(0.75)} 0;

    @media(max-width: 767px) {
      width: 300px;
    }

    border-radius: 5px;

    h2 {
      font-size: ${props => props.theme.spacing(3)};
      font-weight: bold;
      color: ${props => props.theme.colors.white};
      letter-spacing: 0.6px;

      @media(max-width: 767px) {
        font-size: ${props => props.theme.spacing(2.25)};
      }
    }
  }

  .calling {
    margin-top: ${props => props.theme.spacing(5)};
    text-align: center;

    p {
      color: ${props => props.theme.colors.white};
      font-size: ${props => props.theme.spacing(2.25)};
      width: 650px;
      text-align: center;
      font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
      font-weight: 400;

      @media(max-width: 767px) {
        font-size: ${props => props.theme.spacing(2)};
        width: 300px;
      }
    }

    a {
      display: block;
      margin-top: ${props => props.theme.spacing(5)};

      button {
        width: 300px;
        border-radius: 5px;
        background-color: ${props => props.theme.colors.primary};
        box-shadow: inset 0px 12px 25px rgb(0 0 0 / 25%);
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 0.4px;
        font-size: ${props => props.theme.spacing(3)};
        color: ${props => props.theme.colors.white};
        padding: ${props => props.theme.spacing(1.25)} 0;

        &:hover {
          transform: scale(1.02);

          @media(max-width: 767px) {
            transform: none;
          }
        }
      }
    }
  }
`

export default StyledNewsletter;
