import styled from 'styled-components';


const StyledMenuNavMobile = styled.div`

  .drawer {
      .MuiDrawer-root {
      div{
        width: 400px;
        display: flex;
        flex-direction: column;

        a {
          font-size: 48px;
        }
      }
  }
  }



  .MuiDrawer-paperAnchorRight {
    width: 400px;
  }

  .buttonBurguer {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;

    div{
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

export default StyledMenuNavMobile;
