import { useParams } from "react-router-dom"

function Details() {

     // catching the name of the link that rendered this componenet
     const params = useParams()

     console.log(params)

     return (
          <h2>I am the children of about page</h2>
     )
}

export default Details