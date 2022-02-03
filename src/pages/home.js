import React from 'react';
import { SidePageLayout, SEOConfig } from 'components/common';
import { HomeIntro, HomeSkills } from 'components/landing';

const PageHome = () => {
  return (
  <SidePageLayout>
    <SEOConfig title="plöt housing" location="/home" />
    <HomeIntro/>
    <HomeSkills/>
  </SidePageLayout>
);
};

export default PageHome;