import Check from "./icons/Check"

function Finnish05({ colectiveClassname }: { colectiveClassname: string }) {
  return (
    <div className={colectiveClassname}>
        <section className="h-full flex flex-col justify-center items-center text-center">
          <Check></Check>
      <h1 className='text-4xl font-bold mt-5 py-2'>Thank you!</h1>
      <p className='text-black/40 w-10/12'>
        Thanks for confirming your subscription! We hope you have fun using our
        platform- If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
        </section>
    </div> 
  )
}

export default Finnish05
