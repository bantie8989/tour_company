import './App.css'
// import react-router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import About from './pages/aboutUs/components/About'
import Home from './pages/homepage/Home'
import Booking from './pages/booking/Booking'
import Detail from './pages/packageDetail/Detail'
import Tour from './pages/tourPackage/Tour'

function App() {
  return (
    <div className='appContainer'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<About />} />
          
          <Route path="/login" element={<About />} />
          <Route path="/tour" element={<Tour/>} />
{/* this page introduce the routing path for the differnt pages  */}


          

          
        </Routes>
      </Router>
    </div>
  )
}


export default App


