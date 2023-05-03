import { useParams, useNavigate } from "react-router-dom"

function VanDetails() {

     const param = useParams()

     const navigate = useNavigate()

     const goBack = (): void => {
          navigate(-1)
     }

     return (
          <div>
               {/* <NavLink to='/vans'>Go back</NavLink> */}
               <h4 onClick={goBack} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Go back</h4>
               <h2>You are seeing the deails of van{param.id}</h2>
          </div>
     )
}

export default VanDetails