import { useErrorPopupContextSelector } from "@/contexts/ErrorPopupContext";
import clsx from "clsx";

const ErrorPopup = () => {
const isPopupVisible = useErrorPopupContextSelector(
   (values) => values.isPopupVisible
)

   return ( 
      <div className=" relative">

      <div className={clsx("error-popup m-auto",!isPopupVisible&&"hidden",isPopupVisible&&"visible")}>
         <div className="error-popup__content">
            <h2 className="error-popup__title">Error</h2>
            <p className="error-popup__text">Something went wrong. Please try again later.</p>
         </div>
      </div>
      </div>
    );
}
 
export default ErrorPopup;