import HeroButton from "../components/HeroButton"
import AddOnsSelect from "./addOnsComponents/AddOnsSelect"
function AddOns03({colectiveClassname} : {colectiveClassname : string}) {
  return (
    <div className={colectiveClassname}>
      <h1 className='text-4xl font-bold'>Pick add-ons</h1>
      <p className='text-black/40'>
        Add-ons help enhance your gaming experience.
      </p>
      <AddOnsSelect></AddOnsSelect>
      <HeroButton></HeroButton>
    </div>
  )
}

export default AddOns03