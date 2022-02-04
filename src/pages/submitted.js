import React from 'react';
import { SidePageLayout, SEOConfig } from 'components/common';
import { GenericIntro, Submitted } from 'components/landing';

const PageSubmitted = () => {
  return (
  <SidePageLayout>
    <SEOConfig title="Inquiry Submitted" location="/submitted" />
    <GenericIntro/>
    <Submitted/>
  </SidePageLayout>
);
};

export default PageSubmitted;