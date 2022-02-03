import React from 'react';
import { SidePageLayout, SEOConfig } from 'components/common';
import { GenericIntro, Waitlist } from 'components/landing';

const PageWaitlist = () => {
  return (
  <SidePageLayout>
    <SEOConfig title="plöt waitlist" location="/waitlist" />
    <GenericIntro/>
    <Waitlist/>
  </SidePageLayout>
);
};

export default PageWaitlist;