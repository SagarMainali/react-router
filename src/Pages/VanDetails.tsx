import useGetParams from "../CustomHook/useGetParams"
import useGoBack from "../CustomHook/useGoBack"

function VanDetails() {

     const param = useGetParams()

     return (
          <div>
               <h4 onClick={useGoBack(-1)} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Go back...</h4>
               <h2>You are seeing the details of van {param}</h2>
          </div>
     )
}

export default VanDetails