import { useErrorPopupContextSelector } from "@/contexts/ErrorPopupContext"

type ErrorPopupExampleProps = {}

const ErrorPopupExample = ({}: ErrorPopupExampleProps) => {
  const showPopup = useErrorPopupContextSelector((ctx) => ctx.showPopup)
  const hidePopup = useErrorPopupContextSelector((ctx) => ctx.hidePopup)

  const onShowPopup = () => {
    showPopup()
    setTimeout(hidePopup, 2000) //两秒后隐藏
  }

  return (
    <div onClick={onShowPopup} className=" hover:cursor-pointer bg-green-600 rounded p-1">
        Popup
    </div>
  )
}

export default ErrorPopupExample
