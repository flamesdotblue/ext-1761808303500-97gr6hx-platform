import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section id="hero" className="relative h-[78vh] w-full overflow-hidden flex items-stretch">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 mb-4">
            <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
            Iridescent digital identity • Fintech • Modern • Futuristic
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Display Student Records in StuRec using JDBC
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            A ready-to-use Java JDBC example to create the StuRec table and display student details
            including Enroll No, Name, Address, Mobile No, and Email-ID.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#jdbc" className="rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold px-5 py-2.5 transition-colors">
              Learn JDBC Steps
            </a>
            <a href="#code" className="rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 transition-colors">
              View Java Code
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950"></div>
    </section>
  );
}
