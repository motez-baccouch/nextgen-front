import React from 'react';
import './LandingPage.scss';


import { Container } from 'react-bootstrap';
import CoursesMenu from './CoursesMenu';

const Courses: React.FC = () => {
  return (
    <div className="courses">
      
      <CoursesMenu/>
      
    </div>
  );
}

export default Courses;
