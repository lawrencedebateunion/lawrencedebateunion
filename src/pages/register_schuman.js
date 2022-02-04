import React from 'react';
import { SidePageLayout, SEOConfig } from 'components/common';
import { RegisterSchuman } from 'components/landing';
import { ArrowOnlyHeader } from 'components/theme';

const PageRegisterSchuman = () => {
  return (
  <SidePageLayout>
    <SEOConfig title="Register for Schuman Challenge" location="/register_schuman" />
    <ArrowOnlyHeader/>
    <RegisterSchuman/>
  </SidePageLayout>
);
};

export default PageRegisterSchuman;