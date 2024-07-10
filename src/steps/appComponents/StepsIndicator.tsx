import { useContext } from "react"
import Step from "./Step"
import { appContext } from "../../context/AppContext"

function StepsIndicator() {
  const { data } = useContext(appContext)
  return ( 
    <section className="absolute flex flex-col gap-10 top-12 left-24 text-white">
        <Step validation="true" step={1}>YOUR INFO</Step>
        <Step validation={data.name} step={2}>SELECT PLAN</Step>
        <Step validation={data.plan} step={3}>ADD-ONS</Step>
        <Step validation={data.plan} step={4}>SUMMARY</Step>
    </section>
  )
}

export default StepsIndicator