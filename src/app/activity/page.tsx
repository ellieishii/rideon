'use client';

import Footer from '@/components/Footer';

export default function ActivityPage() {
  return (
    <main style={{ paddingBottom: '80px', minHeight: '100vh' }}>
      <h1>Activity</h1>
      <p>This is your activity page. You can show logs, progress, or other features here.</p>
      {/* Keep the footer at the bottom */}
      <Footer />
    </main>
  );
}
