import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Quiz from './Quiz';
import Courses from './Courses';
import Spread from './Spread';
import BugPuzzle from './bugPuzzle';
import Triangles from './ThoughtFlow';
import Reverse from './reverseEngineeing';
import Primes from './primes';
import Guided from './examplesExercice';


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
      <Route path='/triangles' element={<Triangles/>} />
      <Route path='/reverse' element={<Reverse/>} />
      <Route path='/prime' element={<Primes/>} />
      <Route path='/guided' element={<Guided/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
