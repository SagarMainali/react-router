import { NavLink } from "react-router-dom"

function HostVans() {
     return (
          <div>
               <h3>This is HostVans page</h3>
               <NavLink to='/host/hostvans/1'><h3>hostvan1</h3></NavLink>
               <NavLink to='/host/hostvans/2'><h3>hostvan2</h3></NavLink>
               <NavLink to='/host/hostvans/3'><h3>hostvan3</h3></NavLink>
          </div>
     )
}

export default HostVans