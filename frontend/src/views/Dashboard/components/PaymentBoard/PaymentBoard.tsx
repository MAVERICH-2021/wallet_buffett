import React from "react";
import PBTabSection from "./PBTab";
import PBPanel from "./PBPanel";

const mockData = [
  {
    id: "1",
    name: "Tab1",
    content: "Tab1 Content",
  },
  {
    id: "2",
    name: "Tab2",
    content: "Tab2 Content",
  },
  {
    id: "3",
    name: "Tab3",
    content: "Tab3 Content",
  },
];

const PaymentBoard = () => {
  const [activeTab, setActiveTab] = React.useState(mockData[0].id);
  const handleTabClick = (id: string) => {
    // console.log(id);
    setActiveTab(id);
  };

  const TabContent = () => {
    const tab = mockData.find((tab) => tab.id === activeTab);
    if (tab) {
      return <div>{tab.content}</div>;
    } else {
      return <div>Tab not found</div>;
    }
  };
  return (
    <div className=" flex flex-col grow">
      <PBTabSection
        tabs={mockData.map((tab) => ({
          id: tab.id,
          name: tab.name,
          active: tab.id === activeTab,
        }))}
        handleTabClick={handleTabClick}
      />
      <PBPanel content={<TabContent/>} />
    </div>
  );
};

export default PaymentBoard;
