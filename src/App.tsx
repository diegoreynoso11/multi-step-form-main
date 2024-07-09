import { useState } from 'react'
import './App.css'
import { appContext } from './context/AppContext'
import SidebarDesktop from './components/SidebarDesktop'
import YourInfo from './steps/YourInfo01'
import SelectPlan from './steps/SelectPlan02'
import AddOns03 from './steps/AddOns03'
import Summary04 from './steps/Summary04'
import StepsIndicator from './steps/appComponents/StepsIndicator'

window.addEventListener('load', () => {
  window.localStorage.removeItem('data')
})


const initialData = JSON.parse(window.localStorage.getItem('data') || 'null')
function App() {
  const [steps, setSteps] = useState(1)
  const [error, setError] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [data, setData] = useState(initialData || {
    name: '',
    email: '',
    phone: '',
    plan: '',
    billing: 'monthly',
    addons: ["","",""],
  })
  function showElement() {
    const colectiveClasname = "min-w-[600px] max-w-[601px] h-full my-2 px-20 py-10 flex flex-col relative"
    switch (steps) {
      case 1:
        return <YourInfo colectiveClassname={colectiveClasname}></YourInfo>
      case 2:
        return <SelectPlan colectiveClassname={colectiveClasname}></SelectPlan>
      case 3:
        return <AddOns03 colectiveClassname={colectiveClasname}></AddOns03>
      case 4:
        return <Summary04 colectiveClassname={colectiveClasname}></Summary04>
      default:
        return <YourInfo colectiveClassname={colectiveClasname}></YourInfo>
    }
  }
  console.log(data)
  return (
    <appContext.Provider value={{ steps, setSteps, error, setError, data, setData }}>
      <main className='flex flex-col h-screen justify-center items-center '>
        <section className='relative w-full flex justify-center gap-5 items-center bg-white min-h-[600px] max-w-[940px] m-auto rounded-xl shadow-lg'>
          <SidebarDesktop></SidebarDesktop>
          <StepsIndicator></StepsIndicator>
          {
            showElement()
          }
        </section>
      </main>
    </appContext.Provider>
  )
}

export default App
