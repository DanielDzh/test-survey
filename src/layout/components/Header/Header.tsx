'use client';

import React from 'react';
import { Header as StyledHeader, LogoWrapper } from './Header.styled';
import { Logo } from '@components';
import { ButtonGoBack } from '../ButtonGoBack';

const Header = () => {
  return (
    <StyledHeader>
      <ButtonGoBack />
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </StyledHeader>
  );
};

export default Header;
