import { getUserPreferences } from "@/api/userPreferenceApi";
import { IconDownArrow, IconUSD, IconUpArrow } from "@/assets/icons/icons";
import { getNumberWithCommas } from "@/helpers/stringFormater";
import clsx from "clsx";

interface TotalSectionProps {
  title: string;
  amount: number;
  percentage: number;
  currencyIcon?: React.ReactElement;
}
const TotalSection = ({
  title,
  amount,
  percentage,
  currencyIcon,
}: TotalSectionProps) => {
  let color = {
    "price-up": "red",
    "price-down": "green",
  };
  const prefColor = getUserPreferences();
  if (prefColor) {
    color = prefColor.color;
  }

  return (
    //TODO: add horizontal scroll with mouse scroll. show the scroll bar only when the content is overflowing
    
    <div className="w-full md:w-4/12 pr-2 mb-6 min-w-[280px]">
      <div className="shadow rounded-2xl p-4 bg-white">
        <div className="flex items-center">
          <span className="rounded-xl relative p-4 bg-purple-200">
            {currencyIcon || <IconUSD />}
          </span>
          <p className="text-md text-black ml-2">{title || "Total Gains"}</p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="flex text-gray-700 text-4xl text-left font-bold my-4">
            {getNumberWithCommas(amount) || 0}
            <span className="text-sm self-end">
              {currencyIcon || <IconUSD />}
            </span>
          </p>

          <div
            className={clsx(
              "flex items-center text-sm ",
              percentage > 0 && "text-" + color["price-up"] + "-400",
              percentage < 0 && "text-" + color["price-down"] + "-400"
            )}
          >
            {percentage > 0 ? <IconUpArrow /> : <IconDownArrow />}
            <span>{percentage}%</span>
            <span className="text-gray-400">vs last month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalSection;
