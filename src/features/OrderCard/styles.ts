import styled from "styled-components";

export const Image = styled.img`
  background-color: grey;
  width: 100%;
  height: 12rem;

  @media (max-width: 769px) {
    height: auto;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  & button {
    width: 50%;
  }
`;
