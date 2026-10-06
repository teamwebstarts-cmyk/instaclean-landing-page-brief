import React, { useState } from 'react';
import { Sparkles, CheckCircle2, FileText } from 'lucide-react';

interface CleaningMechanismProps {
  onRequestDemo: () => void;
  onRequestDocs: () => void;
}

export const CleaningMechanism: React.FC<CleaningMechanismProps> = ({ onRequestDemo, onRequestDocs }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: 'Capillary Penetration',
      tagline: 'MICRO-CLEARANCE ACCESS',
      summary: 'Flows into narrow busbar overlaps, contact springs, and micro-switch cavities without disassembly.',
      metric: '< 22 dynes/cm surface tension',
    },
    {
      step: '02',
      title: 'Contaminant Solubilization',
      tagline: 'ENCAPSULATION WITHOUT ABRASION',
      summary: 'Lifts oil, carbon, and chemical salts into suspension while protecting copper, silver contacts, and insulation.',
      metric: 'Neutral pH & Non-corrosive',
    },
    {
      step: '03',
      title: 'Rapid Controlled Evaporation',
      tagline: 'ZERO CONDUCTIVE RESIDUE',
      summary: 'Evaporates at ambient temperature, leaving no oily or conductive film behind.',
      metric: '100% Volatile Formulation',
    },
    {
      step: '04',
      title: 'Continuity & IR Restoration',
      tagline: 'DIELECTRIC CLEARANCE RESTORED',
      summary: 'Clears surface tracking paths and helps restore insulation resistance to nominal levels.',
      metric: 'IR recovery: > 500 MΩ',
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-[#DCE5EA]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 xl:px-6">
        
        {/* Section Header */}
        <div className="max-w-[780px] mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#007C83]" />
            <span className="text-[12px] leading-[18px] font-semibold tracking-[1.6px] uppercase text-[#007C83] font-mono-tech">
              HOW INSTACLEAN™ WORKS
            </span>
          </div>

          <h2 className="text-[#102A43] font-bold text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.18] lg:leading-[50px] tracking-[-0.7px] lg:tracking-[-1.4px] mb-5">
            Clean the contamination. Keep the continuity.
          </h2>

          <p className="text-[#425466] text-[16px] lg:text-[17px] leading-[26px] lg:leading-[28px]">
            InstaClean™ is formulated specifically for industrial electrical infrastructure. By combining high dielectric breakdown resistance, low surface tension, and flash evaporation, it flushes out conductive particulates without mechanical abrasion or downtime.
          </p>
        </div>

        {/* Central Concept Interactive Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 items-stretch mb-16">
          
          {/* Left Diagram: FIG. 03 Cleaning Mechanism & Continuity Flow (7 cols) */}
          <div className="bg-[#F5F8F9] rounded-[16px] border border-[#DCE5EA] p-5 lg:p-6 relative overflow-hidden flex flex-col">
            
            {/* Header annotation */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DCE5EA]">
              <span className="font-mono-tech text-[11px] font-semibold text-[#102A43] bg-white px-2 py-0.5 rounded border border-[#DCE5EA]">
                FIG. 03 — FLUIDIC FLUSH & MOLECULAR EVAPORATION
              </span>
              <span className="text-[11px] font-mono-tech text-[#007C83] flex items-center gap-1 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                RESTORED CONTINUITY
              </span>
            </div>

            {/* Before-and-after visual for the four-stage cleaning process */}
            <div className="relative w-full flex-1 min-h-[300px] rounded-xl bg-[#243B53] border border-[#DCE5EA] overflow-hidden">
              <img
                src="/images/instaclean-busbar-process.png"
                alt="Industrial copper busbars and dark ribbed insulator standoffs inside a switchgear cabinet"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

          </div>

          {/* Right Column: Step-by-Step Mechanism Breakdown (5 cols) */}
          <div className="flex flex-col">
            <span className="text-[12px] font-mono-tech uppercase font-semibold text-[#607285] tracking-wider mb-3">
              4-Stage Engineering Decontamination Mechanism:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-[12px] border border-[#DCE5EA] bg-white">
            {steps.map((st, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-4 lg:p-5 border-[#DCE5EA] cursor-pointer transition-colors duration-200 text-left ${
                    isActive
                      ? 'bg-[#F2FAF9]'
                      : 'bg-white hover:bg-[#F8FAFB]'
                  } ${idx < 3 ? 'border-b' : 'border-b-0'} ${idx < 2 ? 'sm:border-b' : 'sm:border-b-0'} ${idx % 2 === 0 ? 'sm:border-r' : ''}`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono-tech text-[11px] font-bold text-[#007C83] bg-[#EAF6F5] px-2 py-0.5 rounded">
                      STEP {st.step}
                    </span>
                    {isActive && <CheckCircle2 className="w-4 h-4 text-[#007C83] shrink-0" />}
                  </div>

                  <h3 className="text-[15px] lg:text-[16px] font-bold text-[#102A43] mb-1.5">
                    {st.title}
                  </h3>

                  <p className="text-[12px] leading-[18px] text-[#425466] mb-3">
                    {st.summary}
                  </p>

                  <div className="pt-2 border-t border-[#E7EEF1] flex flex-col gap-1">
                    <span className="text-[10px] font-mono-tech font-semibold text-[#007C83]">{st.tagline}</span>
                    <span className="text-[11px] font-mono-tech text-[#607285]">{st.metric}</span>
                  </div>
                </div>
              );
            })}
            </div>
          </div>

        </div>

        {/* Technical Benchmarks Strip */}
        <div className="bg-[#F5F8F9] rounded-[16px] border border-[#DCE5EA] p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-[620px]">
            <h3 className="text-[18px] font-bold text-[#102A43] mb-1">
              Engineering Assurance: In-situ reliability without polymer swelling
            </h3>
            <p className="text-[14px] leading-[22px] text-[#425466]">
              Unlike aggressive chlorinated or aromatic shop degreasers, InstaClean™ is non-conductive, non-abrasive, and non-corrosive to silver-plated busbars, tin contacts, neoprene seals, and epoxy busbar supports.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onRequestDemo}
              className="h-[46px] px-5 rounded-[10px] bg-[#102A43] hover:bg-[#173C59] text-white text-[13px] font-semibold transition-colors flex items-center gap-2"
            >
              <span>Request a Site Demo</span>
            </button>
            <button
              onClick={onRequestDocs}
              className="h-[46px] px-5 rounded-[10px] bg-white hover:bg-[#F0F4F7] text-[#102A43] border border-[#DCE5EA] text-[13px] font-semibold transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-[#007C83]" />
              <span>Material Compatibility Data</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
