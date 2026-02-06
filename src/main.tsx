import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EntryPage from './pages/EntryPage';
import PageGallery from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import './index.css'



createRoot(document.getElementById('root')!).render(
 <Router>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/gallery" element={<PageGallery/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </Router>,
)
