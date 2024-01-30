import { Routes, Route, Navigate } from "react-router";
import TestPage from "@/views/Test/TestPage";
import GeneralErrorPage from "@/errors/GeneralErrorPage";
import Dashboard from "./views/Dashboard/Dashboard";
import AssetBoard from "./views/Dashboard/components/AssetBoard/AssetBoard";
import Overview from "./views/Dashboard/components/OverviewBoard/Overview";
import EntityBoard from "./views/Dashboard/components/EntityBoard/EntityBoard";
import PaymentBoard from "./views/Dashboard/components/PaymentBoard/PaymentBoard";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard/overview" replace={true} />}
      />

      {/* <Route path="/project_manager/:id?" element={<ProjectManager />} /> */}
      <Route path="dashboard/" element={<Dashboard />}>
        <Route path="overview" element={<Overview />} />
        <Route path="asset/:tab?/:id?" element={<AssetBoard />} />
        <Route path="payment" element={<PaymentBoard />} />

        <Route path="eco-entity" element={<EntityBoard />} />
      </Route>
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<GeneralErrorPage />} />
    </Routes>
  );
};

export const backToUpperPath = () => {
  const path = window.location.pathname;
  const pathArray = path.split("/");
  const newPathArray = pathArray.slice(0, pathArray.length - 1);
  const newPath = newPathArray.join("/");
  window.location.pathname = newPath;
};
