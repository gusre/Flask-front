import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo192.png';
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  dark expand="md">
        <NavbarBrand href="/"><img src={logo} height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  className="nav-link" to="/alert" >Alert</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  className="nav-link" to="/note" >Notification</NavLink>
            </NavItem>
            <NavItem >
            <NavLink  className="nav-link" to="/dash" >Dash</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;