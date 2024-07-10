import { useContext } from 'react'
import { appContext } from '../context/AppContext'

function HeroButton() {
    const { steps, setSteps } = useContext(appContext)
  return (
    <div className="absolute right-20 bottom-10 flex justify-between min-w-[430px] ">
          <button onClick={() => setSteps(steps - 1)} className="text-blue-800/50 hover:text-blue-800 transition-all px-3 rounded-md font-semibold ring-0 hover:ring-2">
            Go back
          </button>
        <button onClick={() => setSteps(steps + 1)} className={` bg-[#174a8b] px-3 py-2 hover:bg-[#163052] rounded-md text-white/90`}>
          {steps === 3 ? "Next step" : "Confirm"}
        </button>
        </div>
  )
}

export default HeroButton