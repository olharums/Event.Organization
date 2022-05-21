import styled from "styled-components";

export const ButtonMore = styled.button`
  border: 3px solid #77d04f;
  border-radius: 5px;
  background-color: #86ea56;
  color: white;

  &:hover {
    background-color: #77d04f;
  }
`;

export const ButtonMoreBig = styled(ButtonMore)`
  width: 30%;
  height: 100px;
  margin: 3rem;
`;
