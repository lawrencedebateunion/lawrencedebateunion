import React from 'react';
import { SidePageLayout, SEOConfig } from 'components/common';
import { AboutIntro, AboutSkills } from 'components/landing';

const PageAbout = () => {
  return (
  <SidePageLayout>
    <SEOConfig title="about plöt" location="/about" />
    <AboutIntro/>
    <AboutSkills/>
  </SidePageLayout>
);
};

export default PageAbout;
