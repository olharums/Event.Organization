import React, { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";
import appRoutes from "./routes";
import Main from "./Main";

// import { userAndFeedDataContext } from "../app";
// import appRoutes from "./routes";
// import { UserProfile } from "./user-profile";

const AppRouter: FC = observer(() => {
  // const user = useContext(userAndFeedDataContext)?.user;

  return (
    <Routes>
      {appRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      <Route path="*" element={<Main />} />
    </Routes>
  );
});

export default AppRouter;
