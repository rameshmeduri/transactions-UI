import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Root from './Components/Root';
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0c77b9'
    },
    secondary: {
      main: '#12b44e'
    }
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Root />
  </MuiThemeProvider>
);

render(<App />, document.querySelector('#root'));
