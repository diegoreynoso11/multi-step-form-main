import { useContext } from 'react'
import IconAdvance from './icons/IconAdvance'
import IconArcade from './icons/IconArcade'
import IconPro from './icons/IconPro'
import { appContext } from '../../context/AppContext'

function Plan({
  price,
  children,
  arcade,
  pro,
  advance,
}: {
  price: number
  children: string
  arcade?: boolean
  pro?: boolean
  advance?: boolean
}) {
    const { data , setData } = useContext(appContext)
  function getIcon() {
    if (arcade) return <IconArcade></IconArcade>
    if (pro) return <IconPro></IconPro>
    if (advance) return <IconAdvance></IconAdvance>
  }
  function handleSelectPlan() {
    setData(({ ...data, plan: children }))
    
  }
  
  const pricePerBilling = `$${(data.billing === 'monthly' ? price : price * 10)}${data.billing === 'monthly' ? '/mo' : '/yr'}`
  return (
    <button onClick={handleSelectPlan} className={`${data.plan === children && "bg-violet-800/5 shadow-none ring-1 ring-violet-500"} lg:min-h-[200px] w-full flex lg:flex-col flex-row relative items-start justify-around border p-3 rounded-lg ring-0 shadow-lg hover:ring-violet-500 hover:ring-1 active:bg-violet-500/10 active:shadow-none transition-all`}>
      {getIcon()}
      <h3 className='font-bold'>{children}</h3>
      {data.billing === "yearly" && <span className='absolute bottom-2 lg:static text-xs text-blue-700 font-semibold'>2 months free</span>}
      <p className='text-black/40'>{pricePerBilling}</p>
    </button>
  )
}

export default Plan
