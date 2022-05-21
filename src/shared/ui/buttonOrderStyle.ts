import styled from "styled-components";

export const ButtonOrderDefault = styled.button`
  border: 3px solid #d84190;
  border-radius: 5px;
  background-color: #f750a7;
  color: white;

  &:hover {
    background-color: #d84190;
  }
`;

export const ButtonOrderBig = styled(ButtonOrderDefault)`
  width: 30%;
  height: 100px;
  margin: 3rem;

  @media (max-width: 769px) {
    width: 60%;
  }

  @media (max-width: 426px) {
    width: 80%;
  }
`;
