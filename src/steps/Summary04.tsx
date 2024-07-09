import { useContext } from 'react'
import { appContext } from '../context/AppContext'
import { PricesAddOns } from '../consts/prices'
function Summary04({ colectiveClassname }: { colectiveClassname: string }) {
  const { data } = useContext(appContext)
  function selectPrice(addon: string) {
    if (addon === 'Online Service') {
      return <span>${PricesAddOns.onlineService}</span>
    }
    if (addon === 'Larger storage') {
      return <span>${PricesAddOns.largerStorage}</span>
    }
    if (addon === 'Customizable profile') {
      return <span>${PricesAddOns.customizableProfile}</span>
    }
    return null
  }
  return (
    <div className={colectiveClassname}>
      <h1 className='text-4xl font-bold'>Finishing up</h1>
      <p className='text-black/40 text-wrap'>
        Double-check everythings look OK before confirming.
      </p>
      <h1 className='capitalize'>{`${data.plan}(${data.billing})`}</h1>
      {data.addons.map((addon, i) => {
        return (
          <div key={i} className='capitalize'>
            <span>{addon}</span>
            {selectPrice(addon)}
          </div>
        )
      })}
    </div>
  )
}

export default Summary04
