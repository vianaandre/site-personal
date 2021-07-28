import styled from 'styled-components';


const StyledNav = styled.div`


  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 70vw;
  height: 85%;

  nav {

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 60vw;

    a {
    text-align: center;
    width: 100px;
    font-size: ${props => props.theme.spacing(3)};

    color: ${props => props.theme.colors.colorText};
    font-weight: 600;
    }
  }

`

export default StyledNav;
