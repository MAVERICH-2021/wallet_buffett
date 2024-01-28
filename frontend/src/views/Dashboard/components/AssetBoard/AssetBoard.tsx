import { useEffect } from "react";
import AssetPanel from "./Panel/AssetPanel";
import AssetSidebar from "./Sidebar/AssetSidebar";
import { useNavigate, useParams } from "react-router";
import { use } from "i18next";
import { useResponsiveDisplay } from "@/hooks/useResponsiveDisplay";

const AssetBoard = () => {
  const { tab, id } = useParams();
  const navigate = useNavigate(); // Hook to programmatically navigate
  const isMobile = useResponsiveDisplay();

  const DesktopView = () => {
    return (
      <div className=" bg-neutral  grow text-primary flex flex-row">
        <AssetSidebar />
        <AssetPanel />
      </div>
    );
  };

  const MobileView = () => {
    if (id) {
      return (
        <div className=" bg-neutral  grow text-primary ">
          <AssetPanel />
        </div>
      );
    } else {
      return (
        <div className=" bg-neutral  grow text-primary ">
          <AssetSidebar />
        </div>
      );
    }
  };

  useEffect(() => {
    // Check if the 'tab' param is undefined or not provided
    if (!tab) {
      // Redirect to the 'cash' tab if no specific tab is provided
      //TODO: change to a more propier tab
      navigate("/dashboard/asset/cash/rmb", { replace: true });
    }
  }, [tab, navigate]); // Dependency array to re-run the effect if 'tab' or 'navigate' changes

  return isMobile ? <MobileView /> : <DesktopView />;
};

export default AssetBoard;
