import { Dispatch, SetStateAction, createContext } from 'react'

interface AppContextProps {
  steps: number
  setSteps: Dispatch<SetStateAction<number>>
  error: { name: string; email: string; phone: string }
  setError: Dispatch<
    SetStateAction<{ name: string; email: string; phone: string }>
  >
  data : { name: string; email: string; phone: string; plan: string; addons: string[], billing: string, total : number}
  setData : Dispatch<SetStateAction<{name: string; email: string; phone: string; plan: string; addons: string[], billing : string, total : number}>>
}
const defaultValue: AppContextProps = {
  steps: 1,
  setSteps: () => {},
  error: { name: '', email: '', phone: '' },
  setError: () => {},
  data: { name: '', email: '', phone: '', plan: '', addons: ["","",""], billing: "", total : 0},
  setData: () => {},
}

export const appContext = createContext(defaultValue)
