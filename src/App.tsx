import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Quiz from './Quiz';
import Courses from './Courses';
import Spread from './Spread';
import BugPuzzle from './bugPuzzle';


const App: React.FC = () => {
  
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<LandingPage/>}  />
      <Route path='/quiz' element={<Quiz/>} />
      <Route path='/puzzle' element={<BugPuzzle/>} />
      <Route path='/courses' element={<Courses/>} />
      <Route path='/courses/courseSpread' element={<Spread/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
