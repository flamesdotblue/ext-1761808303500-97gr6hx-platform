import React from 'react';
import { Database, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Database className="w-6 h-6 text-cyan-400" />
          <span className="font-semibold tracking-tight">StuRec JDBC Viewer</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-white/80">
          <a href="#hero" className="hover:text-white transition-colors">Home</a>
          <a href="#jdbc" className="hover:text-white transition-colors">JDBC Guide</a>
          <a href="#code" className="hover:text-white transition-colors">Code</a>
        </nav>
        <div className="flex items-center gap-2 text-white/80">
          <User className="w-5 h-5" />
          <span className="hidden sm:inline">Student Records</span>
        </div>
      </div>
    </header>
  );
}
