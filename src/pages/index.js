import React from 'react';
import { Layout, SEOConfig } from 'components/common';
import { Landing } from 'components/landing';

const PageIndex = () => {
  return (
  <Layout>
    <SEOConfig/>
    <Landing/>
  </Layout>
);
};

export default PageIndex;