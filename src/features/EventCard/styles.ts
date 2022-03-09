import { Card } from "react-bootstrap";
import styled from "styled-components";
import { ButtonOrderDefault } from "../../shared/ui/buttonOrderStyle";

export const EventCardContainer = styled(Card)`
  margin: 2rem;
  padding: 1rem;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(256, 256, 256, 0.8);
  /* border: 2px solid violet; */
`;

export const Image = styled.img`
  background-color: grey;
  width: 100%;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  & button {
    width: 40%;
  }
`;

// export const NavbarStyled = styled(Navbar)`
//   display: flex !important;
//   justify-content: space-between !important;
//   padding-left: 3rem;
//   padding-right: 3rem;
//   background-color: #212529;
//   align-items: baseline;

//   & * {
//     margin-left: 1rem;
//     margin-right: 1rem;
//   }

//   @media (max-width: 577px) {
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }
// `;

// export const DivStyled = styled.div`
//   display: flex;
//   align-items: center;
// `;
