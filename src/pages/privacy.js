import React from 'react';
import { SidePageLayout, SEOConfig } from 'components/common';
import { Privacy } from 'components/landing';

const PagePrivacy = () => {
  return (
  <SidePageLayout>
    <SEOConfig title="Privacy Policy" location="/privacy" />
    <Privacy/>
  </SidePageLayout>
);
};

export default PagePrivacy;