import React from 'react';
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import { ThemeProvider } from 'styled-components';
import { ServerStyleSheet } from 'styled-components';

import theme from '../styles/theme';
import Copyrigth from '../assets/copyrigth.svg';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render(): JSX.Element {
    return (
      <Html lang="PT-BR">
        <Head>
          <meta charSet="utf-8"/>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,900;1,300&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="https://res.cloudinary.com/andreimagens/image/upload/v1625249601/logo_5bfc398a62.svg" type="image/x-icon" />
        </Head>

        <body>
          <ThemeProvider theme={theme}>
            <Main />
            <NextScript />
            <div className='containerCopyrigth'>
                <div className="copyrigth">
                  <Copyrigth />
                  <p>Direitos resevados 2021 | André Viana</p>
                </div>
            </div>
          </ThemeProvider>
        </body>
      </Html>
    )
  }
}
