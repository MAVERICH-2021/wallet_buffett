import { IconDashboard, IconHouse, IconMoney } from "@/assets/icons/icons";
import IconLinkButton from "@/components/common/button/IconLinkButtton";

//for mobile view
const BottomNav = () => {
  return (
    <div className=" grow-0 flex justify-around">
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

export default BottomNav;
