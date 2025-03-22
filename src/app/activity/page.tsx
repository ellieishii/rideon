'use client';

import React, { useEffect } from 'react';
import Footer from '@/components/Footer';
import { Clock, CheckCircle, RotateCw, MessageCircle, XCircle, FileText } from 'lucide-react';
import './style.css';

export default function ActivityPage() {
  // Add more mock data to test scrolling
  const rides = [
    {
      id: 1,
      date: 'April 20, 2025',
      time: '6:17 PM',
      from: 'Square Top Hiking Trail',
      to: '401 Hoomau Dr',
      price: '$32.50',
      status: 'in-progress',
      driver: 'Loading...',
      carModel: 'Sedan',
      estimatedArrival: ' 30 minutes',
      driverImg: <RotateCw className="refresh-icon" size={32} />,
    },
    {
      id: 2,
      date: 'April 13, 2025',
      time: '2:15 PM',
      from: '401 Hoomau Dr',
      to: 'Lilo Ridge Trail',
      price: '$28.75',
      status: 'completed',
    },
    {
      id: 3,
      date: 'Mar 15, 2025',
      time: '3:47 PM',
      from: 'Ala Moana Shopping Center',
      to: 'Kahala Mall',
      price: '$19.20',
      status: 'completed',
    },
    {
      id: 4,
      date: 'Mar 12, 2025',
      time: '9:18 AM',
      from: 'Dole st.',
      to: 'Waikiki Beach',
      price: '$24.30',
      status: 'completed',
    },
    {
      id: 5,
      date: 'February 27, 2025',
      time: '5:11 PM',
      from: 'Ala Moana Shopping Center',
      to: 'Tanto Japanese Restaurant',
      price: '$14.25',
      status: 'completed',
    },

  ];

  // Ensure proper scrolling behavior on mount
  useEffect(() => {
    // Force document to be scrollable
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';

    return () => {
      // Clean up when component unmounts
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <main className="activity-page">
      <div className="container">
        <h1 className="page-title">Your Trips</h1>

        <div className="ride-list">
          {rides.map((ride) => (
            <div key={ride.id} className={`ride-card ${ride.status === 'in-progress' ? 'active' : ''}`}>
              {ride.status === 'in-progress' && (
                <div className="active-header">
                  <div className="active-status">
                    <RotateCw className="icon-spin" />
                    <span>Trip in progress</span>
                  </div>
                  <span className="eta">
                    ETA:
                    {ride.estimatedArrival}
                  </span>

                  <div className="driver-info">
                    <div className="driver-avatar">
                      {ride.driverImg}
                    </div>
                    <div className="driver-details">
                      <p className="driver-name">{ride.driver}</p>
                      <p className="car-model">{ride.carModel}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="ride-info">
                <div className="ride-header">
                  <div className="ride-datetime">
                    <span>{ride.date}</span>
                    <span className="dot">•</span>
                    <span>{ride.time}</span>
                  </div>
                  <div className="ride-price">{ride.price}</div>
                </div>

                <div className="ride-status">
                  {ride.status === 'completed' ? (
                    <>
                      <CheckCircle className="icon-success" />
                      {' '}
                      <span>Completed</span>
                    </>
                  ) : (
                    <>
                      <Clock className="icon-progress" />
                      {' '}
                      <span>In Progress</span>
                    </>
                  )}
                </div>

                <div className="route-info">
                  <div className="route-line">
                    <div className="route-marker start" />
                    <div className="route-path" />
                    <div className="route-marker end" />

                    <div className="locations">
                      <div className="location-item">
                        <p className="location-text">{ride.from}</p>
                      </div>
                      <div className="location-item">
                        <p className="location-text">{ride.to}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ride-actions">
                {ride.status === 'completed' ? (
                  <button type="button" className="action-button receipt">
                    <FileText className="action-icon" />
                    <span>Get Receipt</span>
                  </button>
                ) : (
                  <div className="action-buttons">
                    <button type="button" className="action-button contact">
                      <MessageCircle className="action-icon" />
                      <span>Contact</span>
                    </button>
                    <button type="button" className="action-button cancel">
                      <XCircle className="action-icon" />
                      <span>Cancel</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
