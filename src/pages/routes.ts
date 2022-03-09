import { Component } from "react";
import Admin from "./Admin";
import Announce from "./Announce";
import Auth from "./Auth";
import EmployeeList from "./EmployeeList";
import EmployeePortfolio from "./EmployeePortfolio";
import Event from "./Event";
import Main from "./Main";
import Order from "./Order";
import {
  ADMIN_ROUTE,
  ANNOUNCE_ROUTE,
  EMPLOYEE_LIST_ROUTE,
  EVENT_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  ORDER_ROUTE,
  REGISTRATION_ROUTE,
} from "./paths";

const appRoutes = [
  { path: ADMIN_ROUTE, Component: Admin },
  { path: ANNOUNCE_ROUTE, Component: Announce },
  { path: REGISTRATION_ROUTE, Component: Auth },
  { path: LOGIN_ROUTE, Component: Auth },
  { path: `${EMPLOYEE_LIST_ROUTE}/:id`, Component: EmployeePortfolio },
  { path: EMPLOYEE_LIST_ROUTE, Component: EmployeeList },
  { path: `${EVENT_ROUTE}/:id`, Component: Event },
  { path: MAIN_ROUTE, Component: Main },
  { path: ORDER_ROUTE, Component: Order },
];

export default appRoutes;
