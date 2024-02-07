import ErrorPopup from '@/components/popups/ErrorPopup/ErrorPopup'
import { contextFactory } from './helpers/contextFactory'
import { useToggleState } from '@/hooks/useToggleState'
type ErrorPopupValues = {
  isPopupVisible: boolean
  showPopup: () => void
  hidePopup: () => void
  togglePopup: () => void
}

//這裏進行了重命名
const [
  ErrorPopupContext,
  useErrorPopupContext,
  useErrorPopupContextSelector,
] = contextFactory<ErrorPopupValues>()

//并不直接暴露ErrorPopupContext
export { useErrorPopupContext, useErrorPopupContextSelector }

type ErrorPopupContextProviderProps = {
  children: React.ReactNode
}

const ErrorPopupContextProvider = ( //ctx provider组件 对context进行了封装
  props: ErrorPopupContextProviderProps
) => {
  const { children } = props
  const {
    state: isPopupVisible,
    open: showPopup,
    close: hidePopup,
    toggle: togglePopup,
  } = useToggleState(false)

  return (
    <ErrorPopupContext.Provider
      value={{
        isPopupVisible,
        showPopup,
        hidePopup,
        togglePopup,
      }}
    >
      {children}
      {/* 把spinner直接放在context组件当中. 组件本身就是一个范围,一个各个组件的容器 */}
      <ErrorPopup />
    </ErrorPopupContext.Provider>
  )
}

export default ErrorPopupContextProvider
