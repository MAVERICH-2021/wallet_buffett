import { getCapitalizedString } from "@/helpers/stringFormater";
import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

interface NavTabProps {
  label: string;
  icon?: React.ReactNode;
  linkPathId: string;
  checked?: boolean;
}
const ASNMTab = ({ label, icon, linkPathId, checked }: NavTabProps) => {
  return (
    <li
      className={clsx("flex flex-row  items-center ",checked && "bg-secondary-content", )}
      aria-label={label}
    >
      <div className=" text-2xl">{icon}</div>
      <Link to={"/dashboard/asset" + linkPathId}>{getCapitalizedString(label)}</Link>
    </li>
  );
};

export default ASNMTab;
