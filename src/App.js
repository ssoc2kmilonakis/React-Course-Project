import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';
import Courses from './pages//Courses';
import Dashboard from './pages//Dashboard';
import AddCourse from './pages/AddCourse';
import CourseDetailsPage from './pages/CourseDetailsPage';
import EditPage from './pages/EditPage';
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/" className="mx-5">
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/courses" className="mx-5">
                Courses
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/add-course" className="mx-5">
                Add new Course
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <div className="container" style={{ paddingTop: '20px' }}>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/courses/:id" element={<CourseDetailsPage />} />
          <Route path="/edit-page/:id" element={<EditPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
