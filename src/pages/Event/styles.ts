import styled from "styled-components";
import { CardListContainer } from "../../shared/ui/cardListContainer";

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.p`
  font-size: x-large;
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

export const EmployeeContainer = styled(CardListContainer)`
  width: 100%;
  align-items: center;
`;
