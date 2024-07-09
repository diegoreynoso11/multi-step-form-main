
import { PricesPlans } from "../../consts/prices"
import Plan from "./Plan"


function Plans() {
  return (
    <section className="relative gap-2 flex justify-between mt-5">
        <Plan price={PricesPlans.arcade} arcade>Arcade</Plan>
        <Plan price={PricesPlans.pro} pro>Pro</Plan>
        <Plan price={PricesPlans.advance} advance>Advance</Plan>
    </section>
  )
}

export default Plans