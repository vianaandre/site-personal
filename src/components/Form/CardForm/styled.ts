import styled from 'styled-components';

const StyledCardForm = styled.div`
  form {

    margin-top: ${props => props.theme.spacing(1)};
    margin-left: ${props => props.theme.spacing(1)};

    @media(max-width: 1279px) and (min-width: 768px) {
      margin-left: 0;
      margin-top: 0;
    }

    @media(max-width: 767px) {
      margin-left: 0;
      margin-top: ${props => props.theme.spacing(3)};
    }

    .nameTel {

      display: flex;

      gap: 2vw;

      input {
        width: 24vw;
        min-width: 300px;
      }

      @media(max-width: 767px) {
        flex-direction: column;
      }

      @media(max-width: 767px) {
        gap: 0;
      }
    }

    textarea {
      width: 50vw;
      min-width: 650px;
      max-width: 800px;

      padding: ${props => props.theme.spacing(1.5)} ${props => props.theme.spacing(2.)};
      border: none;
      border-radius: 5px;
      background-color: ${props => props.theme.colors.white};
      margin-bottom: ${props => props.theme.spacing(4)};

      font-size: ${props => props.theme.spacing(2)};
      font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};

      color: ${props => props.theme.colors.colorText};

      &:focus {
        outline: none;
        box-shadow: none;
      }

      @media(max-width: 767px) {
        width: 300px;
        min-width: 200px;
        margin-bottom: ${props => props.theme.spacing(3)};
      }
    }

    button {
      display: block;
      width: 25vw;
      padding: ${props => props.theme.spacing(1.5)} 0;
      background-color: ${props => props.theme.colors.primary};
      font-size: ${props => props.theme.spacing(3)};
      font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
      font-weight: 600;
      color: ${props => props.theme.colors.white};

      text-transform: uppercase;

      border-radius: 5px;

      &:hover {
        transform: scale(1.03);
      }

      @media(max-width: 767px) {
        width: 100%;

        &:hover {
          transform: none;
        }
      }
    }
  }
`

export default StyledCardForm;
