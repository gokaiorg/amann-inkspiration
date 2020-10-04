import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      a {
        color: #637371;
      }

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
