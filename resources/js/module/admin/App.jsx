import React, { Suspense } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Preloader from './atoms/Preloader';
import theme from './theme';
import Login from './screens/Login';
import PasswordForgot from './screens/PasswordForgot';
import PasswordReset from './screens/PasswordReset';
import Dashboard, { DashboardRoot, DashboardGeneral } from './screens/Dashboard';
import ApiProvider from './providers/ApiProvider';
import AuthProvider from './providers/AuthProvider';
import StoreProvider from './providers/StoreProvider';
import Route from './molecules/Route';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApiProvider>
        <AuthProvider>
          <StoreProvider>
            <Suspense fallback={<Preloader />}>
              <Routes basename='/admin'>
                <Route redirectIfAuthenticated path='login' element={<Login />} />
                <Route redirectIfAuthenticated path='forgot-password' element={<PasswordForgot />} />
                <Route redirectIfAuthenticated path='reset-password/:token' element={<PasswordReset />} />
                <Route isPrivate path='dashboard' element={<Dashboard />}>
                  <Route path='/' element={<DashboardRoot />} />
                  <Route path='general' element={<DashboardGeneral />} />
                </Route>
              </Routes>
            </Suspense>
          </StoreProvider>
        </AuthProvider>
      </ApiProvider>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
