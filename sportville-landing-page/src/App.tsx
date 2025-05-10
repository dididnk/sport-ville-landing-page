import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import DownloadApp from './components/DownloadApp/DownloadApp';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse/TermsOfUse';
const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative">
              <Header />
              <main>
                <Hero />
                <Features />
                <DownloadApp />
              </main>
              <Footer />
            </div>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
    </Router>
  );
}

export default App
