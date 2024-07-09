import { useContext } from "react"
import { appContext } from "../../context/AppContext"

function Step({children, step} : {children: React.ReactNode, step: number}) {
  const { steps, setSteps } = useContext(appContext)

  return (
    <div className="flex gap-3">
    <span onClick={() => setSteps(step)} className={`${steps === step ? "bg-white/50 text-blue-950" : "border-2 text-white/70"} flex items-center justify-center size-10 font-bold rounded-full cursor-pointer`}>{step}</span>
    <div>
    <h2 className="text-white/50">STEP {step}</h2>
    <h1>{children}</h1>
    </div>
    </div>
  )
  
}

export default Step