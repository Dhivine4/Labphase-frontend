import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Content from './components/Content';
import { createTheme } from '@mui/material/styles'

const App = () => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Content />
    </ThemeProvider>
  );
};

export default App;