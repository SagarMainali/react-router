import { useOutletContext } from "react-router-dom"

export default function HostVanDetailsPricing() {

  const context: number = useOutletContext()

  return (
    <div>Pricing of hostvan {context}</div>
  )
}
