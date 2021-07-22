import styled from 'styled-components';

const StyledProject = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 0;
  position: relative;

  padding-top: ${props => props.theme.spacing(1)};

  @media(max-width: 767px) {
    padding-top: 0;
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

  .cardProject {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: ${props => props.theme.spacing(6)};

    @media(max-width: 1279px) and (min-width: 1025px) {
      justify-content: center;
    };

    @media(max-width: 1024px) and (min-width: 768px) {
      justify-content: center;
    };

    @media(max-width: 767px) {
      margin-top: ${props => props.theme.spacing(6)}
    }


  }
`


export default StyledProject
