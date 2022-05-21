import styled from "styled-components";

export const Image = styled.img`
  background-color: grey;
  width: 100%;
  height: 12rem;
  margin-bottom: 1rem;

  @media (max-width: 769px) {
    height: auto;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }

  & button {
    width: 40%;

    @media (max-width: 1025px) {
      width: 48%;
    }

    @media (max-width: 900px) {
      width: 70%;
      padding: 0.5rem;

      &:first-child {
        margin-bottom: 1.5rem;
        margin-top: 0.5rem;
      }
    }
  }
`;
