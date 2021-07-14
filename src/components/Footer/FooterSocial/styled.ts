import styled from 'styled-components';


const StyledFooterSocial = styled.div`
  .linkEmail {
    p {
      display: flex;
      margin-top: ${props => props.theme.spacing(1.75)};
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

    ul {
      display: flex;
    }
  }

`

export default StyledFooterSocial;
