import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center text-white/60 text-sm">
        <p>© {new Date().getFullYear()} StuRec JDBC Viewer. Built with React, Tailwind, and Spline.</p>
      </div>
    </footer>
  );
}
