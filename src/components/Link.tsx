import React from 'react';
import styled from 'styled-components';

export const A = styled.a`
  color: ${p => p.theme.link};
`;

export type LinkType = {
  href: string,
  children: React.ReactChild,
};

const Link = ({ href, children, ...props }: LinkType) => (
  <A
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </A>
);

export default Link;