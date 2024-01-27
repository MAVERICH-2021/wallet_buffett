import { IconDashboard, IconMoney, IconHouse } from "@/assets/icons/icons";
import IconLinkButton from "@/components/common/button/IconLinkButtton";

const IconButtonList = () => {
  return (
    <div className=" flex flex-col p-4 bg-secondary-content grow">
      <IconLinkButton
        icon={<IconDashboard />}
        tooltip="Overview"
        path="/dashboard/overview"
      />
      <IconLinkButton
        icon={<IconMoney />}
        tooltip="Asset"
        path="/dashboard/asset"
      />
      <IconLinkButton
        icon={<IconHouse />}
        tooltip="EcoEntity"
        path="/dashboard/eco-entity"
      />
    </div>
  );
};

//createt a side bar component
const Sidebar = () => {
  return (
    <div className=" grow-0 flex">
      <IconButtonList />
    </div>
  );
};

export default Sidebar;
