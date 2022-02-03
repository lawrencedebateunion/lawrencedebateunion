import React from 'react';
import { SidePageLayout, SEOConfig } from 'components/common';
import { GenericIntro, SubmittedDeletion } from 'components/landing';

const PageSubmittedDeletion = () => {
  return (
  <SidePageLayout>
    <SEOConfig title="deletion request submitted" location="/submitteddeletion" />
    <GenericIntro/>
    <SubmittedDeletion/>
  </SidePageLayout>
);
};

export default PageSubmittedDeletion;