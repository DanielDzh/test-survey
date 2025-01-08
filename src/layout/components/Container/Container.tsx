'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 80px;
  padding-right: 80px;
  @media (max-width: 768) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
