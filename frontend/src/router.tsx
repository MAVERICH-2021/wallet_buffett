import { Routes, Route, Navigate } from "react-router";
import TestPage from "@/views/Test/TestPage";
import GeneralErrorPage from "@/views/Error/GeneralErrorPage";
import Dashboard from "./views/Dashboard/Dashboard";
import AssetBoard from "./views/Dashboard/components/AssetBoard/AssetBoard";
import Overview from "./views/Dashboard/components/Overview/Overview";
import EcoEntity from "./views/Dashboard/components/EcoEntity/EcoEntity";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard/overview" replace={true} />} />

      {/* <Route path="/project_manager/:id?" element={<ProjectManager />} /> */}
      <Route path="dashboard/" element={<Dashboard/>} >
        <Route path="overview" element={<Overview/>} />
        <Route path="asset" element={<AssetBoard/>} />
        <Route path="eco-entity" element={<EcoEntity />} />
      </Route>
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<GeneralErrorPage />} />
    </Routes>
  );
};
