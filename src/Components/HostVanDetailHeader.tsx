import { NavLink } from "react-router-dom"

function HostVanDetailHeader() {
     return (
          <div className="hostvandetailheader-links">
               <NavLink to='.' end>Details</NavLink>
               <NavLink to='pricing'>Pricing</NavLink>
               <NavLink to='photos'>Photos</NavLink>
          </div>
     )
}

export default HostVanDetailHeader