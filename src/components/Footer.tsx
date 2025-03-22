'use client';

import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { House, Search, Receipt, Person } from 'react-bootstrap-icons';

const Footer = () => (
  <footer className="footer fixed-footer">
    <Container fluid className="px-0">
      <Row className="text-center gx-0">
        <Col>
          <Link href="/" className="footer-link">
            <div>
              <House size={24} />
              <div className="footer-label">Home</div>
            </div>
          </Link>
        </Col>
        <Col>
          <Link href="/search" className="footer-link">
            <div>
              <Search size={24} />
              <div className="footer-label">Search</div>
            </div>
          </Link>
        </Col>
        <Col>
          <Link href="/activity" className="footer-link">
            <div>
              <Receipt size={24} />
              <div className="footer-label">Activity</div>
            </div>
          </Link>
        </Col>
        <Col>
          <Person size={24} />
          <div className="footer-label">Account</div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
