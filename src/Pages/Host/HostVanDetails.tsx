import useGetParams from "../../CustomHook/useGetParams"
import useGoBack from "../../CustomHook/useGoBack"

function HostVanDetails() {

     const param = useGetParams()

     return (
          <div>
               <h4 onClick={useGoBack(-1)} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Go back...</h4>
               <h2>You are seeing the details of hostvan {param}</h2>
          </div>
     )
}

export default HostVanDetails