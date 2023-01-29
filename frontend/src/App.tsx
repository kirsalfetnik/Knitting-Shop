import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages 
import Home from './pages/Home';

// import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>

          <Route
          path="/"
          element={<Home />}
          />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
