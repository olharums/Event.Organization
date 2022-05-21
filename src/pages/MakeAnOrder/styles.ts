import styled from "styled-components";

export const Form = styled.form`
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;

  * {
    width: 85%;
  }

  button {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const RadioDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  * {
    width: fit-content;
  }

  input {
    margin-right: 0.2rem;
  }
`;

export const Message = styled.p`
  margin: 0.5rem 0;
  font-size: larger;

  &.error {
    color: red;
  }
`;
