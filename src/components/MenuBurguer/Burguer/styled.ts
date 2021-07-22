import styled from 'styled-components';

const StyledBurguer = styled.div`


  button {

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 200;

    &:focus {
    outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: ${props => props.theme.colors.secondary};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;
    }

  }
`

export default StyledBurguer;
