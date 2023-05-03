import { NavLink } from "react-router-dom"

function Vans() {
     return (
          <div>
               <h2>Vans</h2>
               <NavLink to='/vans/:id'><h3>van1</h3></NavLink>
               <NavLink to='/vans/:id'><h3>van2</h3></NavLink>
               <NavLink to='/vans/:id'><h3>van3</h3></NavLink>
          </div>
     )
}

export default Vans