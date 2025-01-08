'use client';

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import ThemeProvider from './ThemeProvider';

const BasicProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

export default BasicProviders;
