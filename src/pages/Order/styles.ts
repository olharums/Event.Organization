import styled from "styled-components";

export const SubTitle = styled.h2`
  margin-top: 2rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 2rem;

  & img {
    border-radius: 5px;
    margin: 2.5rem;
    width: 25%;
    position: relative;
    transition: all 0.3s ease-out;

    &:hover {
      margin: 0;

      width: 30%;
    }
  }
`;
