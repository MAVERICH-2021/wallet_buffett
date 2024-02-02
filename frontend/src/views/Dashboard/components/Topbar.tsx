import { IconBack, IconNotification } from "@/assets/icons/icons";
import { useResponsiveDisplay } from "@/hooks/useResponsiveDisplay";
import { backToUpperPath } from "@/router";

const Topbar = () => {
  const isMobile = useResponsiveDisplay();
  return (
    <div className=" grow-0 min-h-[32px] bg-primary-content bg-opacity-80  flex flex-row justify-between"
    style={{
      // shadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
    }}>
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
        <span className="indicator-item ">
         <div className=" h-2 w-2 rounded-full bg-secondary"></div>
        </span>
        <button className="btn btn-xs text-lg"><IconNotification/></button>
      </div>
    </div>
  );
};

export default Topbar;
