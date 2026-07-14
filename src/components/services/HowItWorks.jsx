import React, { useState } from 'react';
import { 
  CalendarCheck, 
  Truck, 
  WashingMachine, 
  PackageCheck, 
  ShieldCheck, 
  Sparkles, 
  Clock3, 
  Settings,
  ShieldAlert
} from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: CalendarCheck,
    step: 'PH-01',
    title: 'Precision Booking',
    desc: 'Lock in a dynamic 2-hour collection slot instantly on our booking matrix.',
    accentColor: '#2563eb', // Clean Blue
    status: 'OPTIMIZED',
    metric: 'Transit: Guaranteed',
    details: 'Our localized routing grid reserves transit assets instantly, matching your precise schedule without overlapping windows.'
  },
  {
    id: 2,
    icon: Truck,
    step: 'PH-02',
    title: 'Secure Collection',
    desc: 'A dedicated, background-checked valet coordinates collection directly from your hands.',
    accentColor: '#4f46e5', // Indigo
    status: 'EN_ROUTE',
    metric: 'Transit: Fully Insured',
    details: 'Garments are safely stowed in dust-sealed lockboxes. Valet routing models are optimized live to maintain localized carbon offsets.'
  },
  {
    id: 3,
    icon: WashingMachine,
    step: 'PH-03',
    title: 'Fabric Sanitize',
    desc: 'Deep fiber cleaning utilizing tailored, temperature-balanced eco-treatments.',
    accentColor: '#10b981', // Emerald
    status: 'PROCESSING',
    metric: 'Detergents: Organic Base',
    details: 'Garments are individually assessed, cataloged, and cleaned using zero-petroleum solvents that protect delicate fibers and original structural drape.'
  },
  {
    id: 4,
    icon: PackageCheck,
    step: 'PH-04',
    title: 'Fresh Turnover',
    desc: 'Bespoke finishing, crisp pressing, and protective presentation delivery.',
    accentColor: '#d97706', // Amber
    status: 'READY',
    metric: 'Packaging: Breathable, Zero-Waste',
    details: 'Following final quality verification, finished pieces are packaged in breathable linen bags and returned straight to your dressing room.'
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const currentData = steps.find(s => s.id === activeStep) || steps[0];

  return (
    <section className="bg-[#f8fafc] py-24 sm:py-32 relative overflow-hidden" id="operational-matrix">
      
      {/* Structural Minimalist Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Block: Sharp, modern, left-aligned typography */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] text-xs font-mono text-[#475569] shadow-sm mb-6">
            <Settings size={12} className="animate-spin text-indigo-600" />
            OPERATIONAL MATRIX // 04 CYCLES
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-none">
            Architected for complete <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-500 bg-clip-text text-[#154088]">
              wardrobe preservation.
            </span>
          </h2>
          <p className="mt-4 text-[#475569] text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
            We traded manual chore cycles for high-performance software orchestration. Your wardrobe moves safely through a closed-loop system and returns freshly revitalized in 24 hours.
          </p>
        </div>

        {/* Dynamic Interactive Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* LEFT: MINIMALIST STEP SELECTOR LIST */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-3">
            {steps.map(({ id, icon: Icon, step, title, desc, accentColor }) => {
              const isActive = activeStep === id;
              return (
                <div
                  key={step}
                  onMouseEnter={() => setActiveStep(id)}
                  onClick={() => setActiveStep(id)}
                  className={`group relative p-6 rounded-2xl transition-all duration-300 cursor-pointer border flex gap-6 items-center ${
                    isActive
                      ? 'bg-white border-[#cbd5e1] shadow-[0_15px_40px_-20px_rgba(0,0,0,0.05)] translate-x-2'
                      : 'bg-transparent border-transparent hover:bg-slate-100/50 hover:border-slate-200/60'
                  }`}
                >
                  {/* Left Visual Status Node */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                      isActive ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-[#e2e8f0] text-slate-400'
                    }`}>
                      <Icon size={18} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Text Description Block */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-wider text-[#94a3b8] font-bold">{step}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                      )}
                    </div>
                    <h3 className="font-bold text-[#0f172a] text-lg mt-0.5">{title}</h3>
                    <p className="text-[#64748b] text-xs sm:text-sm mt-1 leading-relaxed font-medium">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: ARCHITECTURAL "BLUEPRINT" PANEL */}
          <div className="lg:col-span-5 flex">
            <div className="w-full bg-white border border-[#cbd5e1] rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative shadow-[0_30px_60px_-25px_rgba(0,0,0,0.04)] overflow-hidden">
              
              {/* Dynamic light subtle color indicator block */}
              <div 
                className="absolute top-0 inset-x-0 h-1.5 transition-all duration-500" 
                style={{ backgroundColor: currentData.accentColor }}
              />

              {/* Tag Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#e2e8f0]">
                <div className="flex items-center gap-2.5">
                  <span className="bg-[#f1f5f9] border border-[#e2e8f0] text-[#475569] font-mono text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {currentData.step}
                  </span>
                  <span className="font-mono text-xs text-[#94a3b8] font-bold">STATUS: {currentData.status}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#475569] font-mono font-bold">
                  <Clock3 size={12} className="text-indigo-600" /> 24H TARGET
                </div>
              </div>

              {/* Blueprint Description */}
              <div className="py-8">
                <h4 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">
                  {currentData.title}
                </h4>
                <p className="text-[#475569] text-sm sm:text-base leading-relaxed mt-4 font-medium">
                  {currentData.details}
                </p>
              </div>

              {/* Structural Grid Footer */}
              <div className="space-y-4 pt-6 border-t border-[#e2e8f0]">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#94a3b8] font-bold">LIVE TELEMETRY</span>
                  <span className="text-[#475569] font-bold">{currentData.metric}</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#94a3b8] font-bold">ACCELERATION STATE</span>
                  <span className="text-[#0f172a] font-extrabold">ECO_OPTIMAL_CYCLE_v4</span>
                </div>
                
                {/* Assurance Block */}
                <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0f172a]">Fully Bonded Processing</p>
                      <p className="text-[10px] text-[#64748b] font-medium">Protected and insured care framework</p>
                    </div>
                  </div>
                  <Sparkles size={14} className="text-amber-500 fill-amber-500 opacity-60" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}