/* eslint-disable @next/next/no-img-element */

'use client';

import { useRef, useState } from 'react';
import Footer from '@/components/Footer';
import './glow.css';

export default function Home() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.buttons !== 1) return; // Only move if mouse button is held
    setPosition({
      x: position.x + event.movementX,
      y: position.y + event.movementY,
    });
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const zoomFactor = event.deltaY > 0 ? 0.9 : 1.1; // Zoom in or out
    setZoom((prevZoom) => Math.min(3, Math.max(1, prevZoom * zoomFactor))); // Limit zoom between 1x and 3x
  };

  return (
    <main className="map-container">
      {/* Map Wrapper - Only this part is movable */}
      <div
        ref={mapRef}
        className="movable-map"
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
        }}
      >
        <img src="/map.png" alt="Custom Map" className="map-image" />
      </div>

      {/* Glowing Pin - Stays Fixed in Center */}
      <div className="glowing-pin" />

      {/* Footer - Stays Fixed at Bottom */}
      <Footer />
    </main>
  );
}
