import { useResponsiveDisplay } from "@/hooks/useResponsiveDisplay";
import { Outlet } from "react-router";
import BottomNav from "../components/BottomNav";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const MobileLayout = () => {
  return (
    <div className=" flex flex-col h-full w-full">
      <Topbar />
      <div className="grow flex flex-col h-full w-full">
        <Outlet />
        <BottomNav />
      </div>
    </div>
  );
};

const DesktopLayout = () => {
  return (
    <div className="h-full w-full">
      <Topbar />
      <div className="grow flex flex-row h-full w-full">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

const DashboardLayout = () => {
  const isMobile = useResponsiveDisplay();
  return (
    <div className=" w-full h-full">
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
};

export default DashboardLayout;
