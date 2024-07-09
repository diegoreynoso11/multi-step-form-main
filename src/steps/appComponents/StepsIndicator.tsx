import Step from "./Step"

function StepsIndicator() {
  return (
    <section className="absolute flex flex-col gap-10 top-12 left-24 text-white">
        <Step step={1}>YOUR INFO</Step>
        <Step step={2}>SELECT PLAN</Step>
        <Step step={3}>ADD-ONS</Step>
        <Step step={4}>SUMMARY</Step>
    </section>
  )
}

export default StepsIndicator