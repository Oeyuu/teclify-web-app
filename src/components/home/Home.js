import React, { useEffect, useState } from 'react';
import matter from 'gray-matter'; // Parses frontmatter from Markdown
import Title from './Title';
import ChallengesSection from './ChallengesSection';
import SolutionSection from './SolutionSection';
import Services from './Services';
import Expertise from './Expertise';
import Portfolio from './Portfolio';

const Home = () => {
  const [content, setContent] = useState({});

  useEffect(() => {
    fetch('/content/home/index.md')
      .then((res) => res.text())
      .then((text) => {
        const { data } = matter(text); // Parse the markdown file content
        setContent(data);
      });
  }, []);

  return (
    <div>
      <Title title={content.title} />
      <ChallengesSection challenges={content.challenges} />
      <SolutionSection solution={content.solution} />
      <Services services={content.services} />
      <Expertise expertise={content.expertise} />
      <Portfolio portfolio={content.portfolio} />
    </div>
  );
};

export default Home;
