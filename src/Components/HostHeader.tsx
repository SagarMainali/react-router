import { NavLink } from "react-router-dom"

function HostHeader() {
     return (
          <div className="host-header-links">
               <NavLink to='.' end>Dashboard</NavLink>
               <NavLink to='income'>Income</NavLink>
               <NavLink to='hostvans'>Vans</NavLink>
               <NavLink to='reviews'>Reviews</NavLink>
          </div>
     )
}

export default HostHeader