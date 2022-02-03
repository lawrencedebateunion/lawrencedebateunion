import React from 'react';
import { SidePageLayout, SEOConfig } from 'components/common';
import { Privacy } from 'components/landing';

const PagePrivacy = () => {
  return (
  <SidePageLayout>
    <SEOConfig title="privacy policy" location="/privacy" />
    <Privacy/>
  </SidePageLayout>
);
};

export default PagePrivacy;