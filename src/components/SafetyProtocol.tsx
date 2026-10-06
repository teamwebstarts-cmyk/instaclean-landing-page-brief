import React from 'react';
import { ShieldAlert, ArrowRight, Eye, ClipboardCheck, Award } from 'lucide-react';

interface SafetyProtocolProps {
  onRequestDemo: () => void;
}

export const SafetyProtocol: React.FC<SafetyProtocolProps> = ({ onRequestDemo }) => {
  const protocolPhases = [
    {
      step: 'PHASE 01',
      title: 'Preliminary Site Assessment',
      icon: Eye,
      objective: 'Verify equipment suitability before any chemical application',
      checklist: [
        'Enclosure integrity, ventilation, and ambient relative humidity audit',
        'Preliminary thermographic infrared (IR) scan of busbar joints',
        'Voltage confirmation and enclosure clearance check'
      ]
    },
    {
      step: 'PHASE 02',
      title: 'Trained Personnel & Static Grounding',
      icon: ShieldAlert,
      objective: 'Maintain total electrical boundary isolation',
      checklist: [
        'Executed exclusively by certified Trinetra industrial specialists',
        'Certified Arc Flash protective clothing, face shields & dielectric boots',
        'Static grounding of delivery apparatus to station earth ground'
      ]
    },
    {
      step: 'PHASE 03',
      title: 'Controlled Directional Decontamination',
      icon: Award,
      objective: 'Flushing contamination away from sensitive contacts',
      checklist: [
        'Calibrated non-conductive pressurized stream targeting creepage paths',
        'Systematic top-to-bottom flush with particulate collection trays',
        'Continuous observation of line behavior during application'
      ]
    },
    {
      step: 'PHASE 04',
      title: 'Verification & Formal Engineering Handover',
      icon: ClipboardCheck,
      objective: 'Documented validation of restored insulation resistance',
      checklist: [
        'Confirmation of rapid flash evaporation and 100% surface dryness',
        'Post-treatment Insulation Resistance (megger) verification',
        'Comprehensive before/after engineering documentation report'
      ]
    }
  ];

  return (
    <section id="safety" className="w-full bg-[#F5F8F9] py-16 lg:py-24 border-b border-[#DCE5EA]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 xl:px-0">
        
        {/* Section Header */}
        <div className="max-w-[780px] mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#007C83]" />
            <span className="text-[12px] leading-[18px] font-semibold tracking-[1.6px] uppercase text-[#007C83] font-mono-tech">
              SAFETY GOVERNANCE & EXECUTION
            </span>
          </div>

          <h2 className="text-[#102A43] font-bold text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.18] lg:leading-[50px] tracking-[-0.7px] lg:tracking-[-1.4px] mb-5">
            Live cleaning is a trained industrial service, never a DIY procedure.
          </h2>

          <p className="text-[#425466] text-[16px] lg:text-[17px] leading-[26px] lg:leading-[28px]">
            Energized electrical equipment demands uncompromising safety standards. InstaClean™ application on live infrastructure is performed exclusively by trained, certified Trinetra service specialists following strict standard operating protocols.
          </p>
        </div>

        {/* 4-Phase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {protocolPhases.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-[14px] border border-[#DCE5EA] shadow-card-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-tech text-[11px] font-bold text-[#007C83] bg-[#EAF6F5] px-2.5 py-1 rounded">
                      {phase.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#F5F8F9] border border-[#DCE5EA] flex items-center justify-center text-[#102A43]">
                      <Icon className="w-4 h-4 text-[#102A43]" />
                    </div>
                  </div>

                  <h3 className="text-[17px] font-bold text-[#102A43] mb-2">
                    {phase.title}
                  </h3>

                  <p className="text-[12px] font-mono-tech text-[#607285] mb-4 pb-3 border-b border-[#F0F4F7]">
                    {phase.objective}
                  </p>

                  <ul className="space-y-2.5">
                    {phase.checklist.map((item, i) => (
                      <li key={i} className="text-[12px] leading-[18px] text-[#425466] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#007C83] flex-shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F0F4F7] text-[10px] font-mono-tech text-[#607285] uppercase">
                  Trinetra Quality Standard
                </div>
              </div>
            );
          })}
        </div>

        {/* Action & Consultation Card */}
        <div className="p-6 lg:p-8 rounded-[16px] bg-white border border-[#DCE5EA] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-[700px]">
            <h3 className="text-[20px] font-bold text-[#102A43] mb-2">
              Schedule a Technical Site Assessment for Your Facility
            </h3>
            <p className="text-[14px] leading-[22px] text-[#425466]">
              A Trinetra reliability engineer will inspect your equipment enclosures, review single-line diagrams, verify enclosure clearances, and present a risk-assessed decontamination proposal.
            </p>
          </div>

          <button
            onClick={onRequestDemo}
            className="h-[52px] px-6 rounded-[10px] bg-[#102A43] hover:bg-[#173C59] text-white text-[14px] font-semibold transition-all shadow-sm flex items-center gap-2.5 flex-shrink-0 cursor-pointer"
          >
            <span>Request Site Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
