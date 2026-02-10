import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/molecules/NavBar';
import { Sidebar } from './components/molecules/SideBar';
import { ImageGallery } from './pages/PageGallery';
import { Footer } from './components/molecules/Footer';
import { VideoPage } from './pages/VideoPage';
import { ArtPage } from './pages/ArtPage';
import { DesignPage } from './pages/DesignPage';
import { AboutPage } from './pages/AboutPage';
import { GALLERY_IMAGES } from './components/atoms/ImageGallery';
import { OTHER_PHOTOSHOOT_FOLDERS } from './components/molecules/PhotoshootFolders';

function App(): React.JSX.Element {
  return (
    // REMOVIDO: <Router>
    <div className="min-h-screen">
      <div className="flex flex-col items-center w-full">
        <div className="max-w-[1000px] w-full">
          <Navbar />

          <div className="flex flex-col lg:flex-row p-[11px] align-top main-content">
            <div className="w-full lg:w-[220px] p-[10px] lg:sticky top-0 self-start">
              <Sidebar />
              <p className="py-2"></p>
            </div>

            <div className="flex-auto p-[16px] align-top">
              <main>
                <Routes>
                  <Route
                    path="/"
                    element={<ImageGallery images={GALLERY_IMAGES} />}
                  />
                  <Route
                    path="/photo"
                    element={<ImageGallery images={GALLERY_IMAGES} />}
                  />
                  <Route path="/recc" element={<UnderConstruction />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/xtra" element={<UnderConstruction />} />
                  <Route path="/video" element={<VideoPage />} />
                  <Route path="/art" element={<ArtPage />} />
                  <Route path="/design" element={<DesignPage />} />
                  {OTHER_PHOTOSHOOT_FOLDERS.map((folder) => (
                    <Route
                      key={folder.href}
                      path={folder.href}
                      element={<UnderConstruction title={folder.text} />}
                    />
                  ))}
                </Routes>
              </main>

              <div className="py-0.5"></div>
              <p id="links" className="p-[5px] text-center">
                <strong>Arranged roughly with most recent at top</strong>
              </p>
              <div className="py-0.5"></div>

              <Footer otherPhotoshootFolders={OTHER_PHOTOSHOOT_FOLDERS} />

              <div className="py-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // REMOVIDO: </Router>
  );
}

interface UnderConstructionProps {
  title?: string;
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({ title = "This page" }) => (
  <div className="text-white text-center text-xl p-8">
    <p>{title} is currently under construction. Please check back later!</p>
    <p>🚧</p>
  </div>
);

export default App;