import { Card } from "react-bootstrap";
import styled from "styled-components";

export const EmployeeCardContainer = styled(Card)`
  margin: 2rem;
  padding: 1rem;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(256, 256, 256, 0.8);
`;

export const Image = styled.img`
  background-color: grey;
  width: 100%;
`;
