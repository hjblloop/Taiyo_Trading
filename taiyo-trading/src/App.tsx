import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { Footer } from './components/Footer';
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { DashboardScreen } from './screens/DashboardScreen';

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}
