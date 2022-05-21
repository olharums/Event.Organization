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

  @media (max-width: 900px) {
    font-size: 18pt;
    margin: 1rem 0;
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

  @media (max-width: 900px) {
    padding: ${(props) => props.padding};

    flex-direction: column;
    justify-content: start;
    align-items: center;
    z-index: 1000;
    height: ${(props) => props.height};
    background: #44447f;
    position: relative;
    top: ${(props) => props.top};
    transition: all 0.4s ease-in-out;
    transition-property: height, top;

    > *:first-child {
      order: 1;
    }

    > *:nth-child(2) {
      order: 0;

      width: 90%;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    > *:nth-child(3) {
      order: 2;
    }

    > *:nth-child(4) {
      order: 3;
    }

    > *:nth-child(5) {
      order: 4;
    }

    > *:nth-child(6) {
      order: 5;
    }

    > *:nth-child(7) {
      order: 6;
    }
  }
`;

export const DivStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const ClosedMenu = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;
  background-color: rgba(0, 0, 0, 0.5);

  &.white {
    background-color: #44447f;
  }

  @media (min-width: 901px) {
    display: none;
  }
`;

export const AutoComplete = styled.div`
  background-color: white;
  position: relative;
  display: inline-block;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  z-index: 1000;
`;

export const AutoCompleteResult = styled.div`
  width: 100%;
  padding: 0.375rem 0.75rem;
  z-index: 1000;

  * {
    z-index: 1000;
  }

  &:hover {
    background-color: #e9e9e9;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 0;
`;

export const SearchContainer = styled(Row)`
  position: absolute;
  left: 17%;
  z-index: 1000;

  @media (max-width: 900px) {
    left: 0;
    width: 100%;
    margin: 0 auto;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 0;
`;

export const Placeholder = styled.div`
  width: 17rem;
  height: 1.5rem;
`;
