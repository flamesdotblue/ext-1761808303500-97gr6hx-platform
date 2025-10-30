import React from 'react';
import Navbar from './components/Navbar';
import HeroSpline from './components/HeroSpline';
import JDBCSection from './components/JDBCSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSpline />
        <JDBCSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
