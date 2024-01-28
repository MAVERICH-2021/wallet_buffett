import { IconRMB } from "@/assets/icons/icons";
import {  useParams } from "react-router-dom";
import ASNMTab from "./ASNMTab";



const ASNavMenu = () => {
  const {id} = useParams();
  return (
    <div className=" container grow flex flex-col mt-8">
      <ul className="menu bg-base-200  rounded-box ">
        <ASNMTab
          label="RMB"
          icon={<IconRMB />}
          linkPathId="/cash/rmb"
          checked={id==="rmb"}
        />
        <ASNMTab
          label="USD"
          icon={<IconRMB />}
          linkPathId="/cash/usd"
          checked={id==="usd"}
        />
        <ASNMTab
          label="EUR"
          icon={<IconRMB />}
          linkPathId="/cash/eur"
          checked={id==="eur"}
        />
      </ul>
    </div>
  );
};

export default ASNavMenu;
