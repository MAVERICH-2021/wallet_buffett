import { TradeRecord } from "../types/TradeRecord";

interface RecordItemProps {
  data: TradeRecord;
  handleDelete: (id: string) => void;
}

const RecordItem = ({ handleDelete,data }: RecordItemProps) => {
  return (
    <tr id={data.id} onClick={()=>{}} onDoubleClick={()=>handleDelete(data.id)}>
      <td>{data.symbol}</td>
      <td>${data.ammount.toFixed(2)}</td>
      <td>${data.price.toFixed(8)}</td>
      <td>{data.leverage}</td>
      <td>${data.lossPrice.toFixed(8)}</td>
      <td>${data.revenuePrice.toFixed(8)}</td>
      <td>
        {new Date(data.timestamp).toLocaleDateString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </td>
      <td>{data.result.charAt(0).toUpperCase() + data.result.slice(1)}</td>
      <td>${data.usdChange}</td>
      <td>{data.percentageChange}%</td>
    </tr>
  );
};

export default RecordItem;
