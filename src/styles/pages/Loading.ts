import styled from 'styled-components';

const StyledLoading = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .circularProgress {
    margin-top: ${props => props.theme.spacing(6)};
  }
`;

export default StyledLoading;
