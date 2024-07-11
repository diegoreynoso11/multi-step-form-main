import { useState } from 'react'
import './App.css'
import { appContext } from './context/AppContext'
import SidebarDesktop from './components/SidebarDesktop'
import YourInfo from './steps/YourInfo01'
import SelectPlan from './steps/SelectPlan02'
import AddOns03 from './steps/AddOns03'
import Summary04 from './steps/Summary04'
import StepsIndicator from './steps/appComponents/StepsIndicator'
import Finnish05 from './steps/Finnish05'
import SideBarPhone from './components/SideBarPhone'

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
    total : 0
  })
  function showElement() {
    const colectiveClasname = "lg:min-w-[600px] w-[85%] lg:max-w-[601px] lg:h-full  lg:px-20 lg:py-10 flex flex-col lg:relative"
    switch (steps) {
      case 1:
        return <YourInfo colectiveClassname={colectiveClasname}></YourInfo>
      case 2:
        return <SelectPlan colectiveClassname={colectiveClasname}></SelectPlan>
      case 3:
        return <AddOns03 colectiveClassname={colectiveClasname}></AddOns03>
      case 4:
        return <Summary04 colectiveClassname={colectiveClasname}></Summary04>
      case 5:
        return <Finnish05 colectiveClassname={colectiveClasname}></Finnish05>
      default:
        return <YourInfo colectiveClassname={colectiveClasname}></YourInfo>
    }
  }
  return (
    <appContext.Provider value={{ steps, setSteps, error, setError, data, setData }}>
      <main className='flex flex-col lg:h-screen justify-center items-center '>
          <SideBarPhone></SideBarPhone>
        <section className='-mt-6 lg:relative lg:w-full w-[95%] flex justify-center gap-5 items-center bg-white py-6 lg:py-0 lg:min-h-[600px] lg:max-w-[940px] lg:m-auto rounded-xl shadow-lg'>
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
