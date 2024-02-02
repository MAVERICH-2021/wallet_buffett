import { Link } from "react-router-dom";

interface IconButtonProps {
  icon: any;
  tooltip: string;
  path: string;
}
const IconLinkButton = ({ icon, tooltip, path }: IconButtonProps) => {
  return (
    <Link
      to={path}
      className="tooltip tooltip-right text-2xl  my-4"
      data-tip={tooltip}
    >
      {icon}
    </Link>
  );
};

export default IconLinkButton;
