import { useContext, useEffect, useState } from 'react'
import { appContext } from '../context/AppContext'
import { PricesAddOns, PricesPlans } from '../consts/prices'
import HeroSpan from '../components/HeroSpan'
import HeroButton from '../components/HeroButton'
function Summary04({ colectiveClassname }: { colectiveClassname: string }) {
  const { data, setData, setSteps } = useContext(appContext)
  const [values, setValues ] = useState<number[]>([])
  setValues([])
  function selectPrice(addon: string) {
    if (addon === 'Online Service') {
      values.push(PricesAddOns.onlineService)
      return <HeroSpan plus>{PricesAddOns.onlineService}</HeroSpan>
    }
    if (addon === 'Larger storage') {
      values.push(PricesAddOns.largerStorage)
      return <HeroSpan plus>{PricesAddOns.largerStorage}</HeroSpan>
    }
    if (addon === 'Customizable profile') {
      values.push(PricesAddOns.customizableProfile)
      return <HeroSpan plus>{PricesAddOns.customizableProfile}</HeroSpan>
    }
    return null
  }

  function getPriceBilling() {
    const formatPlan = data.plan.toLowerCase()
    const Prices = PricesPlans[formatPlan]
    if (data.billing === 'monthly') {
      values.push(Prices)
      return <HeroSpan>{Prices}</HeroSpan>
    }
    if (data.billing === 'yearly') {
      values.push(Prices)
      return <HeroSpan>{Prices}</HeroSpan>
    }
    return null
  }

  useEffect(() => {
    const totalValue = values.reduce((acc, val) => acc + Number(val), 0)
    setData({ ...data, total: totalValue })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])
  return (
    <div className={colectiveClassname}>
      <h1 className='text-4xl font-bold'>Finishing up</h1>
      <p className='text-black/40 text-wrap'>
        Double-check everythings look OK before confirming.
      </p>
      <div
        className='bg-violet-500/5 rounded-lg p-5 flex flex-col gap-4'
      >
        <div className='flex w-full justify-between'>
          <h1 className='capitalize font-semibold text-violet-900'>{`${data.plan} (${data.billing})`}</h1>
          {getPriceBilling()}
        </div>
        <button onClick={() => setSteps(2)} className='flex underline'>Change</button>
        <div className='bg-violet-900/20 h-[1px] w-full rounded-[100%] '></div>
        {data.addons.map((addon, i) => {
          return (
            <div key={i} className=' flex justify-between'>
              <span className='text-slate-900/50'>{addon}</span>
              {selectPrice(addon)}
            </div>
          )
        })}
      </div>
      <div className='flex p-5  justify-between w-full'>
        <h1 className='text-slate-900/50'>Total</h1>
        <span className='text-xl font-bold text-violet-600'>
        <HeroSpan plus>{data.total}</HeroSpan>
        </span>
      </div>
      <HeroButton></HeroButton>
    </div>
  )
}

export default Summary04
