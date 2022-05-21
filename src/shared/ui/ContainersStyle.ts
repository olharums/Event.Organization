import { Card } from "react-bootstrap";
import styled from "styled-components";

export const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 70vh;
`;

export const CardContainer = styled(Card)`
  margin: 2rem;
  padding: 1rem;
  width: 28%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(256, 256, 256, 0.8);
  text-align: center;

  span {
    white-space: nowrap;
  }

  div {
    width: 100%;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 1025px) {
    width: 35%;
  }

  @media (max-width: 768px) {
    width: 70%;
    padding: 2rem;
  }

  @media (max-width: 426px) {
    width: 85%;
    margin: 2rem 0;
    padding: 1rem;
  }
`;

export const EmptyContainer = styled.div`
  margin-bottom: 46vh;
`;

export const AdminPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 80%;
  margin: 1rem;
  flex-wrap: wrap;

  button {
    background-color: #fdffa9;
    border: 3px solid #f4c627;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    &:hover {
      background-color: #f4c627;
    }
    &.active {
      background-color: #f4c627;
    }
  }

  @media (max-width: 769px) {
    width: 95%;

    button {
      margin-bottom: 0.5rem;
    }
  }
`;
