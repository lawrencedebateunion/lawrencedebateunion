import React from 'react';
import { SidePageLayout, SEOConfig } from 'components/common';
import { StoreIntro, StoreSkills } from 'components/landing';

const PageStore = () => {
  return (
  <SidePageLayout>
    <SEOConfig title="plöt store" location="/store" />
    <StoreIntro/>
    <StoreSkills/>
  </SidePageLayout>
);
};

export default PageStore;