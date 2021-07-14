import styled from 'styled-components';

const StyledProcess = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 0;
  position: relative;

  margin-top: ${props => props.theme.spacing(8)};

  text-align: center;

  .cardsProcess {
    display: flex;
    justify-content: space-between;

    margin-top: ${props => props.theme.spacing(6)};
  }
`;

export default StyledProcess;
