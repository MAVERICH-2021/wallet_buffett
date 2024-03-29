import { useState } from "react";
import "./App.css";

import useGreenBorder from "./hooks/useGreenBorder";
import { Link } from "react-router-dom";
import { AppRouter } from "./router";
import { IconArrow } from "./assets/icons/icons";
import GlobalSpinnerContextProvider from "./contexts/GlobalSpinnerContext";
import GlobalSpinnerExample from "./components/popups/GlobalSpinner/GlobalSpinnerExample";

function App() {
  const switchGreenBorder = useGreenBorder();
  const [isToolboxExpanded, setIsToolboxExpanded] = useState(false);

  const handleToolboxExpansion = () => {
    setIsToolboxExpanded(!isToolboxExpanded);
  };
  return (
    // TODO: add hide scroll bar feature to the whole app
    <div className="App hide-scrollbar h-screen w-screen">
      <div className="toolbox absolute right-4 top-4 flex">
        <div className="toolbox-handler" onClick={handleToolboxExpansion}>
          <div
            className={
              isToolboxExpanded ? "rotate-[-90deg]" : " rotate-[90deg]"
            }
          >
            <IconArrow />
          </div>
        </div>
        <div
          className="toolbox-content  flex justify-between space-x-2 "
          style={{
            // color: "white",
            // width: isToolboxExpanded ? "100%" : "0",
            // left: isToolboxExpanded ? "0" : "-100px",
            visibility: isToolboxExpanded ? "visible" : "hidden",
          }}
        >
          <button
            className="  text-xs text-white bg-green-600 p-1 rounded"
            onClick={switchGreenBorder}
          >
            Green Border
          </button>

          <button className="  text-xs text-white bg-green-600 p-1 rounded">
            <Link to={"/test"}>Test Page</Link>
          </button>
          <GlobalSpinnerContextProvider>
            <div className="App mx-auto max-w-6xl text-center ">
              <GlobalSpinnerExample />
            </div>
          </GlobalSpinnerContextProvider>
        </div>
      </div>

      <AppRouter />
    </div>
  );
}

export default App;
