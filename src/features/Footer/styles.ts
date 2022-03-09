import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2em 2em 1em 2em;
  color: white;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &.a-logo:hover {
      text-decoration: none;
    }
  }
`;
