'use client';

import { themes } from '@constants/themes';
import { ThemeContext } from '@contexts';
import { Themes } from '@types';
import { usePathname } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider as AppThemeProvider } from 'styled-components';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Themes>('light');

  useEffect(() => {
    if (pathname.includes('howItWorks') && theme != 'dark') {
      setTheme('dark');
    } else if (theme == 'dark') {
      setTheme('light');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const values = {
    toggleTheme,
    theme,
  };

  return (
    <ThemeContext.Provider value={values}>
      <AppThemeProvider theme={themes[theme]}>{children}</AppThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
