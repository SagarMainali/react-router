import { useParams } from "react-router-dom"
import useGoBack from "../../CustomHook/GoBack"

function HostVanDetails() {

     const param = useParams()

     return (
          <div>
               <h4 onClick={useGoBack(-1)} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Go back...</h4>
               <h2>You are seeing the deails of hostvan {param.id}</h2>
          </div>
     )
}

export default HostVanDetails