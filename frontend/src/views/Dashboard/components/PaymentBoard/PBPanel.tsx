import { ReactNode } from "react";

interface PBPanelProps {
      content: ReactNode
}
const PBPanel = ({content}:PBPanelProps) => {
   return ( 
      <div className=" m-auto">{content}</div>
    );
}
 
export default PBPanel;