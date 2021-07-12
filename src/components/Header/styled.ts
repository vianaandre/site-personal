import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.tertiary};

  header {
    width: 1280px;
    margin: 0 auto;
    padding: 0;
    position: relative;

    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      height: 100px;
      display: flex;
      align-items: center;

      .actionLinks {
        height: 100px;
        display: flex;
        align-items: center;
        margin-left: ${props => props.theme.spacing(6)};

        a {
          height: 100px;
          display: flex;
          align-items: center;
          font-size: ${props => props.theme.spacing(3)};
          color: ${props => props.theme.colors.colorText};
          font-weight: 500;

          &:hover {
            border-bottom: solid 1px ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.primary};
          }

          &:focus {
            border-bottom: solid 1px ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.primary};
          }
        }
      }
    }
  }
`

export default StyledHeader
