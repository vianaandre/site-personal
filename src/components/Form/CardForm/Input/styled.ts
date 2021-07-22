import styled from 'styled-components';

const StyledInput = styled.div`
  margin-bottom: ${props => props.theme.spacing(4)};

  input {
    width: 50vw;
    min-width: 650px;
    max-width: 800px;

    padding: ${props => props.theme.spacing(1.5)} ${props => props.theme.spacing(2.)};
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.white};

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
    }
  }

  .alertError {
    font-size: ${props => props.theme.spacing(1.75)};
    display: flex;
    align-items: center;

    p {
      color: red;
    }

    svg {
      margin-left: ${props => props.theme.spacing(1)};
    }

    @media(max-width: 767px) {
      font-size: ${props => props.theme.spacing(1.5)};

      svg {
        width: 10px;
        margin-left: ${props => props.theme.spacing(0.5)};
      }
    }
  }

`

export default StyledInput;
