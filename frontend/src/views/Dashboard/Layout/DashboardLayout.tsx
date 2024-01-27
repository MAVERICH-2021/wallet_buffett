import { useResponsiveDisplay } from "@/hooks/useResponsiveDisplay";
import { Outlet } from "react-router";
import BottomNav from "../components/BottomNav";
import Sidebar from "../components/Sidebar";

const MobileLayout = () => {
  return (
    <div className=" flex flex-col h-full w-full">
      <Outlet/>
      <BottomNav/>
    </div>
  );
};

const DesktopLayout = () => {
  return (
    <div className=" flex flex-row h-full w-full">
      <Sidebar/>
      <Outlet/>
    </div>
  );
};

const DashboardLayout = () => {
  const isMobile = useResponsiveDisplay();
  return <div className=" w-full h-full">{isMobile ? <MobileLayout /> : <DesktopLayout />}</div>;
};

export default DashboardLayout;
