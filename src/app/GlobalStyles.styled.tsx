'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html,
body {
  max-width: 100vw;
  height: 100%;
  overflow-x: hidden;
}

html {
  background: ${({ theme }) => theme.background};
}

body {
  font-family: 'Open Sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.3s ease, color 0.3s ease;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

h1 {
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
}

h2 {
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  }

p {
  font-size: 14px;
  line-height: 25.2px;
}
`;
