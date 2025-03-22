'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  House,
  Search,
  Person,
  Clock,
  ChevronRight,
  CarFrontFill,
  CupHotFill,
  CalendarCheck,
  Key,
  People,
  Map,
  ClockHistory,
  Grid,
  List,
} from 'react-bootstrap-icons';
import './style.css';
import Footer from '@/components/Footer';

const SearchPage = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="search-page">
      <div className="scroll-content">
        <div className="search-container">
          {/* Scrollable Content */}
          <div className="main-scrollable-content">
            {/* Search Input */}
            <div className="search-input-wrapper">
              <div className="search-input-container">
                <Search size={20} className="search-icon" />
                <input
                  type="text"
                  placeholder="Where to?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="search-input"
                />
                <button type="button" className="later-button">
                  <CalendarCheck size={18} className="calendar-icon" />
                  Later
                </button>
              </div>
            </div>

            {/* Recent Locations */}
            <div className="recent-locations">
              <div className="location-item">
                <div className="location-icon-wrapper">
                  <Clock size={20} className="location-icon-inner" />
                </div>
                <div className="location-details">
                  <div className="location-name">Ala Moana Center</div>
                  <div className="location-address">1450 Ala Moana Blvd, Honolulu, HI</div>
                </div>
                <ChevronRight size={18} className="chevron-icon" />
              </div>
              <div className="location-item">
                <div className="location-icon-wrapper">
                  <Clock size={20} className="location-icon-inner" />
                </div>
                <div className="location-details">
                  <div className="location-name">Lanai @ Ala Moana Center</div>
                  <div className="location-address">1450 Ala Moana Blvd, Honolulu, HI</div>
                </div>
                <ChevronRight size={18} className="chevron-icon" />
              </div>
            </div>

            {/* Suggestions Section */}
            <div className="suggestions-section">
              <div className="section-header">
                <h2>Suggestions</h2>
                <Link href="/all-suggestions" className="see-all-link">
                  See all
                </Link>
              </div>
              <div className="suggestion-items">
                <div className="suggestion-item">
                  <CarFrontFill size={20} className="suggestion-icon" />
                  <div className="suggestion-label">Ride</div>
                </div>
                <div className="suggestion-item">
                  <CupHotFill size={20} className="suggestion-icon" />
                  <div className="suggestion-label">Food</div>
                </div>
                <div className="suggestion-item">
                  <CalendarCheck size={20} className="suggestion-icon" />
                  <div className="suggestion-label">Reserve</div>
                </div>
                <div className="suggestion-item">
                  <Key size={20} className="suggestion-icon" />
                  <div className="suggestion-label">Rental Cars</div>
                  <div className="promo-tag">Promo</div>
                </div>
              </div>
            </div>

            {/* Save Every Day Section */}
            <div className="save-section">
              <h2 className="section-title">Save every day</h2>
              <div className="promo-cards">
                <div className="promo-card">
                  <div className="promo-image">
                    <Map size={24} className="promo-icon" />
                  </div>
                  <div className="promo-content">
                    <div className="promo-title">Add a stop or 5 →</div>
                    <div className="promo-description">Pick up something along the way</div>
                  </div>
                </div>
                <div className="promo-card">
                  <div className="promo-image">
                    <People size={24} className="promo-icon" />
                  </div>
                  <div className="promo-content">
                    <div className="promo-title">Share your ride →</div>
                    <div className="promo-description">Share the ride, share the cost</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Ride Section */}
            <div className="schedule-section">
              <div className="schedule-title">Ride on your schedule</div>
              <ClockHistory size={24} className="schedule-icon" />
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="bottom-nav">
            <div className="nav-item active">
              <House size={20} className="nav-icon" />
              <div className="nav-label">Home</div>
            </div>
            <div className="nav-item">
              <Grid size={20} className="nav-icon" />
              <div className="nav-label">Services</div>
            </div>
            <div className="nav-item">
              <List size={20} className="nav-icon" />
              <div className="nav-label">Activity</div>
            </div>
            <div className="nav-item">
              <Person size={20} className="nav-icon" />
              <div className="nav-label">Account</div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
