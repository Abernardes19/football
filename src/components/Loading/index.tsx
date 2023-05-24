import { useLocation, useParams } from "react-router-dom"

export default function Loading({size}: {size: string}) {
  const { path } = useParams()
  return (
    <div className=" flex items-center justify-center gap-2">
      <img className={` ${size} animate-spin`} src="https://i.pinimg.com/originals/63/c2/85/63c285141e9a8f5cbc036b577f56a7dd.png" alt="ball" />
      <p className={path?.includes("login") ? "text-xl" : "text-6xl"}>Loading...</p>
    </div>
  )
}