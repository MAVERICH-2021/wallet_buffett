import { TradeRecord } from "../types/TradeRecord";

const getLSTradeRecords = () => {
   const tradeRecords = localStorage.getItem("trade_records");
   return tradeRecords ? JSON.parse(tradeRecords) : [];
}

const addLSTradeRecord = (record:TradeRecord) => {
   const tradeRecords = getLSTradeRecords();
   tradeRecords.push(record);
   localStorage.setItem("trade_records", JSON.stringify(tradeRecords));
}

const deleteLSTradeRecord = (recordId:string) => {
   const tradeRecords = getLSTradeRecords();
   const newTradeRecords = tradeRecords.filter((r:TradeRecord) => r.id !== recordId);
   localStorage.setItem("trade_records", JSON.stringify(newTradeRecords));
}

export { getLSTradeRecords, addLSTradeRecord, deleteLSTradeRecord };