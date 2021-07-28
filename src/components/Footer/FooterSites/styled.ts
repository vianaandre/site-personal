import styled from 'styled-components';

const StyledFooterSites = styled.div`
  .listLinks {

    margin-top: ${props => props.theme.spacing(2.5)};

    li {

      a {
        p {
          width: 305px;
          margin-bottom: ${props => props.theme.spacing(2)};

          @media(max-width: 767px) {
            width: 300px;
          }

          background: #2237FF;
          box-shadow: inset 0px 12px 25px rgba(0, 0, 0, 0.25);

          font-size: ${props => props.theme.spacing(2.25)};
          font-weight: 600;
          color: ${props => props.theme.colors.white};

          padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2.5)};

          border-radius: 5px;
        }
      }
    }
  }

  @media(max-width: 767px) {
    margin-bottom: ${props => props.theme.spacing(1)};

    .listLinks {
      margin-top: ${props => props.theme.spacing(2)};
    }
  }
`

export default StyledFooterSites;
