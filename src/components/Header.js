import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { Link } from 'react-router-dom';
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
  <Navbar  collapseOnSelect fixedTop>
  <Navbar.Header>
    <Navbar.Brand><Link to='/'>Ice Age Movies</Link></Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem ><Link to='/'>Home</Link></NavItem>
      <NavItem ><Link to='/characters'>Characters</Link></NavItem>
      <NavItem ><Link to='/story'>Story</Link></NavItem>
    </Nav>
    <Nav pullRight>
    <NavDropdown eventKey={3} title="Settings" id="basic-nav-dropdown">
        <MenuItem ><Link to='/createnewfreight'>My Profile</Link></MenuItem>
        <MenuItem divider />
        <MenuItem ><Link to='/login'>Login</Link> </MenuItem>
        <MenuItem ><Link to='/logout'>Logout</Link> </MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    </nav>
  </header>
)

export default Header