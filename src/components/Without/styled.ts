import styled from 'styled-components';

const StyledWithout = styled.div`
  width: 100%;
    padding: ${props => props.theme.spacing(8)} 0;
    display: flex;
    justify-content: center;

    h2 {
      font-size: ${props => props.theme.spacing(4.5)};
      text-transform: uppercase;
      color: ${props => props.theme.colors.colorText};
      font-weight: 600;
      opacity: 0.5;
    }
`

export default StyledWithout;
