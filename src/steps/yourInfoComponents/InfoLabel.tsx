
function InfoLabel({children, type, error, data} : {data: string, children : string, type : string, error : string}) {
  return (
    <label htmlFor="" className="flex flex-col gap-2">
      <div className="flex justify-between">
        {children}
        {
          error &&
          <p className="text-red-500">{error}</p>
        }
        {
          data &&
          <p className="text-green-500">Looks good!</p>
        }
      </div>
        <input defaultValue={data} className={`py-3 rounded-md px-2 border ring-1 ${error && "border-red-500 text-red-500"} ${data && "border-green-500 text-green-500"} hover:ring-slate-300 hover:ring-2`} name={type} type={type}  />
      </label>
  )
}

export default InfoLabel