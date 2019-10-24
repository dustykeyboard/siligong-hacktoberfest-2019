import styled from 'styled-components';

const Header = styled.header`
  padding: ${p => p.theme.spacing};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 720px) {
    flex-direction: row;
  }

  a {
    display: block;
    margin: ${p => p.theme.spacing};

    &:hover {
      img {
        transform: scale(1.1) rotate(15deg);
      }
    }
  }

  img {
    height: 20rem;
    width: 20rem;
    max-width: 100%;
    transition: 0.3s;
  }
`;

export default Header;
