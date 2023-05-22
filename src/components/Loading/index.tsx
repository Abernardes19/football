export default function Loading({size}: {size: string}) {
  return (
    <div className=" flex items-center justify-center gap-2">
      <img className={` w-[${size}] animate-spin`} src="https://i.pinimg.com/originals/63/c2/85/63c285141e9a8f5cbc036b577f56a7dd.png" alt="ball" />
      <p className={` text-[${size}]`}>Loading...</p>
    </div>
  )
}