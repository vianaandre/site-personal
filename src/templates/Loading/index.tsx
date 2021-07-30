import React from 'react';

import { CircularProgress } from '@material-ui/core';
import StyledLoading from '../../styles/pages/Loading';
import theme from '../../styles/theme';

const Loading: React.FC = () => {
  return (
    <StyledLoading>
      <div className="circularProgress">
        <CircularProgress size={120} style={{ color: theme.colors.primary }} />
      </div>
    </StyledLoading>
  )
}

export default Loading;
