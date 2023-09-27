import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { GlobalStyle } from './GlobalStyle';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import isPropsValid from '@emotion/is-prop-valid'
import { theme } from "./theme";
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={isPropsValid} disableVendorPrefixes={false}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </StyleSheetManager>
  </React.StrictMode>
);