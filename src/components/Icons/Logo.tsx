import { useThemeContext } from '@contexts';
import React from 'react';

const Logo = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect x="0.5" width="15" height="16" fill="url(#pattern0_3787_19)" />
      <defs>
        <pattern id="pattern0_3787_19" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use
            xlinkHref="#image0_3787_19"
            transform={isDark ? 'scale(0.00239445 0.00217391)' : 'matrix(0.0169643 0 0 0.015904 0 -0.00892857)'}
          />
        </pattern>
        <image
          id="image0_3787_19"
          width={isDark ? '460' : '448'}
          height={isDark ? '460' : '64'}
          xlinkHref={
            theme === 'light'
              ? 'data:image/png;base64,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'
              : 'data:image/png;base64,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'
          }
        />
      </defs>
    </svg>
  );
};

export default Logo;
