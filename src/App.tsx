import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Mission from './sections/Mission';
import Services from './sections/Services';
import HowItWorks from './sections/HowItWorks';
import Benefits from './sections/Benefits';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import StickyAuditBar from './components/StickyAuditBar';
import BlogList from './pages/blog/BlogList';
import BlogPost from './pages/blog/BlogPost';

const toasterStyle = {
  style: {
    background: '#0d0f14',
    border: '1px solid rgba(239,68,68,0.4)',
    color: '#f1f5f9',
    fontFamily: 'monospace',
    fontSize: '13px',
  },
};

// Главная страница
const HomePage = () => (
  <div className="min-h-screen bg-dark-bg text-foreground overflow-x-hidden">
    <Toaster position="top-right" toastOptions={toasterStyle} />
    <Navigation />
    <main>
      <Hero />
      <Mission />
      <Services />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
    <StickyAuditBar />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" toastOptions={toasterStyle} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        {/* Fallback */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
