import { useParams } from "react-router-dom"

function HostVanDetails() {

     const param = useParams()

     return (
          <div>You are seeing details of hostvan { param.id}</div>
     )
}

export default HostVanDetails