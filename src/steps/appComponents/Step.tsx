import { useContext } from "react"
import { appContext } from "../../context/AppContext"

function Step({children, step, validation} : {children: React.ReactNode, step: number, validation? : string}) {
  const { steps, setSteps } = useContext(appContext)
  function handleChangeSteps() {
    if (validation) {
      steps !== 5 && setSteps(step)
    } else {
      return
    }
  }
  return (
    <div className="flex gap-3">
    <span onClick={handleChangeSteps} className={`${steps === step ? "bg-white/50 text-blue-950" : "border-2 text-white/70"} flex items-center justify-center size-10 font-bold rounded-full cursor-pointer transition-all ${!validation && "opacity-30 scale-90 cursor-default"}`}>{step}</span>
    <div>
    <h2 className={`${!validation && "opacity-50 scale-90"} text-white/50  transition-all lg:text-base text-[0px]`}>STEP {step}</h2>
    <h1 className={`${!validation && "opacity-50 scale-90"} transition-all lg:text-base text-[0px]`}>{children}</h1>
    </div>
    </div>
  )
  
}

export default Step