'use client';

import { ArrowLeft, Button } from '@components';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ButtonGoBack = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    setCanGoBack(window.history.length > 1 && pathname != '/');
  }, [pathname]);

  const handleGoBack = () => {
    router.back();
  };

  if (!canGoBack) {
    return null;
  }
  return (
    <Button variant="unstyled" onClick={handleGoBack}>
      <ArrowLeft />
    </Button>
  );
};

export default ButtonGoBack;
