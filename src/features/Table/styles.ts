import styled from "styled-components";
import { Button } from "react-bootstrap";

export const StyledButton = styled(Button)`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 426px) {
    flex-direction: column;

    button:first-child {
      margin-bottom: 0.5rem;
    }
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  margin-bottom: 5rem;
  color: black;

  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    tr:nth-of-type(odd) {
      background: rgba(0, 0, 0, 0.3);
    }
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
      text-align: left !important;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid #ccc;
    }

    td {
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }
    &.taxations {
      td:nth-of-type(1):before {
        content: "id";
      }
      td:nth-of-type(2):before {
        content: "percent";
      }
      td:nth-of-type(3):before {
        content: "eventId";
      }
    }

    &.events {
      td:nth-of-type(1):before {
        content: "id";
      }
      td:nth-of-type(2):before {
        content: "name";
      }
      td:nth-of-type(3):before {
        content: "price";
      }
      td:nth-of-type(4):before {
        content: "background";
      }
      td:nth-of-type(5):before {
        content: "description";
      }
      td:nth-of-type(6):before {
        content: "img";
      }
      td:nth-of-type(7):before {
        content: "imgExample1";
      }
      td:nth-of-type(8):before {
        content: "imgExample2";
      }
      td:nth-of-type(9):before {
        content: "imgExample3";
      }
      td:nth-of-type(10):before {
        content: "size";
      }
    }

    &.employees {
      td:nth-of-type(1):before {
        content: "id";
      }
      td:nth-of-type(2):before {
        content: "name";
      }
      td:nth-of-type(3):before {
        content: "surname";
      }
      td:nth-of-type(4):before {
        content: "category";
      }
      td:nth-of-type(5):before {
        content: "eventId";
      }
      td:nth-of-type(6):before {
        content: "salary";
      }
      td:nth-of-type(7):before {
        content: "img";
      }
      td:nth-of-type(8):before {
        content: "bio";
      }
    }

    &.orders {
      td:nth-of-type(1):before {
        content: "id";
      }
      td:nth-of-type(2):before {
        content: "date";
      }
      td:nth-of-type(3):before {
        content: "eventId";
      }
      td:nth-of-type(4):before {
        content: "employeeId";
      }
      td:nth-of-type(5):before {
        content: "price";
      }
      td:nth-of-type(6):before {
        content: "taxationId";
      }
      td:nth-of-type(7):before {
        content: "publicAccess";
      }
      td:nth-of-type(8):before {
        content: "address";
      }
      td:nth-of-type(9):before {
        content: "userId";
      }
    }

    &.users {
      td:nth-of-type(1):before {
        content: "id";
      }
      td:nth-of-type(2):before {
        content: "surname";
      }
      td:nth-of-type(3):before {
        content: "name";
      }
      td:nth-of-type(4):before {
        content: "phone";
      }
      td:nth-of-type(5):before {
        content: "password";
      }
      td:nth-of-type(6):before {
        content: "isAdmin";
      }
    }
  }
`;
