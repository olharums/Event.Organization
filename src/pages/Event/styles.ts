import styled from "styled-components";
import { CardListContainer } from "../../shared/ui/ContainersStyle";

export const Description = styled.p`
  font-size: x-large;
  padding: 0 5%;
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
    @media (max-width: 769px) {
      margin: 2.5rem 0;
      width: 70%;
    }

    @media (max-width: 426px) {
      margin: 1.5rem 0 0;
      width: 90%;
    }
  }
`;

export const EmployeeContainer = styled(CardListContainer)`
  width: 100%;
  align-items: center;
`;
