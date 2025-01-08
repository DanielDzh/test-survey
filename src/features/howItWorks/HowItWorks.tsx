'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@components';
import { Paragraph, Wrapper } from './HowItWorks.module';

const HowItWorks = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const nextQuestionId = searchParams.get('nextQuestionId');

  const handlePress = () => {
    router.push(`/survey/${nextQuestionId}`);
  };

  return (
    <Wrapper>
      <h1>So how does it work?</h1>
      <Paragraph>
        We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to
        tailor-make your astrological insights, based on your answers. We`re going to change your relationship with
        astrology.
      </Paragraph>
      <Button onClick={handlePress}>Next</Button>
    </Wrapper>
  );
};

export default HowItWorks;
