import { Card } from "react-bootstrap";
import styled from "styled-components";

export const AuthContainer = styled(Card)`
  width: 45%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 3rem;
  margin: 3rem;
  text-align: center;

  * {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 769px) {
    width: 60%;
  }

  @media (max-width: 426px) {
    width: 90%;
    padding: 1.5rem;
  }
`;

export const AuthButton = styled.button`
  border: 3px solid #f7b51f;
  border-radius: 5px;
  background-color: #fdc138;
  color: black;
  width: fit-content;
  padding: 0.5rem;

  &:hover {
    background-color: #f7b51f;
  }
`;

export const AuthText = styled.p`
  font-size: medium;
  margin: 0 0 1rem 0;
  display: inline;

  * {
    display: inline;
  }
`;
