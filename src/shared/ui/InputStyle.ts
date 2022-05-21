import styled from "styled-components";

export const Select = styled.select`
  margin: 1rem;
  border-radius: 5px;
  border: 3px solid #d6dcde;

  &:focus {
    outline: #a9e8ff solid 3px;
    border: 3px solid #a9e8ff;
  }
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 1rem;
  border-radius: 5px;
  border: 3px solid #d6dcde;

  &:focus {
    outline: #a9e8ff solid 3px;
    border: 3px solid #a9e8ff;
  }

  &.red-border {
    outline: #ff8787 solid 3px;
    border: 3px solid #ff8787;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.5em;
  border-radius: 5px;
  border: 3px solid #d6dcde;
  margin: 1rem 0;
  width: 100%;

  &:focus {
    outline: #a9e8ff solid 3px;
    border: 3px solid #a9e8ff;
  }

  &.red-border {
    outline: #ff8787 solid 3px;
    border: 3px solid #ff8787;
  }
`;
