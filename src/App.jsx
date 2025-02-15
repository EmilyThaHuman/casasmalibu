import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Properties from './pages/Properties'
import Amenities from './pages/Amenities'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import PropertyDetail from './pages/PropertyDetail'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="properties" element={<Properties />} />
          <Route path="properties/:id" element={<PropertyDetail />} />
          <Route path="amenities" element={<Amenities />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App