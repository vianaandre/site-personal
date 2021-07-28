import styled from 'styled-components';

const StyledButton = styled.div`
  button {
    cursor: pointer;
    background: #fff;

    .check {
      display: flex;
      align-items: center;

      p {
        font-size: ${props => props.theme.spacing(1.5)};
        color: ${props => props.theme.colors.white};
        padding: 4px 5px;
        font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
        border-radius: 0px 3px 3px 0px;
        background-color: ${props => props.theme.colors.sucess.colorText};
      }
    }
  }
`

export default StyledButton;
