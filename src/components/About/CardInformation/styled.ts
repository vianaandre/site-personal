/* eslint-disable no-unused-vars */
import styled from 'styled-components';

export const StyledCardInformation = styled.li`
  display: flex;

  margin-bottom: ${props => props.theme.spacing(4)};

  img {
    width: 30px;
    height: 30px;

    margin-right: ${props => props.theme.spacing(2.25)};
  }

  p {
    font-size: ${props => props.theme.spacing(3)};
    font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
    color: ${props => props.theme.colors.colorText};
  }
`;

export default StyledCardInformation;
