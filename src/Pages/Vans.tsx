import { NavLink } from "react-router-dom"

function Vans() {
     return (
          <div>
               <h3>This is Vans page</h3>
               <NavLink to='1'><h3>van1</h3></NavLink>
               <NavLink to='2'><h3>van2</h3></NavLink>
               <NavLink to='3'><h3>van3</h3></NavLink>
               <NavLink to='4'><h3>van4</h3></NavLink>
               <NavLink to='5'><h3>van5</h3></NavLink>
               <NavLink to='6'><h3>van6</h3></NavLink>
          </div>
     )
}

export default Vans