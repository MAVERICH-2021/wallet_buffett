import { useEffect, useState } from "react";
import ASNavMenu from "./ASNavMenu";
import { useParams } from "react-router";

interface NavBtnProps {
  label: string;
  checked: boolean;
  onClick: () => void;
}
const NavBtn = ({ label, checked, onClick }: NavBtnProps) => {
  return (
    <input
      className="join-item btn btn-square bg-blue-gray-900 text-primary  px-2"
      type="radio"
      name="options"
      aria-label={label}
      checked={checked}
      onClick={onClick}
      // checked
    />
  );
};

const AssetSidebar = () => {
  //create types for lables
  const [checked, setChecked] = useState<"Cash" | "Stock" | "Crypto" | "Metal">(
    "Cash"
  );
  const { tab } = useParams();

  useEffect(() => {
    if (tab) {
      // console.log("2: ", tab);
      setChecked(tab as "Cash" | "Stock" | "Crypto" | "Metal");
      // console.log("3: ", tab);
    }
  }, [tab]);
  /* 
  useEffect(() => {
    console.log("1: ", tab);
    if (tab) {
      console.log("2: ", tab);
      setChecked(tab as "Cash" | "Stock" | "Crypto" | "Metal");
      console.log("3: ", tab);
    }
  }, [tab]); */

  return (
    <div className=" flex flex-col grow-0 min-w-[280px] bg-primary-content bg-opacity-40">
      <div className="navigator join w-full flex justify-center  pt-4">
        <NavBtn
          label="Cash"
          checked={checked === "Cash"}
          // checked={true}
          onClick={() => setChecked("Cash")}
        />
        <NavBtn
          label="Stock"
          checked={checked === "Stock"}
          onClick={() => setChecked("Stock")}
        />
        {/* Crypto is also a cash */}
        {/*         <NavBtn
          label="Crypto"
          checked={checked === "Crypto"}
          onClick={() => setChecked("Crypto")}
        /> */}
        <NavBtn
          label="Metal"
          checked={checked === "Metal"}
          onClick={() => setChecked("Metal")}
        />
      </div>

      <ASNavMenu />
    </div>
  );
};

export default AssetSidebar;
