import Image from "next/image"

const InputForm = () => {
  return (
    <div>
        <form className="w-full">
            <div className="flex">
            <input className="rounded-l-lg" type="text" />
            <button className=" bg-black px-3 py-3 rounded-r-lg"><Image src="/images/icon-arrow.svg" width={5} height={5} alt="arrow" /></button>
            </div>
        </form>
    </div>
  )
}

export default InputForm