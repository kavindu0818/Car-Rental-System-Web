import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';
import CarDetailPage from './pages/CarDetailPage';
import AboutPage from './pages/AboutPage';
import LocationsPage from './pages/LocationsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/cars/:id" element={<CarDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;