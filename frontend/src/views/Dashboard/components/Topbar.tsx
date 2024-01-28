import { IconBack } from "@/assets/icons/icons";
import { useResponsiveDisplay } from "@/hooks/useResponsiveDisplay";
import { backToUpperPath } from "@/router";

const Topbar = () => {
  const isMobile = useResponsiveDisplay();
  return (
    <div className=" grow-0 min-h-[40px] bg-primary-content  flex flex-row justify-between">
      {isMobile && (
        <div
          className=" btn btn-ghost text-lg my-auto  bg-primary-content"
          onClick={() => backToUpperPath()}
        >
          <IconBack />
        </div>
      )}

      <div className="avatar">
        <div className="w-8 h-8 my-auto ml-4 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="indicator m-3 mr-8 ">
        <span className="indicator-item badge badge-secondary badge-sm text-sm">
          99+
        </span>
        <button className="btn btn-sm">inbox</button>
      </div>
    </div>
  );
};

export default Topbar;
