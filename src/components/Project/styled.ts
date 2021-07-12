import styled from 'styled-components';

const StyledProject = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 0;
  position: relative;

  .cardProject {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: ${props => props.theme.spacing(8)};


  }
`


export default StyledProject
