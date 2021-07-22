import styled from 'styled-components';


const StyledNav = styled.nav`

  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  justify-content: center;
  padding-left: ${props => props.theme.spacing(5)};

  a {
    font-size: ${props => props.theme.spacing(3)};
    margin-bottom: ${props => props.theme.spacing(5)};

    color: ${props => props.theme.colors.colorText};
    font-weight: 600;
  }
`

export default StyledNav;
