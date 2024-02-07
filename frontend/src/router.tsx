import { Routes, Route, Navigate, useRoutes } from "react-router";
import TestPage from "@/views/Test/TestPage";
import GeneralErrorPage from "@/errors/GeneralErrorPage";
import Dashboard from "./views/Dashboard/Dashboard";
import AssetBoard from "./views/Dashboard/components/AssetBoard/AssetBoard";
import EntityBoard from "./views/Dashboard/components/EntityBoard/EntityBoard";
import PaymentBoard from "./views/Dashboard/components/PaymentBoard/PaymentBoard";
import MarketBoard from "./views/Dashboard/components/MarketBoard/MarketBoard";
import { OverviewBoard } from "./views/Dashboard/components/OverviewBoard/OverviewBoard";
import { DashboardLayout } from "./views/dashboard-example/Layout";
import { Suspense } from "react";
//ignore this error

import routes from "~react-pages";
import Calculator from "./views/Calculator/Calculator";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/calculator" element={<Calculator />} />
      <Route
        path="/"
        element={<Navigate to="/dashboard/overview" replace={true} />}
      />
      <Route path="dashboard/" element={<Dashboard />}>
        <Route path="overview" element={<OverviewBoard />} />
        <Route path="market/:tab?/:id?" element={<MarketBoard />} />
        <Route path="asset/:tab?/:id?" element={<AssetBoard />} />
        <Route path="payment" element={<PaymentBoard />} />
        <Route path="eco-entity" element={<EntityBoard />} />
      </Route>
      <Route path="/test" element={<TestPage />} />
      {/* <Route path="*" element={<GeneralErrorPage />} /> */}
      <Route
        path="*"
        element={
          <DashboardLayout>
            <Suspense fallback={<p>Loading...</p>}>
              {useRoutes(routes)}
            </Suspense>
          </DashboardLayout>
        }
      />
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
