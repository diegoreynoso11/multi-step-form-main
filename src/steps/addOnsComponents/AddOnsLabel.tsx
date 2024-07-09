import { useContext } from "react"
import { appContext } from "../../context/AppContext"

function AddOnsLabel({
  id,
  children,
  description,
  price,
}: {
  id: string
  children: React.ReactNode
  description: string
  price: number
}) {
  const { data, setData } = useContext(appContext)
  const addons = data.addons
  function handleCheck(e : React.ChangeEvent<HTMLInputElement>) {
    const newAddons = [...data.addons];
    const nid = Number(id)
    if (e.target.checked) {
      newAddons[nid] = String(children); 
    } else {
      newAddons[nid] = "";
    }
    setData({ ...data , addons: newAddons }); 
  }
  return (
    <label className={`${addons.includes(`${children}`) ? "bg-violet-800/5 shadow-none" : "shadow-md hover:shadow-none hover:bg-violet-800/5"} flex gap-10 rounded-md ring-1 ring-violet-700 p-3 items-center`}>
      <input
        id={id}
        checked={addons.includes(`${children}`)}
        onChange={(e) => handleCheck(e)}
        type='checkbox'
        className='mx-2 scale-125 accent-violet-600'
      />
      <div className='w-full'>
        <span className='text-lg font-semibold'>{children}</span>
        <p>{description}</p>
      </div>
      <p className='text-violet-800'>+{price}/mo</p>
    </label>
  )
}

export default AddOnsLabel
