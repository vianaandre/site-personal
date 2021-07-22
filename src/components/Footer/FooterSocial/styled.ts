import styled from 'styled-components';


const StyledFooterSocial = styled.div`

  .linkEmail {
    p {
      display: flex;
      margin-top: ${props => props.theme.spacing(1.75)};
      color: ${props => props.theme.colors.colorText};
      font-weight: 600;

      @media(max-width: 767px) {
        margin-top: ${props => props.theme.spacing(2)}
      }
    }

    p::before {
      content: "";
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      background-color: #19B600;
      margin: auto 0;
      margin-right: ${props => props.theme.spacing(1.25)};
    }
  }

  .socialMedia {

    margin-top: ${props => props.theme.spacing(3.75)};

    @media(max-width: 767px) {
      margin-top: ${props => props.theme.spacing(3)};
    }

    ul {
      display: flex;
      justify-content: space-between;
    }
  }

`

export default StyledFooterSocial;
