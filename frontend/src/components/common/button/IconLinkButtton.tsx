
interface IconButtonProps {
   icon: any;
   tooltip: string;
   path:string;
 }
const IconLinkButton = ({ icon, tooltip ,path}: IconButtonProps) => {
   return (
      <a href={path} className="tooltip tooltip-right text-4xl  my-4" data-tip={tooltip}>
       {icon}
     </a>
   );
 };

 export default IconLinkButton;