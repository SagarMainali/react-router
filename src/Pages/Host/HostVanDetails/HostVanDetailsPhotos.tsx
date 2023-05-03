import { useOutletContext } from "react-router-dom"

export default function HostVanDetailsPhotos() {

  const context: number = useOutletContext()

  return (
    <div>Photos of hostvan {context}</div>
  )
}

