import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Layout from './Components/Layout'
import Host from './Pages/Host'
import Vans from './Pages/Vans'
import VanDetails from './Pages/VanDetails'

const App = () => {

     return <>
          <BrowserRouter>
               <Routes>
                    <Route path='/' element={<Layout />}>
                         <Route index element={<Home />} />
                         <Route path="host" element={<Host />} />
                         <Route path="vans" element={<Vans />} />
                         <Route path="vans/:id" element={<VanDetails />} />
                         <Route path="about" element={<About />} />
                    </Route>
               </Routes>
          </BrowserRouter>
     </>
}

export default App