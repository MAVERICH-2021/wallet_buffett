import { useEffect, useState } from "react";
import {
  deleteLSTradeRecord,
  getLSTradeRecords,
} from "../helper/LSTradeRecordHelper";
import { TradeRecord, createTradeRecord } from "../types/TradeRecord";
import RecordItem from "./RecordItem";

const RecordPanel = () => {
  const [records, setRecords] = useState<TradeRecord[]>([]);

  const handleDelete = (id: string) => {
    const newRecords = records.filter((record) => record.id !== id);
    setRecords(newRecords);
    deleteLSTradeRecord(id);
  };

  useEffect(() => {
    const records = getLSTradeRecords();
    setRecords(records);
  });

  return (
    <div className="record-panel">
      <h2>Record Panel</h2>
      <div className="overflow-x-auto bg-secondary-content p-2 rounded-xl m-2">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>symbol</th>
              <th>ammount</th>
              <th>price</th>
              <th>leverage</th>
              <th>lossPrice</th>
              <th>revenuePrice</th>
              <th>timestamp</th>
              <th>result</th>
              <th>usdChange</th>
              <th>percentageChange</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <RecordItem data={record} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecordPanel;
