import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import StartupPage from './pages/StartupPage';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import OurCreations from './pages/OurCreations';
import Products from './pages/Products';
import Contact from './pages/Contact';
import CustomOrder from './pages/CustomOrder';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="App">
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-creations" element={<OurCreations />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/custom-order" element={<CustomOrder />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <FloatingWhatsApp />}
    </div>
  );
}

function App() {
  const [showStartup, setShowStartup] = useState(true);

  const handleStartupComplete = () => {
    setShowStartup(false);
  };

  if (showStartup) {
    return <StartupPage onComplete={handleStartupComplete} />;
  }

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
