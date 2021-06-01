import React, { memo, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Preloader from './atoms/Preloader';
import theme from './theme';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import PasswordForgot from './screens/PasswordForgot';
import PasswordReset from './screens/PasswordReset';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<Preloader />}>
        <Routes basename='/admin'>
          <Route path='login' element={<Login />} />
          <Route path='forgot-password' element={<PasswordForgot />} />
          <Route path='reset-password/:token' element={<PasswordReset />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
