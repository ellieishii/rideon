/* eslint-disable jsx-a11y/no-autofocus */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Search,
  Clock,
  ChevronRight,
  CarFrontFill,
  CupHotFill,
  CalendarCheck,
  Key,
  ClockHistory,
  Person,
} from 'react-bootstrap-icons';
import './style.css';
import Footer from '@/components/Footer';
import { RotateCw } from 'lucide-react';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

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
                  onFocus={() => setIsFocused(true)}
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
                  <div className="location-name">Lilo Ridge Trail</div>
                  <div className="location-address">
                    2003 Lilo Rd, Honolulu, HI
                  </div>
                </div>
                <ChevronRight size={18} className="chevron-icon" />
              </div>
              <div className="location-item">
                <div className="location-icon-wrapper">
                  <Clock size={20} className="location-icon-inner" />
                </div>
                <div className="location-details">
                  <div className="location-name">DQ Mart</div>
                  <div className="location-address">
                    1138 Piʻikoi Ave, Honolulu, HI
                  </div>
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
                    <RotateCw size={25} className="icon-spin" />
                  </div>
                  <div className="promo-content">
                    <div className="promo-title">Add a stop or 5 →</div>
                    <div className="promo-description">
                      Pick up something along the way
                    </div>
                  </div>
                </div>
                <div className="promo-card">
                  <div className="promo-image">
                    <RotateCw size={25} className="icon-spin" />
                  </div>
                  <div className="promo-content">
                    <div className="promo-title">Share your ride →</div>
                    <div className="promo-description">
                      Share the ride, share the cost
                    </div>
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

          {/* Footer */}
          <Footer />
        </div>
      </div>

      {/* Overlay screen when input is focused */}
      {isFocused && (
        <div className="search-overlay">
          <div className="overlay-header">
            <h2 className="overlay-title">Plan your ride</h2>
            <button
              type="button"
              className="cancel-button"
              onClick={() => setIsFocused(false)}
            >
              Cancel
            </button>
          </div>

          {/* New filter buttons */}
          <div className="filter-buttons">
            <button type="button" className="filter-button">
              <Clock size={16} className="filter-icon" />
              Pickup now
              {' '}
              <span className="dropdown-arrow">▾</span>
            </button>
            <button type="button" className="filter-button">
              <Person size={16} className="filter-icon" />
              For me
              {' '}
              <span className="dropdown-arrow">▾</span>
            </button>
          </div>

          {/* Location Box */}
          <div className="location-box">
            <div className="location-entry top">
              <div className="dot" />
              <div className="current-location-text">
                Square Top Hiking Trail
              </div>
            </div>
            <div className="divider-line" />
            <div className="location-entry">
              <div className="square" />
              <input
                autoFocus
                type="text"
                placeholder="Where to?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="where-to-input"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    router.push('/confirmation');
                  }
                }}
              />
            </div>
          </div>

          {/* Saved Places */}
          <div className="saved-places">
            <div className="saved-item">
              <Clock className="saved-icon" size={18} />
              <div className="saved-text">
                <div className="name">Lilo Ridge Trail</div>
                <div className="address">2003 Lilo Rd, Honolulu, HI</div>
              </div>
            </div>
            <div className="saved-item">
              <Clock className="saved-icon" size={18} />
              <div className="saved-text">
                <div className="name">DQ Mart</div>
                <div className="address">1138 Piʻikoi Ave, Honolulu, HI</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
