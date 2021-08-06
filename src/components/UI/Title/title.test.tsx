import React from 'react';
import { render }  from '@testing-library/react'
import Title from './index'
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme'

describe("interaction test component Title", () => {
  it('component render test', () => {
    render(
    <ThemeProvider theme={theme}>
      <Title effect={true} sectionTitle={'Teste'} description={'alo'} />
    </ThemeProvider>
    )
  })
})
