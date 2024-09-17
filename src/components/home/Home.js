import React from 'react';
import Title from './Title';
import ChallengesSection from './ChallengesSection';
import SolutionSection from './SolutionSection';
import Services from './Services';
import Expertise from './Expertise';
import Portfolio from './Portfolio';

const Home = () => {
  return (
    <div>
      <Title />
      <ChallengesSection />
      <SolutionSection />
      <Services />
      <Expertise />
      <Portfolio />
    </div>
  );
};

export default Home;
