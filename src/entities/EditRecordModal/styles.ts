import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const ModalStyled = styled(Modal)`
  .modal-body {
    display: flex !important;
    flex-direction: column;
    align-items: center;
  }

  form {
    width: 80%;
    display: flex !important;
    flex-direction: column;
    align-items: center;

    input {
      width: 100%;
    }
  }

  .modal-footer button {
    width: 150px;
  }
`;

export const FormField = styled.div`
  border: 3px solid #d6dcde;
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 5px;
  color: rgb(113, 113, 113);

  input[type="date"] {
    width: 100%;
    margin: 0;
  }
`;
