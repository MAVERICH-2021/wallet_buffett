import RechartComponent from "@/components/charts/RechartConponent";
import { useParams } from "react-router";
import AssetPanelTable from "./AssetPanelTable";

const AssetPanel = () => {
  const { id } = useParams();
  const balance1 = Math.random() * 1000;
  const balance2 = Math.random() * 1000;

  const StatBox = () => {
    return (
      <div className="  flex  flex-col md:flex-row  pt-4 space-x-4 px-4">
        <div className="stats bg-primary text-primary-content flex flex-row max-w-md">
          <div className="stat">
            <div className="stat-title">Account balance</div>
            <div className="stat-value">{"$"+balance1.toFixed(2)}</div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-success">Add funds</button>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Current balance</div>
            <div className="stat-value">{"$"+balance2.toFixed(2)}</div>
            <div className="stat-actions">
              <button className="btn btn-sm">Withdrawal</button>
              <button className="btn btn-sm">deposit</button>
            </div>
          </div>
        </div>
        <div className=" grow px-4  min-h-[40px] ">
          <RechartComponent />
        </div>
      </div>
    );
  };
  return (
    <div className=" flex flex-col grow">
      <p className=" absolute text-white bottom-0 right-0 m-4">{id}</p>
      <StatBox />
      <AssetPanelTable />
    </div>
  );
};

export default AssetPanel;
