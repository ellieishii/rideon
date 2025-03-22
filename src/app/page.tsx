/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-use-before-define, jsx-a11y/no-static-element-interactions */

'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import './glow.css';

export default function Home() {
  const [zoom, setZoom] = useState(0.4); // Default zoom level
  const [position, setPosition] = useState({ x: -500, y: -200 }); // Default position
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [lastTouchDist, setLastTouchDist] = useState<number | null>(null);

  // Set initial position based on screen size
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setPosition({ x: -1230, y: -70 });
    }
  }, []); // Runs once when component mounts

  // Map dimensions (adjust to your actual image size)
  const mapWidth = 5500; // Change this to match your image width
  const mapHeight = 3300; // Change this to match your image height

  // Helper function to keep map within bounds
  const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

  // Adjusts position when zooming to prevent going off-screen
  const adjustPositionOnZoom = (
    oldZoom: number,
    newZoom: number,
    centerX: number,
    centerY: number,
  ) => {
    const zoomRatio = newZoom / oldZoom;
    setPosition((prev) => ({
      x: clamp(centerX - (centerX - prev.x) * zoomRatio, window.innerWidth - mapWidth * newZoom, 0),
      y: clamp(centerY - (centerY - prev.y) * zoomRatio, window.innerHeight - mapHeight * newZoom, 0),
    }));
  };

  // Handles mouse dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => setDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const deltaX = e.clientX - startPos.x;
    const deltaY = e.clientY - startPos.y;
    setStartPos({ x: e.clientX, y: e.clientY });
    setPosition((prev) => ({
      x: clamp(prev.x + deltaX, window.innerWidth - mapWidth * zoom, 0),
      y: clamp(prev.y + deltaY, window.innerHeight - mapHeight * zoom, 0),
    }));
  };

  // Handles touch dragging & pinch-to-zoom
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      const touchDist = getTouchDistance(e.touches as unknown as TouchList);
      if (touchDist !== null) setLastTouchDist(touchDist);
    } else {
      const touch = e.touches[0];
      setStartPos({ x: touch.clientX, y: touch.clientY });
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      // Handle Pinch-to-Zoom
      const touchDist = getTouchDistance(e.touches as unknown as TouchList);
      if (lastTouchDist !== null && touchDist !== null) {
        const zoomChange = touchDist / lastTouchDist;
        const newZoom = clamp(zoom * zoomChange, 0.5, 2);

        const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;

        adjustPositionOnZoom(zoom, newZoom, midX, midY);
        setZoom(newZoom);
        setLastTouchDist(touchDist);
      }
    } else {
      // Handle Dragging
      const touch = e.touches[0];
      const deltaX = touch.clientX - startPos.x;
      const deltaY = touch.clientY - startPos.y;
      setStartPos({ x: touch.clientX, y: touch.clientY });
      setPosition((prev) => ({
        x: clamp(prev.x + deltaX, window.innerWidth - mapWidth * zoom, 0),
        y: clamp(prev.y + deltaY, window.innerHeight - mapHeight * zoom, 0),
      }));
    }
  };

  const handleTouchEnd = () => setLastTouchDist(null);

  // Handles scroll wheel zooming
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const zoomChange = e.deltaY > 0 ? -0.05 : 0.05;
    const newZoom = clamp(zoom + zoomChange, 0.5, 2);
    adjustPositionOnZoom(zoom, newZoom, e.clientX, e.clientY);
    setZoom(newZoom);
  };

  // Calculates the distance between two touch points (for pinch zoom)
  const getTouchDistance = (touches: TouchList): number | null => {
    if (touches.length < 2) return null;
    const touch1 = touches[0];
    const touch2 = touches[1];

    return Math.sqrt(
      (touch2.clientX - touch1.clientX) ** 2
      + (touch2.clientY - touch1.clientY) ** 2,
    );
  };

  return (
    <main className="map-container">
      <div
        className="movable-map"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
          transformOrigin: 'top left',
        }}
      >
        <img src="/map.png" alt="Map" className="map-image" />

        {/* 📍 Glowing Pin - Always stays at the correct location */}
        <div
          className="glowing-pin"
          style={{
            position: 'absolute',
            top: '30.9%',
            left: '53.4%',
            transform: `scale(${1 / zoom})`,
            transformOrigin: 'center center',
          }}
        />
      </div>

      <Footer />
    </main>
  );
}
