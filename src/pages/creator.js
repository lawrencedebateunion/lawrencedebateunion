import React from 'react';
import { SidePageLayout, SEOConfig } from 'components/common';
import { Creator } from 'components/landing';

const PageCreator = () => {
  return (
  <SidePageLayout>
    <SEOConfig title="about the creator" location="/creator" />
    <Creator/>
  </SidePageLayout>
);
};

export default PageCreator;