import {
  IconDashboard,
  IconMoney,
  IconHouse,
  IconBankCard,
  IconPiggyBank,
} from "@/assets/icons/icons";
import IconLinkButton from "@/components/common/button/IconLinkButtton";

const IconButtonList = () => {
  return (
    <div
      className=" flex flex-col p-4 bg-primary-content bg-opacity-80 
    grow border-2 border-black shadow-2xl"
    >
      <IconLinkButton
        icon={<IconDashboard />}
        tooltip="Overview"
        path="/dashboard/overview"
      />
      <IconLinkButton
        icon={<IconBankCard />}
        tooltip="Payment"
        path="/dashboard/payment"
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
      <IconLinkButton
        icon={<IconPiggyBank />}
        tooltip="Budget"
        path="/dashboard/budget"
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
