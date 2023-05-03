import { NavLink } from "react-router-dom"

function Vans() {
     return (
          <div>
               <h3>This is Vans page</h3>
               <NavLink to='/vans/1'><h3>van1</h3></NavLink>
               <NavLink to='/vans/2'><h3>van2</h3></NavLink>
               <NavLink to='/vans/3'><h3>van3</h3></NavLink>
          </div>
     )
}

export default Vans