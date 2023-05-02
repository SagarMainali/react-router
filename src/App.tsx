import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Details from './Pages/Details'

const App = () => {

     return <>
          <BrowserRouter>
               <Link to='/'>Home</Link>
               <br />
               <Link to='/about'>About</Link>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/about/:id" element={<Details />} />
               </Routes>
          </BrowserRouter>
     </>
}

export default App