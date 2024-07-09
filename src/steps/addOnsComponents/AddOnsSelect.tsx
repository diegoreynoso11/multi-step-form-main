import AddOnsLabel from './AddOnsLabel.tsx'
import { PricesAddOns } from '../../consts/prices.ts'
function AddOnsSelect() {
  return (
    <section className='flex flex-col gap-5 mt-10'>
      <AddOnsLabel id="0" description='Access to multiples games' price={PricesAddOns.onlineService}>
        Online Service
      </AddOnsLabel>
      <AddOnsLabel id="1" description='Extra 1TB of cloud save' price={PricesAddOns.largerStorage}>
        Larger storage
      </AddOnsLabel>
      <AddOnsLabel id="2" description='Custom theme our you profile' price={PricesAddOns.customizableProfile}>
        Customizable profile
      </AddOnsLabel>
    </section>
  )
}

export default AddOnsSelect
