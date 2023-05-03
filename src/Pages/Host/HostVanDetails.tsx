import HostVanDetailHeader from "../../Components/HostVanDetailHeader"
import useGetParams from "../../CustomHook/useGetParams"
// import useGoBack from "../../CustomHook/useGoBack"
import { NavLink, Outlet } from "react-router-dom"

function HostVanDetails() {

     const param = useGetParams()

     return (
          <div>
               {/* this only works if only we are on the info page since it is a index page but if we navigate to pricing or phots. url gets added with this path
               and when we go back we won't go to the hostvans page, instead we just go back from the current path*/}
               {/* <h4 onClick={useGoBack(-1)} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Go back...</h4> */}
               <NavLink to='../hostvans' style={{ textDecoration: 'underline', cursor: 'pointer' }}>Go back...</NavLink>
               <h2>You are seeing the details of hostvan {param}</h2>
               <HostVanDetailHeader />
               <Outlet />
          </div>
     )
}

export default HostVanDetails