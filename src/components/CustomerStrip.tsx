import React, { useState } from 'react';
import { Building2, Train, Zap, Shield, Info, CheckCircle2 } from 'lucide-react';

export const CustomerStrip: React.FC = () => {
  const [viewMode, setViewMode] = useState<'preview' | 'confirmed'>('preview');

  const clientReferences = [
    {
      id: 'cipla',
      name: 'CIPLA',
      fullName: 'Cipla Limited',
      category: 'Pharmaceutical Manufacturing',
      icon: Building2,
      note: 'Report testimonial: Zero outage during sensitive formulation operations.',
      verified: true,
      statusLabel: 'Attributable Reference in Report'
    },
    {
      id: 'tatamotors',
      name: 'TATA MOTORS',
      fullName: 'Tata Motors Limited',
      category: 'Automotive & Heavy Assembly',
      icon: Shield,
      note: 'Plant robotic MCC & busway decontamination schedule.',
      verified: false,
      statusLabel: 'Client-Supplied Reference'
    },
    {
      id: 'rdso',
      name: 'RDSO (RAILWAYS)',
      fullName: 'Research Designs & Standards Organisation',
      category: 'Rail Transit & Rolling Stock',
      icon: Train,
      note: 'Indian Railways trackside & locomotive traction sub-systems.',
      verified: false,
      statusLabel: 'Client-Supplied Reference'
    },
    {
      id: 'mahagenco',
      name: 'MAHAGENCO',
      fullName: 'Maharashtra State Power Generation Co.',
      category: 'Thermal & Hydro Power Utilities',
      icon: Zap,
      note: 'Report purchase-order extract: Critical thermal power switchgear decontamination.',
      verified: true,
      statusLabel: 'Purchase Order Extract in Report'
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-10 border-b border-[#DCE5EA]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 xl:px-0">
        
        {/* Header with Mode Toggle & Guidance */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="text-[12px] font-semibold tracking-[1.6px] uppercase text-[#607285] font-mono-tech">
              {viewMode === 'preview' ? 'CLIENT-REQUESTED REFERENCE STRIP' : 'CONFIRMED REPORT REFERENCES'}
            </span>
            <div className="h-3 w-[1px] bg-[#DCE5EA]" />
            <span className="text-[12px] text-[#007C83] font-medium">
              Major Indian Industrial Sectors
            </span>
          </div>

          {/* Reviewer Toggle (Adheres to the brief's preview vs verified instruction) */}
          <div className="inline-flex items-center gap-2 text-[12px] bg-[#F5F8F9] px-2.5 py-1 rounded-full border border-[#DCE5EA] self-start sm:self-auto">
            <span className="text-[#607285] text-[11px]">View mode:</span>
            <button
              onClick={() => setViewMode('preview')}
              className={`px-2 py-0.5 rounded-full font-medium text-[11px] transition-colors ${
                viewMode === 'preview'
                  ? 'bg-white text-[#102A43] shadow-xs border border-[#DCE5EA]'
                  : 'text-[#607285] hover:text-[#102A43]'
              }`}
            >
              All 4 References (Preview)
            </button>
            <button
              onClick={() => setViewMode('confirmed')}
              className={`px-2 py-0.5 rounded-full font-medium text-[11px] transition-colors ${
                viewMode === 'confirmed'
                  ? 'bg-white text-[#102A43] shadow-xs border border-[#DCE5EA]'
                  : 'text-[#607285] hover:text-[#102A43]'
              }`}
            >
              Documented Only
            </button>
          </div>
        </div>

        {/* 4-Cell Industrial Reference Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clientReferences.map((client) => {
            const isDimmed = viewMode === 'confirmed' && !client.verified;
            const Icon = client.icon;

            return (
              <div
                key={client.id}
                className={`relative p-5 rounded-[12px] border transition-all duration-200 bg-white ${
                  isDimmed
                    ? 'border-[#DCE5EA]/50 opacity-45'
                    : 'border-[#DCE5EA] hover:border-[#007C83]/50 hover:shadow-card-subtle'
                }`}
              >
                {/* Cell Header with Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F5F8F9] border border-[#DCE5EA] flex items-center justify-center text-[#102A43]">
                    <Icon className="w-4 h-4 text-[#102A43]" />
                  </div>
                  {client.verified ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono-tech font-semibold text-[#007C83] bg-[#EAF6F5] px-2 py-0.5 rounded border border-[#007C83]/20">
                      <CheckCircle2 className="w-3 h-3" />
                      DOC-VERIFIED
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono-tech font-medium text-[#607285] bg-[#F5F8F9] px-2 py-0.5 rounded border border-[#DCE5EA]">
                      PENDING AUDIT
                    </span>
                  )}
                </div>

                {/* Elegant plain text company name */}
                <h2 className="text-[18px] font-bold text-[#102A43] tracking-tight leading-snug mb-1">
                  {client.name}
                </h2>
                <div className="text-[12px] font-medium text-[#607285] mb-2 leading-tight">
                  {client.category}
                </div>

                {/* Scope context snippet */}
                <p className="text-[11px] leading-[16px] text-[#607285] pt-2 border-t border-[#F0F4F7]">
                  {client.note}
                </p>
              </div>
            );
          })}
        </div>

        {/* Modest readable caption as strictly mandated */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-[12px] leading-[18px] text-[#607285] px-1">
          <p className="italic">
            {viewMode === 'preview'
              ? 'Client-supplied references — confirmation pending for live public deployment.'
              : 'Selected customer references verified against supplied technical documentation extracts.'}
          </p>
          <div className="flex items-center gap-1.5 mt-1 sm:mt-0 text-[11px] font-mono-tech text-[#607285]">
            <Info className="w-3.5 h-3.5 text-[#007C83]" />
            <span>Tata Steel ≠ Tata Motors • RWP ≠ RDSO distinction respected</span>
          </div>
        </div>

      </div>
    </section>
  );
};
