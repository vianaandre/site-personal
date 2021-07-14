import styled from 'styled-components';

const StyledButton = styled.div`
  border-radius: 5px;

  text-align: center;

  margin-right: ${props => props.theme.spacing(1.75)};

  .linkAction {

    padding: ${props => props.theme.spacing(.5)} 0;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    a {
      font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
      font-size: ${props => props.theme.spacing(1.75)};
      color: ${props => props.theme.colors.white};
      font-weight: 550;

      text-transform: uppercase;
    }
  }

  &:hover {
      transform: scale(1.03);
    }

`;

export default StyledButton
