import { useGlobalSpinnerContextSelector } from "@/contexts/GlobalSpinnerContext"

type GlobalSpinnerExampleProps = {}

const GlobalSpinnerExample = ({}: GlobalSpinnerExampleProps) => {
  const showSpinner = useGlobalSpinnerContextSelector((ctx) => ctx.showSpinner)
  const hideSpinner = useGlobalSpinnerContextSelector((ctx) => ctx.hideSpinner)

  const onShowSpinner = () => {
    showSpinner()
    setTimeout(hideSpinner, 2000) //两秒后隐藏
  }

  return (
    <div onClick={onShowSpinner} className=" hover:cursor-pointer bg-green-600 rounded p-1">
        Spinner
    </div>
  )
}

export default GlobalSpinnerExample
