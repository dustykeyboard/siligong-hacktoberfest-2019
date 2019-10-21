import React from 'react';
import Header from '../components/Header';
import Logo from '../components/Logo';
import hacktoberfest from '../images/hacktoberfest.svg';
import siligong from '../images/siligong.png';

export default () => (
  <Header>
    <Logo
      title="Hacktoberfest"
      image={hacktoberfest}
      link="https://hacktoberfest.digitalocean.com"
      hero
    />
    <Logo
      title="Siligong Valley"
      image={siligong}
      link="https://www.siligongvalley.com"
      hero
    />
  </Header>
);
