import './App.css';
import { Toaster } from 'sonner';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Mission from './sections/Mission';
import Services from './sections/Services';
import HowItWorks from './sections/HowItWorks';
import Benefits from './sections/Benefits';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import StickyAuditBar from './components/StickyAuditBar';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-foreground overflow-x-hidden">
      {/* Sonner toaster — positioned top-right, dark theme */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#0d0f14',
            border: '1px solid rgba(239,68,68,0.4)',
            color: '#f1f5f9',
            fontFamily: 'monospace',
            fontSize: '13px',
          },
        }}
      />

      <Navigation />
      <main>
        <Hero />
        <Mission />
        <Services />
        <HowItWorks />
        <Benefits />
        <Contact />
      </main>
      <Footer />

      {/* Sticky audit bar — shows after 30s scroll */}
      <StickyAuditBar />
    </div>
  );
}

export default App;
