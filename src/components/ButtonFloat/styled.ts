import styled from 'styled-components';

const StyledButtonFloat = styled.button`

  a {
    position: fixed;
    bottom: 20px;
    right: 20px;

    padding: ${props => props.theme.spacing(2.5)} ${props => props.theme.spacing(2.25)};
    border-radius: 50%;

    background-color: ${props => props.theme.colors.secondary};
    opacity: 0.5;

    &:hover {
      transform: scale(1.1);
      transition: 200ms;
    }

    @media(max-width: 767px) {
      bottom: 10px;
      right: 10px;

      &:hover {
        transform: none;
        transition: none;
      }
    }
  }

`

export default StyledButtonFloat;
