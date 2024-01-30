import clsx from "clsx";
import React from "react";

interface PBTabProps {
  name: string;
  active: boolean;
  id: number;
  handleClick: () => void;
}
const PBTab = ({ name, active, handleClick }: PBTabProps) => {
  return (
    <a
      role="tab"
      className={clsx("tab max-w-[32px]", active && "tab-active")}
      onClick={() => handleClick()}
    >
      {name}
    </a>
  );
};

const BottomLine = () => {
  return <div className=" grow h-full bg-black bg-opacity-80 self-end" />;
};

interface PBTabSectionProps {
  tabs: any;
  handleTabClick: (id: string) => void;
}

const PBTabSection = ({ tabs, handleTabClick }: PBTabSectionProps) => {
  return (
    <div className="  flex flex-row">
      <div
        role="tablist"
        className="tabs tabs-lifted    bg-primary-content bg-opacity-80  "
      >
        {tabs.map((tab: any) => (
          <React.Fragment key={tab.id}>
            <PBTab
              name={tab.name}
              id={tab.id}
              active={tab.active}
              handleClick={() => {console.log(1);handleTabClick(tab.id)}}
            />
          </React.Fragment>
        ))}
      </div>
      <BottomLine />
    </div>
  );
};

export default PBTabSection;
