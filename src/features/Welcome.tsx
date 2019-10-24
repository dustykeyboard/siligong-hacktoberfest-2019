import React from 'react';
import Section from '../components/Section';
import Link from '../components/Link';
import styled from 'styled-components';

const WelcomeSection = styled(Section)`
  text-align: center;
`;

export default () => (
  <WelcomeSection>
    <h1>
      Welcome to
      {' '}
      <Link href="https://www.siligongvalley.com">
        SiligongValley
      </Link>
      {' '}
      <Link href="https://hacktoberfest.digitalocean.com">
        #Hacktoberfest
      </Link>
      {' '}
      2019
  </h1>
  </WelcomeSection>
);