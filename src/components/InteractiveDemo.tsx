import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Activity, ShieldCheck, Thermometer, Gauge, Sparkles, ArrowRight, Zap, Check } from 'lucide-react';

interface InteractiveDemoProps {
  onRequestDemo: () => void;
  onWatchVideoModal: () => void;
}

export const InteractiveDemo: React.FC<InteractiveDemoProps> = ({ onRequestDemo, onWatchVideoModal }) => {
  const [selectedEquipment, setSelectedEquipment] = useState<'mcc' | 'busduct' | 'vfd'>('mcc');
  const [cleanProgress, setCleanProgress] = useState<number>(30); // 0 to 100%
  const [isCleaning, setIsCleaning] = useState<boolean>(false);

  // Auto clean simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCleaning) {
      interval = setInterval(() => {
        setCleanProgress((prev) => {
          if (prev >= 100) {
            setIsCleaning(false);
            return 100;
          }
          return prev + 5;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isCleaning]);

  const equipmentProfiles = {
    mcc: {
      title: 'Motor Control Center (MCC) Busbars & Drawers',
      voltage: '415V – 690V AC',
      location: 'Continuous Chemical & Automotive Processing Lines',
      typicalContaminant: 'Carbon dust, grease mist, airborne fly ash',
      irInitial: 1.8, // MΩ
      irTarget: 580, // MΩ
      tempInitial: 68, // °C
      tempTarget: 39, // °C
      flashoverRisk: 'High (Phase-to-Phase Creepage)',
      image: '/images/insitu-decontamination-action.jpg'
    },
    busduct: {
      title: 'High-Voltage Switchgear & Busduct Enclosure',
      voltage: '3.3kV – 11kV AC',
      location: 'Thermal Power Utility & Steel Mill Substations',
      typicalContaminant: 'Conductive coal dust, metallic oxide particulate, saline humidity',
      irInitial: 4.2, // MΩ
      irTarget: 950, // MΩ
      tempInitial: 74, // °C
      tempTarget: 41, // °C
      flashoverRisk: 'Severe (Corona tracking under humidity)',
      image: 'https://images.pexels.com/photos/9989522/pexels-photo-9989522.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
    },
    vfd: {
      title: 'VFD Inverter Racks, PLC Cabinets & Micro-Relays',
      voltage: '24V DC / 415V AC',
      location: 'Automated Pharma Cleanrooms & Data Center UPS Rooms',
      typicalContaminant: 'Micro-fibres, static particulate, sticky plasticizer film',
      irInitial: 12, // MΩ
      irTarget: 1200, // MΩ
      tempInitial: 58, // °C
      tempTarget: 34, // °C
      flashoverRisk: 'Moderate (Logic trip & contact sticking)',
      image: 'https://images.pexels.com/photos/28265032/pexels-photo-28265032.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
    }
  };

  const currentProf = equipmentProfiles[selectedEquipment];
  const progressRatio = cleanProgress / 100;
  
  // Real-time calculated telemetry
  const currentIR = Math.round(currentProf.irInitial + (currentProf.irTarget - currentProf.irInitial) * progressRatio);
  const currentTemp = Math.round(currentProf.tempInitial - (currentProf.tempInitial - currentProf.tempTarget) * progressRatio);
  const contaminationPct = Math.round(100 - cleanProgress * 0.98);

  const handleStartCleaning = () => {
    setCleanProgress(0);
    setIsCleaning(true);
  };

  const handleReset = () => {
    setIsCleaning(false);
    setCleanProgress(20);
  };

  return (
    <section id="demo" className="w-full bg-[#F5F8F9] py-16 lg:py-24 border-b border-[#DCE5EA]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 xl:px-0">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#007C83]" />
              <span className="text-[12px] leading-[18px] font-semibold tracking-[1.6px] uppercase text-[#007C83] font-mono-tech">
                SECONDARY CONVERSION & TECHNICAL DEMO
              </span>
            </div>

            <h2 className="text-[#102A43] font-bold text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.18] lg:leading-[50px] tracking-[-0.7px] lg:tracking-[-1.4px]">
              Interactive In-Situ Decontamination Simulator
            </h2>

            <p className="text-[#425466] text-[16px] lg:text-[17px] leading-[26px] lg:leading-[28px] mt-4">
              Select an electrical infrastructure asset below to observe how InstaClean™ flushes conductive contamination, restores Insulation Resistance (IR), and stabilizes thermal operating margins in real time.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto">
            <button
              onClick={onWatchVideoModal}
              className="h-[52px] px-6 rounded-[10px] bg-white border border-[#102A43] hover:bg-[#F0F4F7] text-[#102A43] text-[14px] font-semibold transition-all flex items-center gap-2 shadow-xs group"
            >
              <div className="w-7 h-7 rounded-full bg-[#EAF6F5] flex items-center justify-center text-[#007C83] group-hover:scale-105 transition-transform">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>Watch Field Video (3:20)</span>
            </button>
          </div>
        </div>

        {/* Equipment Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <button
            onClick={() => { setSelectedEquipment('mcc'); setCleanProgress(35); }}
            className={`p-4 rounded-[12px] border text-left transition-all duration-200 cursor-pointer ${
              selectedEquipment === 'mcc'
                ? 'bg-white border-[#007C83] shadow-md ring-1 ring-[#007C83]'
                : 'bg-white/60 hover:bg-white border-[#DCE5EA]'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono-tech text-[10px] font-semibold px-2 py-0.5 rounded bg-[#EAF6F5] text-[#007C83]">
                415V – 690V AC
              </span>
              {selectedEquipment === 'mcc' && <Check className="w-4 h-4 text-[#007C83]" />}
            </div>
            <div className="font-bold text-[#102A43] text-[15px] mb-1">MCC & PCC Switchgear</div>
            <div className="text-[12px] text-[#607285] leading-tight">Continuous processing plant busbars</div>
          </button>

          <button
            onClick={() => { setSelectedEquipment('busduct'); setCleanProgress(25); }}
            className={`p-4 rounded-[12px] border text-left transition-all duration-200 cursor-pointer ${
              selectedEquipment === 'busduct'
                ? 'bg-white border-[#007C83] shadow-md ring-1 ring-[#007C83]'
                : 'bg-white/60 hover:bg-white border-[#DCE5EA]'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono-tech text-[10px] font-semibold px-2 py-0.5 rounded bg-[#EAF6F5] text-[#007C83]">
                3.3kV – 11kV AC
              </span>
              {selectedEquipment === 'busduct' && <Check className="w-4 h-4 text-[#007C83]" />}
            </div>
            <div className="font-bold text-[#102A43] text-[15px] mb-1">High-Voltage Busducts</div>
            <div className="text-[12px] text-[#607285] leading-tight">Utility substations & heavy industry</div>
          </button>

          <button
            onClick={() => { setSelectedEquipment('vfd'); setCleanProgress(40); }}
            className={`p-4 rounded-[12px] border text-left transition-all duration-200 cursor-pointer ${
              selectedEquipment === 'vfd'
                ? 'bg-white border-[#007C83] shadow-md ring-1 ring-[#007C83]'
                : 'bg-white/60 hover:bg-white border-[#DCE5EA]'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono-tech text-[10px] font-semibold px-2 py-0.5 rounded bg-[#EAF6F5] text-[#007C83]">
                24V – 415V SENSITIVE
              </span>
              {selectedEquipment === 'vfd' && <Check className="w-4 h-4 text-[#007C83]" />}
            </div>
            <div className="font-bold text-[#102A43] text-[15px] mb-1">VFD Drives & PLC Racks</div>
            <div className="text-[12px] text-[#607285] leading-tight">Automation cleanrooms & data centres</div>
          </button>
        </div>

        {/* Interactive Simulator Cockpit */}
        <div className="bg-white rounded-[20px] border border-[#DCE5EA] shadow-industrial overflow-hidden">
          
          {/* Top Status Bar */}
          <div className="h-12 px-6 bg-[#FAFCFD] border-b border-[#DCE5EA] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#007C83] animate-pulse" />
              <span className="font-mono-tech text-[12px] font-semibold text-[#102A43]">
                TARGET: {currentProf.title}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[11px] font-mono-tech text-[#607285]">
              <span>VOLTAGE CLASS: {currentProf.voltage}</span>
              <span>•</span>
              <span>LOCATION: {currentProf.location}</span>
            </div>
          </div>

          {/* Main Visual & Telemetry Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#DCE5EA]">
            
            {/* Visual Canvas (7 cols) */}
            <div className="lg:col-span-7 p-6 relative flex flex-col justify-between min-h-[420px] bg-white">
              
              {/* Technical Grid background */}
              <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

              {/* Equipment Simulation Viewport */}
              <div className="relative w-full h-[280px] sm:h-[320px] rounded-xl overflow-hidden border border-[#DCE5EA] bg-[#0E1F30]">
                {/* Photo base */}
                <img
                  src={currentProf.image}
                  alt={currentProf.title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  style={{ filter: `grayscale(${Math.max(0, 50 - cleanProgress / 2)}%)` }}
                />

                {/* Contamination Overlay Layer (Fades out as cleanProgress increases) */}
                <div
                  className="absolute inset-0 bg-[#A65A16]/30 mix-blend-multiply transition-opacity duration-200 pointer-events-none"
                  style={{ opacity: (100 - cleanProgress) / 100 * 0.85 }}
                />

                {/* Particle Overlay Animation (Disappears as cleaned) */}
                {cleanProgress < 95 && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ opacity: (100 - cleanProgress) / 100 }}
                  >
                    <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-[#A65A16] blur-xs animate-ping" />
                    <div className="absolute top-1/2 left-2/3 w-2.5 h-2.5 rounded-full bg-[#B58B3A] blur-xs" />
                    <div className="absolute bottom-1/3 left-1/2 w-3 h-3 rounded-full bg-[#A65A16] blur-xs" />
                    <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#765A20] blur-xs" />
                  </div>
                )}

                {/* Clean Decontamination Spray Stream (Active during simulation) */}
                {isCleaning && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-12 bg-gradient-to-r from-transparent via-[#EAF6F5]/80 to-transparent blur-md transform -rotate-12 animate-pulse" />
                  </div>
                )}

                {/* Continuity Line Graphic Overlay on equipment */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 320" fill="none">
                  {/* Continuity path passing through */}
                  <path
                    d="M 40 160 L 180 160 L 180 200 L 380 200 L 380 160 L 560 160"
                    stroke={cleanProgress > 70 ? '#007C83' : '#A65A16'}
                    strokeWidth="2"
                    strokeDasharray={cleanProgress > 70 ? 'none' : '4 4'}
                    strokeLinecap="round"
                  />
                  <circle cx="40" cy="160" r="4" fill={cleanProgress > 70 ? '#007C83' : '#A65A16'} />
                  <circle cx="180" cy="160" r="3" fill={cleanProgress > 70 ? '#007C83' : '#A65A16'} />
                  <circle cx="180" cy="200" r="3" fill={cleanProgress > 70 ? '#007C83' : '#A65A16'} />
                  <circle cx="380" cy="200" r="3" fill={cleanProgress > 70 ? '#007C83' : '#A65A16'} />
                  <circle cx="380" cy="160" r="3" fill={cleanProgress > 70 ? '#007C83' : '#A65A16'} />
                  <circle cx="560" cy="160" r="4" fill={cleanProgress > 70 ? '#007C83' : '#A65A16'} />
                </svg>

                {/* Floating Status Tag on Image */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#DCE5EA] text-[11px] font-mono-tech shadow-md">
                  <span className="text-[#607285]">STATE: </span>
                  <span className={cleanProgress > 75 ? 'text-[#007C83] font-bold' : 'text-[#A65A16] font-bold'}>
                    {cleanProgress > 75 ? 'NOMINAL CONTINUITY' : 'DEGRADED CREEPAGE'}
                  </span>
                </div>

                {/* Live Clean Status Pill */}
                <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-sm text-white px-3 py-1.5 rounded-md font-mono-tech text-[11px] flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-[#007C83]" />
                  <span>CYCLE PROGRESS: {cleanProgress}%</span>
                </div>
              </div>

              {/* Slider & Quick Controls */}
              <div className="mt-5 flex flex-col gap-3">
                <div className="flex items-center justify-between text-[12px] font-mono-tech">
                  <span className="text-[#607285] font-medium">Scrub Decontamination Stage:</span>
                  <span className="text-[#102A43] font-bold">{cleanProgress}% Flushed</span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={cleanProgress}
                  onChange={(e) => {
                    setIsCleaning(false);
                    setCleanProgress(Number(e.target.value));
                  }}
                  aria-label="Decontamination stage slider"
                  className="w-full h-2 bg-[#DCE5EA] rounded-lg appearance-none cursor-pointer accent-[#007C83]"
                />

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={handleStartCleaning}
                    disabled={isCleaning}
                    className="h-10 px-4 rounded-lg bg-[#007C83] hover:bg-[#006369] text-white text-[13px] font-semibold transition-colors flex items-center gap-2 disabled:opacity-50"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isCleaning ? 'Spraying In-Situ...' : 'Simulate InstaClean™ Spray'}</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="h-10 px-3.5 rounded-lg bg-[#F5F8F9] hover:bg-[#EAF6F5] text-[#607285] hover:text-[#102A43] text-[12px] font-medium transition-colors flex items-center gap-1.5 border border-[#DCE5EA]"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Telemetry Readouts (5 cols) */}
            <div className="lg:col-span-5 p-6 bg-[#FAFCFD] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#DCE5EA]">
                  <span className="text-[12px] font-mono-tech font-bold uppercase tracking-wider text-[#102A43] flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-[#007C83]" />
                    <span>Telemetry Indicators</span>
                  </span>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-white border border-[#DCE5EA] text-[#607285]">
                    CALCULATED DYNAMICS
                  </span>
                </div>

                {/* Telemetry Metrics Stack */}
                <div className="space-y-4">
                  {/* 1. Insulation Resistance (IR) */}
                  <div className="bg-white p-4 rounded-xl border border-[#DCE5EA] shadow-xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[12px] font-medium text-[#607285] flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#007C83]" />
                        Insulation Resistance (IR)
                      </span>
                      <span className={`text-[11px] font-mono-tech font-bold ${
                        currentIR > 200 ? 'text-[#007C83]' : 'text-[#A65A16]'
                      }`}>
                        {currentIR > 200 ? 'OPTIMAL (>200 MΩ)' : 'CRITICAL (LOW)'}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[28px] font-bold text-[#102A43] font-mono-tech">
                        {currentIR}
                      </span>
                      <span className="text-[14px] text-[#607285] font-mono-tech">MΩ @ 1000V DC</span>
                    </div>
                    {/* Small progress meter */}
                    <div className="w-full h-1.5 bg-[#F0F4F7] rounded-full mt-2 overflow-hidden">
                      <div
                        className="h-full bg-[#007C83] transition-all duration-300"
                        style={{ width: `${Math.min(100, (currentIR / currentProf.irTarget) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* 2. Contact Operating Temperature */}
                  <div className="bg-white p-4 rounded-xl border border-[#DCE5EA] shadow-xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[12px] font-medium text-[#607285] flex items-center gap-1.5">
                        <Thermometer className="w-3.5 h-3.5 text-[#A65A16]" />
                        Busbar Contact Temperature
                      </span>
                      <span className={`text-[11px] font-mono-tech font-bold ${
                        currentTemp < 45 ? 'text-[#007C83]' : 'text-[#A65A16]'
                      }`}>
                        {currentTemp < 45 ? 'NOMINAL AMBIENT' : 'HOT-SPOT TRAP'}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[28px] font-bold text-[#102A43] font-mono-tech">
                        {currentTemp}°C
                      </span>
                      <span className="text-[13px] text-[#607285] font-mono-tech">
                        (Reduction: -{currentProf.tempInitial - currentTemp}°C)
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-[#F0F4F7] rounded-full mt-2 overflow-hidden">
                      <div
                        className="h-full bg-[#A65A16] transition-all duration-300"
                        style={{ width: `${((currentTemp - 30) / (currentProf.tempInitial - 30)) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* 3. Surface Contamination Density */}
                  <div className="bg-white p-4 rounded-xl border border-[#DCE5EA] shadow-xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[12px] font-medium text-[#607285] flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#607285]" />
                        Particulate Density & Oil Sheen
                      </span>
                      <span className="text-[11px] font-mono-tech font-semibold text-[#102A43]">
                        {contaminationPct}% remaining
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[24px] font-bold text-[#102A43] font-mono-tech">
                        {contaminationPct <= 5 ? 'Clean' : `${contaminationPct}%`}
                      </span>
                      <span className="text-[12px] text-[#007C83] font-mono-tech">
                        {cleanProgress > 90 ? '✓ Dielectric Gap Restored' : '• Flush in Progress'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Conversion Box inside simulator */}
              <div className="mt-6 pt-5 border-t border-[#DCE5EA]">
                <div className="text-[12px] text-[#607285] mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#007C83]" />
                  <span>Verified through calibrated megger & thermographic inspection.</span>
                </div>
                <button
                  onClick={onRequestDemo}
                  className="w-full h-[48px] rounded-[10px] bg-[#102A43] hover:bg-[#173C59] text-white text-[13px] font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <span>Request In-Situ Trial at Your Facility</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
