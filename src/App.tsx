import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Layout from './Components/Layout'
import Vans from './Pages/Vans'
import VanDetails from './Pages/VanDetails'
import HostDashboard from './Pages/Host/HostDashboard'
import HostLayout from './Components/HostLayout'
import HostIncome from './Pages/Host/HostIncome'
import HostReviews from './Pages/Host/HostReviews'
import HostVans from './Pages/Host/HostVans'
import HostVanDetails from './Pages/Host/HostVanDetails'
import HostVanDetailsInfo from './Pages/Host/HostVanDetails/HostVanDetailsInfo'
import HostVanDetailsPricing from './Pages/Host/HostVanDetails/HostVanDetailsPricing'
import HostVanDetailsPhotos from './Pages/Host/HostVanDetails/HostVanDetailsPhotos'

const App = () => {

     return <>
          <BrowserRouter>
               <Routes>
                    <Route path='/' element={<Layout />}>
                         <Route index element={<Home />} />
                         <Route path="host" element={<HostLayout />} >
                              <Route index element={<HostDashboard />} />
                              <Route path='income' element={<HostIncome />} />
                              <Route path='hostvans' element={<HostVans />} />
                              <Route path='hostvans/:id' element={<HostVanDetails />} >
                                   <Route index element={<HostVanDetailsInfo />} />
                                   <Route path='pricing' element={<HostVanDetailsPricing />} />
                                   <Route path='photos' element={<HostVanDetailsPhotos />} />
                              </Route>
                              <Route path='reviews' element={<HostReviews />} />
                         </Route>
                         <Route path="vans" element={<Vans />} />
                         <Route path="vans/:id" element={<VanDetails />} />
                         <Route path="about" element={<About />} />
                    </Route>
               </Routes>
          </BrowserRouter>
     </>
}

export default App