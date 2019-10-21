import styled from 'styled-components';

const Header = styled.header`
  padding: 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  a {
    margin: 1rem;

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
