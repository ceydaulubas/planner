import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Calendar2Check } from 'react-bootstrap-icons';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>
          Planner
          <Calendar2Check color='white' style={{ marginLeft: '10px' }} />
        </Navbar.Brand>

        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/ToDoList'>To Do List</Nav.Link>
            <Nav.Link href='/Calender'>Calender</Nav.Link>
            <Nav.Link href='/Success'>Success</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='/Profil'>Profil</Nav.Link>
            <Nav.Link href='#logout'>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
