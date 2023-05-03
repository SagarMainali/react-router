import { NavLink } from "react-router-dom"

function Header() {
     return (
          <div className="header">
               <NavLink to='/' style={{fontSize: '26px'}}>#VANLIFE</NavLink>
               <div className="links">
                    <NavLink to='/host'>Host</NavLink>
                    <NavLink to='/vans'>Vans</NavLink>
                    <NavLink to='/about'>About</NavLink>
               </div>
          </div>
     )
}

export default Header