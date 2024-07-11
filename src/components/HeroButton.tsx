import { useContext } from 'react'
import { appContext } from '../context/AppContext'

function HeroButton({ error, name }: { error?: string; name?: string }) {
  const { data, steps, setSteps } = useContext(appContext)
  function handleNextStep() {
    if (data.name && data.email && data.phone) {
      setSteps(steps + 1)
    }
  }
  return (
    <div
      className={`absolute bg-white lg:bg-transparent py-5 right-0 w-screen lg:w-auto lg:right-20 lg:bottom-10 -bottom-1 flex justify-around lg:justify-between lg:min-w-[430px]`}
    >
      <button
        onClick={() => setSteps(steps - 1)}
        className={`lg:text-blue-800/50 lg:hover:text-blue-800 transition-all px-3 rounded-md font-semibold ring-0 lg:hover:ring-2 ${steps === 1 && "opacity-0 cursor-default"}`}
        disabled={steps === 1}
      >
        Go back
      </button>
      <button
        onClick={handleNextStep}
        className={`${
          error && 'bg-red-800 ring-2 ring-red-800 hover:bg-red-900'
        } ${
          name &&
          'animate-scale bg-green-800 ring-2 ring-green-800 hover:bg-green-900'
        } bg-[#174a8b] px-3 py-2 hover:bg-[#163052] rounded-md text-white/90`}
      >
        {steps === 4 ? 'Confirm' : 'Next step'}
      </button>
    </div>
  )
}

export default HeroButton
