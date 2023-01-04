import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/pages/LandingPage";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import AboutPage from "./components/pages/AboutPage";
import PhotosPage from "./components/pages/PhotosPage";
import ContactPage from "./components/pages/ContactPage";
import GalleryPage from "./components/pages/GalleryPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header/>
          
          <div className="content-container">
            <Routes>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/photos" element={<PhotosPage/>}/>
              <Route path="/photos/:category" element={<GalleryPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/" element={<LandingPage/>}/>
            </Routes>
          </div>

        </div>

        <Footer/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
