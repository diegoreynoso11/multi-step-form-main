import {  useContext } from 'react'
import { appContext } from '../context/AppContext'

function HeroSpan({ children, plus }: { children: number, plus? : boolean }) {
    const { data } = useContext(appContext)
  
    
    if (data.billing === 'yearly') return <span className='text-inherit'>{plus && "+"}${children * 10}/yr</span>
  return <span className='text-inherit'>{plus && "+"}${children}/mo</span>
}

export default HeroSpan
