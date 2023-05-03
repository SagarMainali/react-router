import { NavLink } from "react-router-dom"

function HostVanDetailHeader() {
     return (
          <div>
               <NavLink to='.'>Details</NavLink>
               <NavLink to='pricing'>Pricing</NavLink>
               <NavLink to='photos'>Photos</NavLink>
          </div>
     )
}

export default HostVanDetailHeader