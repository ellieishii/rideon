'use client';

import React from 'react';
import './style.css';
import { CardHeading, CarFrontFill, House } from 'react-bootstrap-icons';

export default function ConfirmationPage() {
  return (
    <div className="confirmation-container">
      <div className="confirmation-scroll">
        {/* Delivery info */}
        <div className="delivery-info">
          <div className="delivery-header">
            <h2 className="delivery-label">Got it!</h2>
            <button
              type="button"
              className="return-button"
              onClick={() => (window.location.href = '/')}
            >
              Return
            </button>
          </div>
          <h4 className="delivery-text">Looking for a driver...</h4>
          <p className="delivery-eta">Estimated Wait Time</p>
          <h2 className="delivery-time">3 hours</h2>
        </div>

        {/* Map */}
        <div className="map-container">
          <img
            src="/confirmationmap.png"
            alt="Delivery Map"
            className="map-image"
          />
          <div className="glowing-pin" style={{ top: '124px', right: '47%' }} />
          <div className="address-badge">
            <p className="address-text">Square Top Hiking Trail</p>
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="navigation-tabs">
          <button type="button" className="nav-tab">
            <div className="nav-icon active">
              <span className="icon">
                <CardHeading size={28} />
              </span>
            </div>
          </button>
          <button type="button" className="nav-tab">
            <div className="nav-icon">
              <span className="icon">
                <CarFrontFill size={28} />
              </span>
            </div>
          </button>
          <button type="button" className="nav-tab">
            <div className="nav-icon">
              <span className="icon">
                <House size={28} />
              </span>
            </div>
          </button>
        </div>

        {/* Progress bar */}
        <div className="progress-container">
          <div className="progress-bar" />
        </div>

        {/* Order status */}
        <div className="order-status">
          <div className="status-header">
            <h2 className="status-title">Request Pending</h2>
            <span className="status-time">6:18 pm</span>
          </div>
          <p className="status-message">
            We&apos;ll notify you once your driver has been assigned.
          </p>
        </div>
      </div>
    </div>
  );
}
