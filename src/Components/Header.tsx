import { NavLink } from "react-router-dom"

function Header() {
     return (
          <div className="header">
               <NavLink to='/' style={{ fontSize: '28px', fontWeight: 'bold', textDecoration: 'none' }}>VANLIFE</NavLink>
               <div className="header-links">
                    <NavLink to='/host'>Host</NavLink>
                    <NavLink to='/vans'>Vans</NavLink>
                    <NavLink to='/about'>About</NavLink>
               </div>
          </div>
     )
}

export default Header