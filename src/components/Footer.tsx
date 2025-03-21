'use client';

import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { House, Grid, Receipt, Person } from 'react-bootstrap-icons';

const Footer = () => (
  <footer className="footer">
    <Container fluid>
      <Row className="text-center">
        <Col>
          <Link href="/" className="footer-link">
            <div>
              <House size={24} />
              <div className="footer-label">Home</div>
            </div>
          </Link>
        </Col>
        <Col>
          <Grid size={24} />
          <div className="footer-label">Services</div>
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
