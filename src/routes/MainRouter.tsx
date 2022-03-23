import { Route, Routes } from "react-router-dom";
import { PageLayoutWithDrawer } from "../components";
import { Home, Users } from "../pages";

export const MainRouter = () => {
  return (
    <PageLayoutWithDrawer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </PageLayoutWithDrawer>
  );
};
