'use client';

import Image from 'next/image';
import { Container, Navbar } from 'react-bootstrap';

const NavBar: React.FC = () => (
  <Navbar expand="lg" className="custom-navbar justify-content-between px-1">
    <Container fluid>
      {/* Logo on the left with "Ride On" text */}
      <Navbar.Brand href="/" className="d-flex align-items-center">
        <Image src="/rideon.png" alt="Logo" width={45} height={35} priority />
        <span className="brand-text">Ride On</span>
      </Navbar.Brand>

      {/* Static User Name "Sara" on the right */}
      <span className="user-name">Sara</span>
    </Container>
  </Navbar>
);

export default NavBar;
