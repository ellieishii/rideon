'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { House, Grid, Receipt, Person } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="text-center">
          <Col>
            <House size={24} />
            <div className="footer-label">Home</div>
          </Col>
          <Col>
            <Grid size={24} />
            <div className="footer-label">Services</div>
          </Col>
          <Col>
            <Receipt size={24} />
            <div className="footer-label">Activity</div>
          </Col>
          <Col>
            <Person size={24} />
            <div className="footer-label">Account</div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
