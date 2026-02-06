import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EntryPage from './pages/EntryPage';
// import GalleryPage from './pages/GalleryPage'; // Create these later
// import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* This renders EntryPage at the root URL (http://localhost:5173/) */}
        <Route path="/" element={<EntryPage />} />
        
        {/* Placeholders for the other routes */}
        <Route path="/gallery" element={<div>Gallery Page</div>} />
        <Route path="/about" element={<div>About Me Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;