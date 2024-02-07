import ConfirmationPopup from "@/components/popups/ConfirmationPopup/ConfirmationPopup";
import { contextFactory } from "./helpers/contextFactory";
import { useToggleState } from "@/hooks/useToggleState";
type ConfirmationPopupValues = {
  isConfirmationPopupVisible: boolean;
  showConfirmationPopup: () => void;
  hideConfirmationPopup: () => void;
  toggleConfirmationPopup: () => void;
};

//這裏進行了重命名
const [
  ConfirmationPopupContext,
  useConfirmationPopupContext,
  useConfirmationPopupContextSelector,
] = contextFactory<ConfirmationPopupValues>();

//并不直接暴露ConfirmationPopupContext
export { useConfirmationPopupContext, useConfirmationPopupContextSelector };

type ConfirmationPopupContextProviderProps = {
  
  children: React.ReactNode;
};

const ConfirmationPopupContextProvider = (
  //ctx provider组件 对context进行了封装
  props: ConfirmationPopupContextProviderProps
) => {
  const { children } = props;
  const {
    state: isConfirmationPopupVisible,
    open: showConfirmationPopup,
    close: hideConfirmationPopup,
    toggle: toggleConfirmationPopup,
  } = useToggleState(false);

  return (
    <ConfirmationPopupContext.Provider
      value={{
        isConfirmationPopupVisible,
        showConfirmationPopup,
        hideConfirmationPopup,
        toggleConfirmationPopup,
      }}
    >
      {children}
      {/* 把spinner直接放在context组件当中. 组件本身就是一个范围,一个各个组件的容器 */}
      <ConfirmationPopup />
    </ConfirmationPopupContext.Provider>
  );
};

export default ConfirmationPopupContextProvider;
