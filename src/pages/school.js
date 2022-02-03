import React from 'react';
import { SidePageLayout, SEOConfig } from 'components/common';
import { SchoolIntro, SchoolSkills } from 'components/landing';

const PageSchool = () => {
  return (
  <SidePageLayout>
    <SEOConfig title="plöt school" location="/school" />
    <SchoolIntro/>
    <SchoolSkills/>
  </SidePageLayout>
);
};

export default PageSchool;
