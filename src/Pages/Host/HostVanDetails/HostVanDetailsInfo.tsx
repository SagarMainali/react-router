import { useOutletContext } from "react-router-dom"

export default function HostVanDetailsInfo() {

  const context: number = useOutletContext()

  return (
    <div>Info of hostvan {context}</div>
  )
}
