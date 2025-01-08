'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { Container, Header, ContentWrapper } from './components';
import { Loader } from '@components';
import { GlobalStyle } from '@app/GlobalStyles.styled';

const Layout = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    !isLoading && (
      <Container>
        <GlobalStyle />
        <Header />
        <ContentWrapper>{children}</ContentWrapper>
      </Container>
    )
  );
};

export default Layout;
