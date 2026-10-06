import React, { useState } from 'react';
import { Clock, Wind, Droplets, Ban, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onLearnSolution: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onLearnSolution }) => {
  const [activeFailureMode, setActiveFailureMode] = useState<number>(0);

  const failureModes = [
    {
      title: 'Dielectric Surface Tracking',
      eyebrow: 'PHASE-TO-PHASE BRIDGING',
      description: 'Conductive carbon, metallic dust, and chemical salts settle across busbar insulator standoffs. Over time, these form carbonized micro-tracking paths that degrade Insulation Resistance (IR) and trigger flashovers.',
      impact: 'Uncommanded breaker trips, insulation breakdown, phase-to-ground flashover risk.',
      temperature: '+18°C contact rise',
      status: 'Critical Leakage Path'
    },
    {
      title: 'Thermal Blanket Effect',
      eyebrow: 'HEAT RETENTION & OVERHEATING',
      description: 'A 0.5 mm layer of industrial dust and grease acts as a thermal insulator, preventing natural convective and radiative cooling of copper busbars, contacts, and disconnects.',
      impact: 'Accelerated thermal aging of insulation polymers, premature contact fatigue, hot-spot oxidation.',
      temperature: '+24°C thermal trap',
      status: 'Localized Hotspots'
    },
    {
      title: 'Monsoon Moisture Activation',
      eyebrow: 'IONIC CURRENT SURGE',
      description: 'Dry, seemingly dormant airborne particulate absorbs relative humidity during Indian monsoon or coastal operation. The hygroscopic crust transforms into an active electrolyte paste.',
      impact: 'Sudden catastrophic arc faults during morning peak loads without prior warning.',
      temperature: 'Sudden dielectric drop',
      status: 'High Flashover Risk'
    },
    {
      title: 'Relay & Contact Chatter',
      eyebrow: 'MECHANICAL STICKING',
      description: 'Micro-switch pivots, auxiliary relay contacts, and solenoid latches become gummed with sticky airborne chemical film, preventing clean opening or closing during protection trips.',
      impact: 'Failure of protective trip coils to clear downstream faults, compounding equipment damage.',
      temperature: 'Micro-welding risk',
      status: 'Protection Blindspot'
    }
  ];

  const traditionalFlaws = [
    {
      method: 'Compressed Air Blow-Down',
      icon: Wind,
      flaw: 'Pushes particulate into enclosed micro-switch cavities, drives oil/moisture aerosol from plant air compressors, and creates dangerous airborne particulate clouds.'
    },
    {
      method: 'Manual Rag & Solvent Wiping',
      icon: Ban,
      flaw: 'Impossible to safely access tight 3-phase busbar clearances; leaves conductive lint fibres, scratches protective plating, and exposes staff to hazardous hand contact.'
    },
    {
      method: 'Water / Aqueous Washing',
      icon: Droplets,
      flaw: 'Destroys dielectric insulation, induces rapid copper/steel corrosion, promotes tracking, and requires extended multi-day drying bake-outs.'
    },
    {
      method: 'Scheduled Offline Overhauls',
      icon: Clock,
      flaw: 'Requires total plant blackout, coordination with regional grid dispatches, and is frequently postponed until sudden catastrophic trip occurs.'
    }
  ];

  return (
    <section id="technology" className="w-full bg-[#F5F8F9] py-16 lg:py-24 border-b border-[#DCE5EA]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 xl:px-0">
        
        {/* Section Eyebrow & Headline */}
        <div className="max-w-[760px] mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#A65A16]" />
            <span className="text-[12px] leading-[18px] font-semibold tracking-[1.6px] uppercase text-[#A65A16] font-mono-tech">
              THE OVERLOOKED OPERATIONAL THREAT
            </span>
          </div>

          <h2 className="text-[#102A43] font-bold text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.18] lg:leading-[50px] tracking-[-0.7px] lg:tracking-[-1.4px] mb-5">
            Contamination inside electrical infrastructure is a silent reliability tax.
          </h2>

          <p className="text-[#425466] text-[16px] lg:text-[17px] leading-[26px] lg:leading-[28px]">
            In Indian manufacturing, power utilities, and transport hubs, ambient air carries abrasive dust, fly ash, chemical fumes, and seasonal moisture. When these enter switchgear enclosures, Motor Control Centers (MCCs), and busducts, they trigger a chain reaction that compromises equipment life and plant uptime.
          </p>
        </div>

        {/* Two-Column Problem Breakdown: Technical Diagram & Interactive Failure Modes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column (7 cols): FIG. 02 Technical Diagram */}
          <div className="lg:col-span-7 bg-white rounded-[16px] border border-[#DCE5EA] p-6 lg:p-8 shadow-card-subtle relative overflow-hidden flex flex-col">
            
            {/* Header annotation */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DCE5EA]">
              <div className="flex items-center gap-2">
                <span className="font-mono-tech text-[11px] font-semibold text-[#102A43] bg-[#F5F8F9] px-2 py-0.5 rounded border border-[#DCE5EA]">
                  FIG. 02 — THE CONTAMINATION DISRUPTION MECHANISM
                </span>
              </div>
              <span className="text-[11px] font-mono-tech text-[#A65A16] flex items-center gap-1 font-semibold">
                CONTINUITY INTERRUPTED
              </span>
            </div>

            {/* Realistic switchgear contamination visual */}
            <div className="relative w-full flex-1 min-h-[320px] rounded-xl bg-[#172A35] border border-[#DCE5EA] overflow-hidden">
              <img
                src="/images/switchgear-contamination-mechanism.png"
                alt="Dust and moisture deposits on copper busbars and insulator standoffs inside industrial switchgear"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#102A43]/65 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 rounded-md border border-white/25 bg-[#102A43]/75 px-3 py-1.5 text-[10px] sm:text-[11px] font-mono-tech text-white backdrop-blur-sm">
                BUSBAR INSULATION • DUST & MOISTURE DEPOSITS
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Interactive Failure Mode Selector */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-[12px] font-mono-tech uppercase font-semibold text-[#607285] tracking-wider mb-1">
              Select Failure Mode to Inspect:
            </span>

            <div className="overflow-hidden rounded-[12px] border border-[#DCE5EA] bg-white">
            {failureModes.map((mode, idx) => {
              const isActive = activeFailureMode === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveFailureMode(idx)}
                  className={`relative p-4 border-b last:border-b-0 cursor-pointer transition-colors duration-200 text-left ${
                    isActive
                      ? 'bg-[#F5FBFA] border-[#DCE5EA] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#007C83]'
                      : 'bg-white hover:bg-[#F8FAFB] border-[#DCE5EA]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono-tech font-semibold text-[#007C83]">
                      {mode.eyebrow}
                    </span>
                    <span className={`text-[10px] font-mono-tech px-2 py-0.5 rounded font-semibold ${
                      isActive ? 'bg-[#EAF6F5] text-[#007C83]' : 'bg-[#F5F8F9] text-[#607285]'
                    }`}>
                      {mode.status}
                    </span>
                  </div>

                  <h3 className="text-[16px] font-bold text-[#102A43] mb-1.5">
                    {mode.title}
                  </h3>

                  <p className="text-[13px] leading-[20px] text-[#425466] mb-2.5">
                    {mode.description}
                  </p>

                  <div className="pt-2 border-t border-[#F0F4F7] flex items-center justify-between text-[11px] font-mono-tech text-[#607285]">
                    <span className="text-[#A65A16] font-medium">{mode.temperature}</span>
                    <span className="text-[#102A43] font-medium">Impact: {mode.impact.split(',')[0]}</span>
                  </div>
                </div>
              );
            })}
            </div>
          </div>

        </div>

        {/* Why Conventional Cleaning Fails: 4 Cards */}
        <div>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-[12px] font-mono-tech font-semibold text-[#607285] tracking-wider uppercase">
                MAINTENANCE BOTTLENECKS
              </span>
              <h3 className="text-[22px] sm:text-[24px] font-semibold text-[#102A43]">
                Why conventional cleaning methods fall short in live facilities
              </h3>
            </div>
            <button
              onClick={onLearnSolution}
              className="text-[13px] font-semibold text-[#007C83] hover:text-[#005a60] flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
            >
              <span>See InstaClean™ Solution</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {traditionalFlaws.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-[12px] border border-[#DCE5EA] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#F5F8F9] border border-[#DCE5EA] flex items-center justify-center text-[#A65A16] mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-[15px] font-bold text-[#102A43] mb-2">
                      {item.method}
                    </h4>
                    <p className="text-[13px] leading-[20px] text-[#425466]">
                      {item.flaw}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F0F4F7] text-[11px] font-mono-tech text-[#A65A16] font-medium">
                    STATUS: DEFICIENT IN LIVE ENVIRONMENTS
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
