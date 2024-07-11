import { useContext } from "react"
import Step from "./Step"
import { appContext } from "../../context/AppContext"

function StepsIndicator() {
  const { data } = useContext(appContext)
  return ( 
    <section className="absolute lg:scale-100 flex top-20 lg:flex-col lg:gap-10 gap-5 lg:top-12 lg:left-24 text-white ">
        <Step validation="true" step={1}>YOUR INFO</Step>
        <Step validation={data.name} step={2}>SELECT PLAN</Step>
        <Step validation={data.plan} step={3}>ADD-ONS</Step>
        <Step validation={data.plan} step={4}>SUMMARY</Step>
    </section>
  )
}

export default StepsIndicator