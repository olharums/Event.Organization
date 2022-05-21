import { createContext, useEffect, useMemo, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "../pages";
import Skeleton from "../entities/Skeleton";
import Footer from "../features/Footer";
import NavBar from "../features/Navbar";
import EmployeeStore from "../models/EmployeeStore";
import EventStore from "../models/EventStore";
import OrderStore from "../models/OrderStore";
import TaxationStore from "../models/TaxationStore";
import UserStore from "../models/UserStore";
import TableStore from "../models/TableStore";
import { IEmployee } from "../shared/types/IEmployee";
import { IEvent } from "../shared/types/IEvent";
import { ITaxation } from "../shared/types/ITaxation";
import { IOrder } from "../shared/types/IOrder";
import { IUser } from "../shared/types/IUser";

import GlobalStyle from "./globalStyles";

export interface IContext {
  eventStore: EventStore;
  employeeStore: EmployeeStore;
  orderStore: OrderStore;
  taxationStore: TaxationStore;
  userStore: UserStore;
  tableStore: TableStore<any>;
}

export const Context = createContext<IContext | null>(null);

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const value = useMemo(
    () => ({
      eventStore: new EventStore(),
      employeeStore: new EmployeeStore(),
      orderStore: new OrderStore(),
      taxationStore: new TaxationStore(),
      userStore: new UserStore(),
      tableStore: new TableStore<
        IEmployee | IEvent | ITaxation | IOrder | IUser
      >(),
    }),
    []
  );
  useEffect(() => {
    const img = new Image();
    img.src = "../../shared/static/img/main_page.jpg";
    setIsLoading(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "unset";
  }, [isLoading]);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <Context.Provider value={value}>
      <BrowserRouter>
        <GlobalStyle />
        <NavBar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
