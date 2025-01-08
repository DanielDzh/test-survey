'use client';

import styled, { css } from 'styled-components';

const getButtonVariantStyles = (variant: 'default' | 'unstyled') => {
  switch (variant) {
    case 'unstyled':
      return css`
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      `;
    case 'default':
    default:
      return css`
        padding-left: 15px;
        padding-right: 15px;
        border-radius: 16px;
        border: 1px solid rgba(224, 224, 224, 1);
        background: rgba(234, 238, 247, 1);
        box-shadow: 2px 2px 6px 0px rgba(84, 60, 151, 0.25);
        transition: color 0.3s ease;

        &:hover {
          color: #ffffff;
        }

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(165deg, #141333 -33%, #202261 15%, #543c97 55%, #6939a2 75%);
          z-index: -1;
          transition: opacity 0.5s ease;
          opacity: 0;
        }

        &:hover::before {
          opacity: 1;
        }
      `;
  }
};

export const Button = styled.button<{ variant?: 'default' | 'unstyled' }>`
  height: 64px;
  width: 330px;
  min-width: fit-content;
  max-width: 100%;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 0;
  cursor: pointer;

  ${({ variant = 'default' }) => getButtonVariantStyles(variant)}
`;
