import { NavLink } from "react-router-dom"

function HostHeader() {
     return (
          <div className="host-header-links">
               <NavLink to='/host' end>Dashboard</NavLink>
               <NavLink to='/host/income'>Income</NavLink>
               <NavLink to='/host/vans'>Vans</NavLink>
               <NavLink to='/host/reviews'>Reviews</NavLink>
          </div>
     )
}

export default HostHeader