import Plans from "./selectPlanIComponents/Plans"
import Switch from "./selectPlanIComponents/Switch"
import HeroButton from "../components/HeroButton"

function SelectPlan02({ colectiveClassname }: { colectiveClassname: string }) {
  
  return (
    <section className={colectiveClassname}>
      <h1 className='text-4xl font-bold'>Select your plan</h1>
      <p className='text-black/40'>
        You have the option of montly or yearly billing.
      </p>
      <Plans></Plans>
      <Switch></Switch>
      <HeroButton></HeroButton>
    </section>
  )
}

export default SelectPlan02
