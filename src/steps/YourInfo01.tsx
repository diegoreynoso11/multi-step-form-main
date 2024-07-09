import { useContext } from 'react'
import { appContext } from '../context/AppContext'
import { Validation } from '../schemas/validations'
import InfoLabel from './yourInfoComponents/InfoLabel'

function YourInfo({ colectiveClassname }: { colectiveClassname: string }) {
  const { error, setError,data,setData, setSteps, steps } = useContext(appContext)
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const name = (form.elements.namedItem('text') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const phone = (form.elements.namedItem('number') as HTMLInputElement).value
    try {
      Validation.name.parse(name)
      setData((prev) => ({ ...prev, name }))
      setError((prev) => ({ ...prev, name: "" }))
    } catch (e) {
      setData((prev) => ({ ...prev, name : "" }))
      setError((prev) => ({ ...prev, name: e.errors[0].message }))
    }
    try {
      Validation.phone.parse(phone)
      setData((prev) => ({ ...prev, phone }))
      setError((prev) => ({ ...prev, phone: "" }))
    } catch (e) {
      setData((prev) => ({ ...prev, phone : "" }))
      setError((prev) => ({ ...prev, phone: e.errors[0].message }))
    }
    try {
      Validation.email.parse(email)
      setData((prev) => ({ ...prev, email }))
      setError((prev) => ({ ...prev, email: "" }))
    } catch (e) {
      setData((prev) => ({ ...prev, email : "" }))
      setError((prev) => ({ ...prev, email: e.errors[0].message }))
    }
    if (!error) {
      window.localStorage.setItem('data', JSON.stringify({ name, phone, email }))
    }
  }
  function handleNextStep() {
    if (data.name && data.email && data.phone) {
      setSteps(steps + 1)
    }
  }
  return (
    <section className={colectiveClassname}>
      <h1 className='text-4xl font-bold'>Personal info</h1>
      <p className='text-black/40 text-wrap'>
        Please provide your name, email address, and phone number
      </p>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className='flex flex-col gap-10'
        action=''
      >
        <InfoLabel data={data.name} error={error.name} type='text'>Name</InfoLabel>
        <InfoLabel data={data.email} error={error.email} type='email'>E-mail</InfoLabel>
        <InfoLabel data={data.phone} error={error.phone} type='number'>Phone number</InfoLabel>
        <button onClick={handleNextStep} className={`absolute bottom-10 right-20 bg-[#174a8b] px-3 py-2 hover:bg-[#163052] rounded-md text-white/90 ${error.name && "bg-red-800 ring-2 ring-red-800 hover:bg-red-900"} ${data.name && "animate-scale bg-green-800 ring-2 ring-green-800 hover:bg-green-900"}`}>
          Next step
        </button>
      </form>
    </section>
  )
}

export default YourInfo
