import React from 'react';
import styled from 'styled-components';

export type LogoImageProps = {
  hero?: boolean;
};

export const LogoImage = styled.img<LogoImageProps>`
  width: 2vw;
  border: 0;
`;

export type LogoProps = {
  title: string,
  link: string,
  image: string,
  hero?: boolean,
};

const Logo = ({ title, link, image, hero }: LogoProps) => (
  <a
    href={link}
    title={title}
    target="_blank"
    rel="noopener noreferrer"
  >
    <LogoImage src={image} alt={title} hero={hero} />
  </a>
);

export default Logo;
