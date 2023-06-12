import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Quiz from './Quiz';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<LandingPage/>}  />
      <Route path='/quiz' element={<Quiz/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
