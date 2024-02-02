import { ReactNode } from "react";


interface PriceRecord{
   name: string
}

const PriceRecord = ()=>{
   return (
      <div className="flex flex-row grow">
         <div>Record</div>
      </div>
   )
}

interface MDPanelProps {
   content: ReactNode
}


const MDPanel = ({content}:MDPanelProps) => {
   return ( 
      <div>

      {content}
      </div>
    );
}
 
export default MDPanel;