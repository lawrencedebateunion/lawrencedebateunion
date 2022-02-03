import React from 'react';
import { SidePageLayout, SEOConfig } from 'components/common';
import { GenericIntro } from 'components/landing';
import styled from "styled-components";

const Center = styled.div`
  text-align: center;
  h3 {
    margin-top: -0.25rem;
    font-size: 20px;
  }
`;

const Page404 = () => {

  return (
  <SidePageLayout>
    <SEOConfig title="404: Not found" location="/404" />
    <GenericIntro/>
    <Center>
      <h1>404: not found</h1>
      <h3><b>this page does not exist.</b></h3>
      <br/>
    </Center>
  </SidePageLayout>
);
};

export default Page404;