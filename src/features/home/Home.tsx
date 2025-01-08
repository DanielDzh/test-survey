'use client';

import { Button } from '@components';
import { useRouter } from 'next/navigation';
import { H2 } from './Home.styled';

const Home = () => {
  const router = useRouter();

  const handleStartSurvey = () => {
    router.push('/survey/1');
  };
  return (
    <>
      <h1>Welcome to the Survey App</h1>
      <H2>Click below to start the survey:</H2>
      <Button onClick={handleStartSurvey}>Start Survey</Button>
    </>
  );
};

export default Home;
