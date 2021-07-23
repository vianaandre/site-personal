import styled from 'styled-components';

const StyledNewsletter = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${props => props.theme.spacing(11)};

  background-color: ${props => props.theme.colors.secondary};

  padding-bottom: ${props => props.theme.spacing(5)};

  .apresentation {
    width: 400px;
    text-align: center;
    margin-top: ${props => props.theme.spacing(-3)};
    background-color: ${props => props.theme.colors.primary};
    padding: ${props => props.theme.spacing(0.75)} 0;

    border-radius: 5px;

    h2 {
      font-size: ${props => props.theme.spacing(3)};
      font-weight: bold;
      color: ${props => props.theme.colors.white};
      letter-spacing: 0.6px;
    }
  }

  .calling {
    margin-top: ${props => props.theme.spacing(3.75)};

    p {
      color: ${props => props.theme.colors.white};
      font-size: ${props => props.theme.spacing(2.25)};
      width: 650px;
      text-align: center;
      font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
      font-weight: 400;
    }
  }

  .form {
    display: flex;
    margin-top: ${props => props.theme.spacing(3.75)};
    width: 650px;

    input {
      width: 100%;
      border: none;
      font-size: ${props => props.theme.spacing(2.25)};
      font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
      padding-left: ${props => props.theme.spacing(2.5)};
      border-radius: 5px 0px 0px 5px;
      font-weight: 500;
      color: ${props => props.theme.colors.colorText};

      &:focus {
        outline: none;
        box-shadow: none;
      }
    }

    button {
      font-size: ${props => props.theme.spacing(3)};
      padding: ${props => props.theme.spacing(1.25)} ${props => props.theme.spacing(6)};

      color: ${props => props.theme.colors.white};
      background-color: ${props => props.theme.colors.primary};
      border: none;

      font-weight: bold;
      border-radius: 0px 5px 5px 0px;
    }
  }
`

export default StyledNewsletter;
