import { useContext } from 'react'
import { appContext } from '../../context/AppContext'

function Switch() {
  const { data, setData } = useContext(appContext)
    function handleToggle() {
    setData(({ ...data, billing: data.billing === "monthly" ? "yearly" : "monthly" }))
    }
  return (
    <label className='flex justify-around w-full bg-slate-500/10 rounded-lg my-10 py-3 px-20 items-center cursor-pointer'>
      <span className={`${data.billing === "monthly" ? "text-gray-900" : "text-gray-900/40"} ms-3 text-sm font-medium dark:text-gray-300`}>
        Monthly
      </span>
      <input onChange={handleToggle} type='checkbox' value='' className='sr-only peer' checked={data.billing === "yearly"} />
      <div className="relative w-11 h-6 bg-green-700 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-green-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-green-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-green-600 peer-checked:bg-blue-600"></div>
      <span className={`${data.billing === "yearly" ? "text-gray-900" : "text-gray-900/40"} ms-3 text-sm font-medium dark:text-gray-300`}>
        Yearly
      </span>
    </label>
  )
}

export default Switch
