import { useState } from "react"
import Countries from "../../service/Countries";

export default function Login() {
  const [key, setKey] = useState('' as string);
  const [error, setError] = useState(false as boolean);
  const [loading, setLoading] = useState(false as boolean);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setError(false);
    setKey(value);
  }

  const test = async () => {
    setLoading(true);
    const data = await Countries.validateKey(key)
    
    if (!data) {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div className="  w-screen h-screen flex items-center justify-center" >
      <div className=" flex flex-col gap-10 items-center justify-center sm:border sm:border-white sm:p-20 rounded-2xl">
        <img className=" w-[200px]" src="https://i.pinimg.com/originals/63/c2/85/63c285141e9a8f5cbc036b577f56a7dd.png" alt="ball" />
        <form className=" flex flex-col gap-5">
          <label className=" flex flex-col items-center">
            <p>API Key:</p>
            <input className=" border border-white bg-black-1 rounded-2xl p-2 w-full mt-2" type="text" value={key} onChange={handleChange} />
          </label>
          { error && <p className=" text-red-500">Por favor insira uma chave valida!</p> }
          <button className=" border border-white py-2 w-full rounded-2xl hover:bg-white hover:text-black-1 transition duration-500 hover:translate-y-1 hover:translate-x-1" type="button" onClick={() => test()}>{
            loading ? (
              <div className=" flex items-center justify-center gap-2">
                <img className=" w-[20px] animate-spin" src="https://i.pinimg.com/originals/63/c2/85/63c285141e9a8f5cbc036b577f56a7dd.png" alt="ball" />
                <p>Loading...</p>
              </div>
            ) : <p>Login</p>
          }</button>
        </form>
      </div>
    </div>
  )
}