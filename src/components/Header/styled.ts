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

    .navMobile {
      display: none;
    }


    @media (max-width: 767px) {

      .navMobile {
        display: block;
      }

      .nav {
        display: none;
      }

      .logo {
        .logo {
          .img {
            padding-right: ${props => props.theme.spacing(2)};
          }

          h1 {
            font-size: 16px;
            margin-left: ${props => props.theme.spacing(2)};
          }
        }
      }
    }

    @media(max-width: 1279px) and (min-width: 1025px) {
      width: 1024px;
    };

    @media(max-width: 1024px) and (min-width: 768px) {
      width: 768px;
    };

    @media(max-width: 767px) {
      width: 300px;
    }

    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: block;
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
