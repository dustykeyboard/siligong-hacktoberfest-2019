import React from 'react';
import styled from 'styled-components';

export const A = styled.a`
  color: ${p => p.theme.link};
  transition: 0.3s;

  &:hover {
    color: ${p => p.theme.linkHover}
  }
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