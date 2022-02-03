import React from 'react';
import { SidePageLayout, SEOConfig } from 'components/common';
import { FoundationIntro, FoundationSkills } from 'components/landing';

const PageFoundations = () => {
  return (
  <SidePageLayout>
    <SEOConfig title="our foundations" location="/foundations" />
    <FoundationIntro/>
    <FoundationSkills/>
  </SidePageLayout>
);
};

export default PageFoundations;
