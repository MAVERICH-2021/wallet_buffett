import uuid from "react-uuid";

//create a trade recor type
export type TradeRecord = {
  id: string;
  symbol?: string;
  ammount: number;
  price: number;
  lossPrice: number;
  revenuePrice: number;
  timestamp: number;
  feeRate: number;
  usdChange: number;
  percentageChange: number;
  result: "fail" | "success" | "pending";
  leverage: number;
};

interface createTradeRecordProps {
  ammount: number;
  price: number;
  lossPrice: number;
  revenuePrice: number;
  leverage: number;
  symbol?: string;
  feeRate?: number;
  usdChange?: number;
  percentageChange?: number;
  result?: "fail" | "success" | "pending";
}
//create a trade record create method
export const createTradeRecord = (
  prop: createTradeRecordProps
): TradeRecord => {
  //create default value for trade record ; feeRate, usdChange, percentageChange
  if (!prop.symbol) {
    prop.symbol = "BTC";
  }

  if (!prop.feeRate) {
    prop.feeRate = 0;
  }
  if (!prop.usdChange) {
    prop.usdChange = 0;
  }
  if (!prop.percentageChange) {
    prop.percentageChange = 0;
  }
  if (!prop.result) {
    prop.result = "pending";
  }

  return {
    id: uuid(),
    timestamp: Date.now(),
    leverage: prop.leverage,
    symbol: prop.symbol,
    ammount: prop.ammount,
    price: prop.price,
    lossPrice: prop.lossPrice,
    revenuePrice: prop.revenuePrice,
    feeRate: prop.feeRate,
    usdChange: prop.usdChange,
    percentageChange: prop.percentageChange,
    result: prop.result,
  };
};
