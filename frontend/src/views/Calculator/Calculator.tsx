import { use } from "i18next";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import ResultItem from "./components/ResultItem";
import NumberInput from "./components/NumberInput";
import clsx from "clsx";
import Devider from "./components/Devider";
import RecordPanel from "./RecordPanel/RecordPanel";
import { createTradeRecord } from "./types/TradeRecord";
import { addLSTradeRecord } from "./helper/LSTradeRecordHelper";

type CalcuData = {
  invest_ammount: number;
  current_price: number;
  leverage: number;
  loss_percentage: number;
  gain_percentage: number;
  //  result: number;
};

const Calculator = () => {
  const [data, setData] = useImmer<CalcuData>({
    invest_ammount: 0,
    current_price: 0,
    leverage: 0,
    loss_percentage: 0,
    gain_percentage: 0,
  });
  const [symbol, setSymbol] = useState<string>("BTC");
  const [gain, setGain] = useState<number>(0);
  const [loss, setLoss] = useState<number>(0);
  // console.log("data: ", data);
  const [result, setResult] = useState<number>(0);

  const [direction, setDirection] = useState<1 | -1>(1); // 1: up, -1: down

  const [baocangxian, setBaocangxian] = useState<number>(0);

  const [revenue, setRevenue] = useState<number>(0);

  const [tradeType, setTradeType] = useState<"Contrast" | "Leverage">(
    "Contrast"
  );

  const handleReset = () => {
    setData((draft) => {
      draft.invest_ammount = 0;
      draft.current_price = 0;
      draft.leverage = 0;
      draft.loss_percentage = 0;
      draft.gain_percentage = 0;
    });
  };
  const handleCommit = () => {
    const record = createTradeRecord({
      symbol: symbol,
      ammount: data.invest_ammount,
      price: data.current_price,
      lossPrice: data.loss_percentage,
      revenuePrice: data.gain_percentage,
      leverage: data.leverage,
    });
    addLSTradeRecord(record);
  };

  useEffect(() => {
    data.leverage * data.loss_percentage;
    const result =
      data.current_price *
      (1 - (direction * data.loss_percentage) / 100 / data.leverage);
    setResult(result);

    const baocangxianOperator = tradeType === "Contrast" ? 2 : 1;
    const baocangxian =
      data.current_price *
      (1 - direction / data.leverage / baocangxianOperator);
    setBaocangxian(baocangxian);

    const revenue =
      data.current_price *
      (1 + (direction * data.gain_percentage) / 100 / data.leverage);
    setRevenue(revenue);

    const gain = (data.invest_ammount * data.gain_percentage) / 100;
    setGain(gain);

    const loss = (data.invest_ammount * data.loss_percentage) / 100;
    setLoss(loss);
  }, [
    data.current_price,
    data.loss_percentage,
    data.gain_percentage,
    data.leverage,
    direction,
    tradeType,
  ]);

  const ratio = gain / loss;

  return (
    <div>
      <div className="  m-2">
        <div className=" flex items-center my-auto ">
          <input
            type="text"
            name="symbol"
            id="input_symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="input input-primary input-text  input-sm mt-4 w-1/8 "
          />
          <div className=" flex flex-col" >
            <select
              id="trade_type"
              className=" input input-secondary input-xs"
              value={tradeType}
              onChange={(e) => {
                setTradeType(e.target.value as "Contrast" | "Leverage");
              }}
            >
              <option value="Contrast">合约</option>
              <option value="Leverage">杠杆</option>
            </select>

            <select
              id="direction"
              className={clsx(
                " input input-secondary text-black input-xs my-auto",
                direction === 1 ? " bg-red-400" : " bg-green-400"
              )}
              value={direction}
              onChange={(e) => {
                setDirection(e.target.value as 1 | -1);
              }}
            >
              <option value={1} className=" bg-red-400">
                做多
              </option>
              <option value={-1} className="bg-green-400">
                做空
              </option>
            </select>
          </div>
        </div>

        <div className=" inline-block">
          <NumberInput
            label="Invest ammount"
            id="invest_ammount"
            data={data}
            dataAttribute="invest_ammount"
            setData={setData}
          />

          <Devider content="X" />

          <NumberInput
            label="Current price"
            id="current_price"
            data={data}
            dataAttribute="current_price"
            setData={setData}
          />

          <Devider content="X" />

          <NumberInput
            label="杠杆"
            id="leverage"
            data={data}
            dataAttribute="leverage"
            setData={setData}
          />

          <Devider content="~" />

          <div className="inline-block  ">
            <NumberInput
              label="可接受损失( Percent% )"
              id="loss_percentage"
              data={data}
              dataAttribute="loss_percentage"
              setData={setData}
            />
            <p className=" text-xl inline-block  m-8">1:{ratio}</p>
            <NumberInput
              label="目标利润( Percent% )"
              id="gain_percentage"
              data={data}
              dataAttribute="gain_percentage"
              setData={setData}
            />
          </div>
        </div>

        <div className=" flex">
          <div className=" flex flex-col  justify-center  ">
            <div id="results_section" className="flex flex-col">
              <ResultItem label="止盈线" result={revenue} />
              <ResultItem label="止损线" result={result} />
              <ResultItem label="爆仓线" result={baocangxian} />
              <ResultItem label="预期盈利" result={gain} />
              <ResultItem label="预期亏损" result={loss} />
            </div>

            <div
              id="btn_section  "
              className="flex items-center mt-8 space-x-8"
            >
              <div className="btn btn-success" onClick={handleCommit}>
                Confirm
              </div>
              <div className="btn  btn-warning" onClick={handleReset}>
                Reset
              </div>
            </div>
          </div>

          <div className="grow p-8">
            <RecordPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
