import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2em 2em 1em 2em;
  color: white;

  a.a-logo {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease-in;

    &:hover {
      text-decoration: none;
      color: #c57bb5;
    }
  }

  h5,
  h1 {
    margin-bottom: 1rem;
    line-height: 2.5rem;
  }

  @media (max-width: 426px) {
    padding: 1rem 0.5rem;

    span {
      white-space: nowrap;
    }

    .row,
    .col {
      text-align: center !important;
      margin-left: 0;
      margin-right: 0;
      padding-left: 0;
      padding-right: 0;

      h5,
      h1 {
        margin-bottom: 1.5rem;
        margin-top: 0;
      }
    }

    .row {
      flex-direction: column;
    }

    .col {
      flex-direction: row;
    }
  }
`;
