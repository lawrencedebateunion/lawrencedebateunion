import React from 'react';
import { SidePageLayout, SEOConfig } from 'components/common';
import { GenericIntro, Reuse } from 'components/landing';

const PageReUSE = () => {
  return (
  <SidePageLayout>
    <SEOConfig title="the reUSE system" location="/reUSE" />
    <GenericIntro/>
    <Reuse/>
  </SidePageLayout>
);
};

export default PageReUSE;