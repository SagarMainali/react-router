import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Details from './Pages/Details'
import Layout from './Components/Layout'

const App = () => {

     return <>
          <BrowserRouter>
               <Routes>
                    <Route path='/' element={<Layout />}>
                         <Route index element={<Home />} />
                         <Route path="/about" element={<About />} />
                         <Route path="/about/:id" element={<Details />} />
                    </Route>
               </Routes>
          </BrowserRouter>
     </>
}

export default App