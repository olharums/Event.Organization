import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export const NavbarLinkStyled = styled(NavLink)`
  font-size: 18pt;
  color: white;
  text-decoration: none;

  &:hover {
    color: rgb(134, 134, 138);
  }

  @media (max-width: 577px) {
    font-size: 12pt;
  }
`;

export const UserName = styled(NavbarLinkStyled)`
  margin-left: 8rem;

  @media (max-width: 577px) {
    margin-left: 0rem;
  }
`;

export const NavbarStyled = styled(Navbar)`
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
  padding-right: 3rem;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: baseline;

  & > * {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (max-width: 577px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const DivStyled = styled.div`
  display: flex;
  align-items: center;
`;