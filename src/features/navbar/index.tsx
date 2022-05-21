import { FC, useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { Context } from "../../app";

import {
  ADMIN_ROUTE,
  ANNOUNCE_ROUTE,
  EMPLOYEE_LIST_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
} from "../../pages/paths";

import {
  AutoComplete,
  AutoCompleteResult,
  ClosedMenu,
  Col,
  NavbarLinkStyled,
  NavbarStyled,
  Placeholder,
  Row,
  SearchContainer,
} from "./styles";

interface IAutoComplete {
  name: string;
  path: string;
  searchData: string;
}

const NavBar: FC = observer(() => {
  const userStore = useContext(Context)?.userStore;
  const eventStore = useContext(Context)?.eventStore;
  const employeeStore = useContext(Context)?.employeeStore;

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const [autoCompleteValue, setAutoCompleteValue] = useState<
    Array<IAutoComplete>
  >([]);
  const [autoCompleteHidden, setAutoCompleteHidden] = useState<boolean>(true);

  const bodyScroll = (value: string) => {
    document.body.style.overflowY = value;
  };

  const startSearch = (e: any) => {
    const value = e.target.value.toLowerCase();
    let newAutoCompleteValue = [];
    if (value) {
      setAutoCompleteHidden(false);
      newAutoCompleteValue = autoCompleteValue.filter((val) =>
        val.searchData.match(value)
      );
    } else {
      setAutoCompleteHidden(true);

      if (eventStore?.events?.length) {
        for (let event of eventStore?.events) {
          newAutoCompleteValue.push({
            name: event.name,
            path: `/events/${event.id}`,
            searchData: `${event.name.toLowerCase()} ${event.description.toLowerCase()}`,
          });
        }
      }

      if (employeeStore?.employees?.length) {
        for (let employee of employeeStore?.employees) {
          newAutoCompleteValue.push({
            name: `${employee.name} ${employee.surname}`,
            path: `/employees/${employee.id}`,
            searchData: `${employee.name.toLowerCase()} ${employee.surname.toLowerCase()} ${employee.category.toLowerCase()}`,
          });
        }
      }
    }
    setAutoCompleteValue(newAutoCompleteValue);
  };

  useEffect(() => {
    let autoComplete = [];

    if (eventStore?.events?.length) {
      for (let event of eventStore?.events) {
        autoComplete.push({
          name: event.name,
          path: `/events/${event.id}`,
          searchData: `${event.name.toLowerCase()} ${event.description.toLowerCase()}`,
        });
      }
    }

    if (employeeStore?.employees?.length) {
      for (let employee of employeeStore?.employees) {
        autoComplete.push({
          name: `${employee.name} ${employee.surname}`,
          path: `/employees/${employee.id}`,
          searchData: `${employee.name.toLowerCase()} ${employee.surname.toLowerCase()} ${employee.category.toLowerCase()}`,
        });
      }
    }

    setAutoCompleteValue(autoComplete);
  }, [eventStore?.events, employeeStore?.employees]);

  return (
    <>
      <ClosedMenu className={menuIsOpen ? "white" : ""}>
        {menuIsOpen ? (
          <AiOutlineCloseCircle
            size={"2rem"}
            fill={"white"}
            onClick={() => {
              setMenuIsOpen(false);
              bodyScroll("unset");
            }}
          />
        ) : (
          <GiHamburgerMenu
            size={"2rem"}
            fill={"white"}
            onClick={() => {
              setMenuIsOpen(true);
              bodyScroll("hidden");
            }}
          />
        )}
      </ClosedMenu>
      <NavbarStyled
        top={menuIsOpen ? "0" : "-29rem"}
        height={menuIsOpen ? "94vh" : "0"}
        padding={menuIsOpen ? "0.5rem" : "0"}
        onClick={() => {
          setMenuIsOpen(false);
          bodyScroll("unset");
        }}
      >
        <NavbarLinkStyled to={MAIN_ROUTE}>Главная</NavbarLinkStyled>
        <Placeholder />
        <SearchContainer>
          <Col style={{ width: "70%" }}>
            <Row>
              <input
                className="form-control"
                placeholder="Поиск"
                aria-label="Поиск"
                aria-describedby="button-search"
                type="search"
                onChange={startSearch}
                onClick={(e) => e.stopPropagation()}
              />
            </Row>
            {!autoCompleteHidden && autoCompleteValue.length ? (
              <AutoComplete>
                {autoCompleteValue.map((elem) => (
                  <AutoCompleteResult key={elem.name}>
                    <a href={elem.path}>{elem.name}</a>
                  </AutoCompleteResult>
                ))}
              </AutoComplete>
            ) : null}
          </Col>
          <Col>
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-search"
            >
              Поиск
            </button>
          </Col>
        </SearchContainer>
        <NavbarLinkStyled to={ANNOUNCE_ROUTE}>Афиша</NavbarLinkStyled>
        <NavbarLinkStyled to={EMPLOYEE_LIST_ROUTE}>Актёры</NavbarLinkStyled>
        {userStore?.isAuth ? (
          <NavbarLinkStyled
            to={MAIN_ROUTE}
            onClick={() => userStore?.setIsAuth(false)}
          >
            Выйти
          </NavbarLinkStyled>
        ) : (
          <NavbarLinkStyled to={LOGIN_ROUTE}>Войти</NavbarLinkStyled>
        )}
        {userStore?.currentUser?.isAdmin ? (
          <NavbarLinkStyled to={ADMIN_ROUTE}>Админ</NavbarLinkStyled>
        ) : (
          ""
        )}
      </NavbarStyled>
    </>
  );
});

export default NavBar;
