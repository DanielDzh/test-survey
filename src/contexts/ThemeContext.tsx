'use client';
import { Themes } from '@types';
import { createContext, useContext } from 'react';

type ThemeContextT = {
  toggleTheme: (val: Themes) => void;
  theme: Themes;
};

const themeContextDefaultValues: ThemeContextT = {
  toggleTheme: () => {},
  theme: 'light',
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeContext = createContext<ThemeContextT>(themeContextDefaultValues);
