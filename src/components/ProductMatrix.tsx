import React, { useState } from 'react';
import { AlertTriangle, FileText, CheckCircle2, Info, ArrowRight, Zap } from 'lucide-react';

interface ProductMatrixProps {
  onRequestDemo: () => void;
  onRequestDocs: (variant?: '100' | '200' | '50') => void;
}

export const ProductMatrix: React.FC<ProductMatrixProps> = ({ onRequestDemo, onRequestDocs }) => {
  const [selectedVariant, setSelectedVariant] = useState<'100' | '200' | '50'>('100');

  const variants = [
    {
      id: '100' as const,
      name: 'InstaClean™ 100',
      badge: 'SPECIALIZED ENERGIZED DECONTAMINATION',
      badgeColor: 'bg-[#EAF6F5] text-[#007C83] border-[#007C83]/30',
      tagline: 'For suitable energized electrical equipment, subject to technical assessment.',
      dielectricValue: '50 kV Benchmark',
      dielectricContext: 'Dielectric breakdown test benchmark cited in supplied laboratory documentation. Requires on-site verification before energized work.',
      flammability: 'Combustible (SDS Classified)',
      flammabilityNote: 'Requires trained industrial personnel and strict hot-work/live-application protocol.',
      evaporation: 'Rapid flash evaporation',
      residue: 'Zero conductive residue',
      powerState: 'Energized (Subject to Site Assessment)',
      isPowerOffOnly: false,
      primaryApplications: [
        'Motor Control Center (MCC) busbars and feeder cubicles',
        'Distribution switchgear and disconnect switches',
        'Step-down transformer bushings & external tap changers',
        'Low & medium voltage industrial power panels'
      ],
      safetyStandard: 'Trained Trinetra service team with certified live-work PPE.'
    },
    {
      id: '200' as const,
      name: 'InstaClean™ 200',
      badge: 'NON-FLAMMABLE & NON-CONDUCTIVE',
      badgeColor: 'bg-[#F0F4F7] text-[#102A43] border-[#102A43]/20',
      tagline: 'Specialized non-flammable formulation for zero fire risk and confined environments.',
      dielectricValue: '30 kV Benchmark',
      dielectricContext: 'Laboratory dielectric test benchmark cited in supplied documentation. Distinct formulation from 100.',
      flammability: 'Non-Flammable',
      flammabilityNote: 'Engineered for environments demanding strict zero-combustibility compliance.',
      evaporation: 'Controlled high-volatility evaporation',
      residue: 'Zero conductive residue',
      powerState: 'Energized / Confined Area Compatible',
      isPowerOffOnly: false,
      primaryApplications: [
        'Confined substations, basements, and tunnel switchrooms',
        'Hazardous process zones & chemical plant MCCs',
        'Underground mining electrical distribution boxes',
        'Enclosures requiring strict non-flammable safety clearance'
      ],
      safetyStandard: 'Trained Trinetra specialists adhering to enclosed space & ventilation rules.'
    },
    {
      id: '50' as const,
      name: 'InstaClean™ 50',
      badge: 'POWER-OFF CLEANING ONLY',
      badgeColor: 'bg-[#FDF4EB] text-[#A65A16] border-[#A65A16]/30',
      tagline: 'Heavy-duty degreaser and carbon-sludge dissolver for isolated offline equipment.',
      dielectricValue: 'Offline Maintenance Formulation',
      dielectricContext: 'Strictly for de-energized, locked-out equipment during planned overhauls.',
      flammability: 'Heavy Industrial Solvent',
      flammabilityNote: 'Never apply to energized circuits or near active electrical arcs.',
      evaporation: 'Controlled degreasing soak & rinse',
      residue: 'Clean wipe finish; zero abrasive grit',
      powerState: 'POWER-OFF EQUIPMENT ONLY',
      isPowerOffOnly: true,
      primaryApplications: [
        'Turnaround overhauls of dismantled motor stators & rotors',
        'Heavy carbon and oxidized grease removal on offline breakers',
        'Transformer external radiator fins and oil spill cleanup',
        'Isolated mechanical linkages and busbar assembly restoration'
      ],
      safetyStandard: 'Complete Lock-Out / Tag-Out (LOTO) mandatory before application.'
    }
  ];

  return (
    <section id="products" className="w-full bg-white py-16 lg:py-24 border-b border-[#DCE5EA]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 xl:px-0">
        
        {/* Section Header */}
        <div className="max-w-[760px] mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#007C83]" />
            <span className="text-[12px] leading-[18px] font-semibold tracking-[1.6px] uppercase text-[#007C83] font-mono-tech">
              FORMULATION MATRIX & VARIANTS
            </span>
          </div>

          <h2 className="text-[#102A43] font-bold text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.18] lg:leading-[50px] tracking-[-0.7px] lg:tracking-[-1.4px] mb-5">
            Engineered variants for distinct industrial operational states.
          </h2>

          <p className="text-[#425466] text-[16px] lg:text-[17px] leading-[26px] lg:leading-[28px]">
            Every industrial environment has specific voltage requirements, ventilation constraints, and shutdown windows. InstaClean™ provides targeted chemistries with rigorously demarcated operating boundaries.
          </p>
        </div>

        {/* Mandatory Contextual Safety Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-[12px] bg-[#F5F8F9] border border-[#DCE5EA] flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-white border border-[#DCE5EA] flex items-center justify-center text-[#102A43] flex-shrink-0 mt-0.5">
            <Info className="w-4 h-4 text-[#007C83]" />
          </div>
          <div className="text-[13px] leading-[22px] text-[#425466]">
            <strong className="text-[#102A43] font-semibold">Mandatory Engineering Protocol:</strong> Live electrical cleaning is a trained industrial service executed with site technical assessments and certified PPE. It is not an unguided DIY maintenance procedure. Dielectric breakdown values cited in technical sheets represent laboratory benchmarks, not universal safe operating limits. All energized applications require preliminary assessment by Trinetra technical teams.
          </div>
        </div>

        {/* Product Canisters & Family Presentation */}
        <div className="mb-14 rounded-[16px] border border-[#DCE5EA] bg-[#F5F8F9] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-6 lg:p-8">
            <span className="font-mono-tech text-[11px] font-semibold text-[#007C83] uppercase tracking-wider block mb-2">
              THE INSTACLEAN™ FAMILY
            </span>
            <h3 className="text-[24px] font-bold text-[#102A43] mb-3">
              Precision Chemical Engineering for High-Value Assets
            </h3>
            <p className="text-[14px] leading-[22px] text-[#425466] mb-6">
              Supplied in industrial aerosol canisters with calibrated directional nozzles, as well as bulk drums for high-volume substation maintenance programs. Zero chlorinated solvents, zero ozone-depleting substances, zero abrasive particulates.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onRequestDocs()}
                className="h-[44px] px-4 rounded-[8px] bg-white border border-[#102A43] text-[#102A43] hover:bg-[#F0F4F7] text-[13px] font-semibold transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#007C83]" />
                <span>Request Technical PDS / SDS</span>
              </button>
              <button
                onClick={onRequestDemo}
                className="h-[44px] px-4 rounded-[8px] bg-[#102A43] hover:bg-[#173C59] text-white text-[13px] font-semibold transition-colors flex items-center gap-2"
              >
                <span>Book Site Evaluation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-6 h-[260px] lg:h-[320px] bg-white border-t lg:border-t-0 lg:border-l border-[#DCE5EA] relative overflow-hidden">
            <img
              src="/images/instaclean-product-family.jpg"
              alt="InstaClean 100, 200, and 50 industrial family canisters"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-mono-tech text-[#607285] border border-[#DCE5EA]">
              INSTACLEAN™ INDUSTRIAL PACKAGING
            </div>
          </div>
        </div>

        {/* 3 Variant Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {variants.map((v) => {
            const isSelected = selectedVariant === v.id;
            return (
              <div
                key={v.id}
                onClick={() => setSelectedVariant(v.id)}
                className={`rounded-[16px] border p-6 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#007C83] shadow-lg ring-1 ring-[#007C83]'
                    : 'bg-[#FAFCFD] hover:bg-white border-[#DCE5EA]'
                }`}
              >
                <div>
                  {/* Variant Badge & Power State Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className={`text-[10px] font-mono-tech font-bold px-2.5 py-1 rounded border ${v.badgeColor}`}>
                      {v.badge}
                    </span>
                    {v.isPowerOffOnly ? (
                      <span className="text-[10px] font-mono-tech font-bold text-[#A65A16] bg-[#FDF4EB] px-2 py-0.5 rounded flex items-center gap-1 border border-[#A65A16]/20">
                        <AlertTriangle className="w-3 h-3 text-[#A65A16]" />
                        OFFLINE ONLY
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono-tech font-bold text-[#007C83] bg-[#EAF6F5] px-2 py-0.5 rounded flex items-center gap-1 border border-[#007C83]/20">
                        <Zap className="w-3 h-3 text-[#007C83]" />
                        ENERGIZED SUITABLE
                      </span>
                    )}
                  </div>

                  {/* Title & Headline */}
                  <h3 className="text-[22px] font-bold text-[#102A43] mb-2">
                    {v.name}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-[#425466] mb-5">
                    {v.tagline}
                  </p>

                  {/* Key Technical Metric Badges */}
                  <div className="space-y-3 pt-4 border-t border-[#DCE5EA]/80 mb-6 font-mono-tech text-[12px]">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[#607285]">DIELECTRIC:</span>
                      <span className="text-[#102A43] font-bold text-right">{v.dielectricValue}</span>
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[#607285]">FLAMMABILITY:</span>
                      <span className={`font-bold text-right ${v.flammability === 'Non-Flammable' ? 'text-[#007C83]' : 'text-[#A65A16]'}`}>
                        {v.flammability}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[#607285]">EVAPORATION:</span>
                      <span className="text-[#102A43] font-medium text-right">{v.evaporation}</span>
                    </div>
                  </div>

                  {/* Key Applications List */}
                  <div className="mb-6">
                    <span className="text-[11px] font-mono-tech uppercase font-semibold text-[#607285] block mb-2.5">
                      Target Equipment Scope:
                    </span>
                    <ul className="space-y-2">
                      {v.primaryApplications.map((app, i) => (
                        <li key={i} className="text-[13px] leading-[18px] text-[#425466] flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#007C83] flex-shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-[#DCE5EA] flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRequestDocs(v.id);
                    }}
                    className="text-[13px] font-semibold text-[#007C83] hover:text-[#005a60] flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Download {v.id} PDS</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRequestDemo();
                    }}
                    className="h-9 px-3 rounded-md bg-[#102A43] hover:bg-[#173C59] text-white text-[12px] font-semibold transition-colors flex items-center gap-1"
                  >
                    <span>Request Trial</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Engineering Comparison Table */}
        <div className="bg-white rounded-[16px] border border-[#DCE5EA] shadow-card-subtle overflow-hidden">
          <div className="p-5 sm:p-6 bg-[#FAFCFD] border-b border-[#DCE5EA] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-mono-tech text-[11px] font-semibold text-[#007C83] uppercase tracking-wider block mb-1">
                SIDE-BY-SIDE ENGINEERING MATRIX
              </span>
              <h3 className="text-[18px] font-bold text-[#102A43]">
                Variant Specification & Safe Application Boundaries
              </h3>
            </div>
            <span className="text-[11px] font-mono-tech text-[#607285] bg-white px-2.5 py-1 rounded border border-[#DCE5EA] self-start sm:self-auto">
              ACCORDING TO SUPPLIED REPORT DATA
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[13px]">
              <thead>
                <tr className="bg-[#F5F8F9] border-b border-[#DCE5EA] font-mono-tech text-[11px] text-[#607285]">
                  <th className="py-3.5 px-5 font-semibold">PARAMETER</th>
                  <th className="py-3.5 px-5 font-semibold text-[#007C83]">INSTACLEAN™ 100</th>
                  <th className="py-3.5 px-5 font-semibold text-[#102A43]">INSTACLEAN™ 200</th>
                  <th className="py-3.5 px-5 font-semibold text-[#A65A16]">INSTACLEAN™ 50</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE5EA] text-[#425466]">
                <tr>
                  <td className="py-3.5 px-5 font-semibold text-[#102A43]">Operating Voltage State</td>
                  <td className="py-3.5 px-5 font-medium text-[#007C83]">Energized (Subject to assessment)</td>
                  <td className="py-3.5 px-5 font-medium text-[#102A43]">Energized / High Safety Spec</td>
                  <td className="py-3.5 px-5 font-bold text-[#A65A16]">STRICTLY POWER-OFF ONLY</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-5 font-semibold text-[#102A43]">Dielectric Test Benchmark</td>
                  <td className="py-3.5 px-5 font-mono-tech font-bold text-[#102A43]">50 kV (Laboratory test)</td>
                  <td className="py-3.5 px-5 font-mono-tech font-bold text-[#102A43]">30 kV (Laboratory test)</td>
                  <td className="py-3.5 px-5 font-mono-tech text-[#607285]">N/A (De-energized use)</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-5 font-semibold text-[#102A43]">Flammability Classification</td>
                  <td className="py-3.5 px-5">
                    <span className="font-semibold text-[#A65A16]">Combustible</span> (Trained protocol)
                  </td>
                  <td className="py-3.5 px-5">
                    <span className="font-semibold text-[#007C83]">Non-Flammable</span>
                  </td>
                  <td className="py-3.5 px-5 text-[#607285]">
                    Standard solvent (Power-off)
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-5 font-semibold text-[#102A43]">Flash Evaporation Profile</td>
                  <td className="py-3.5 px-5 font-mono-tech text-[#102A43]">Fast (&lt; 3-5 mins)</td>
                  <td className="py-3.5 px-5 font-mono-tech text-[#102A43]">Controlled (&lt; 5-8 mins)</td>
                  <td className="py-3.5 px-5 font-mono-tech text-[#607285]">Heavy soak & flush</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-5 font-semibold text-[#102A43]">Residue Characteristics</td>
                  <td className="py-3.5 px-5 text-[#007C83] font-medium">Zero conductive residue</td>
                  <td className="py-3.5 px-5 text-[#007C83] font-medium">Zero residue / ultra-pure</td>
                  <td className="py-3.5 px-5 text-[#607285]">Wipes clean; non-abrasive</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-5 font-semibold text-[#102A43]">Target Equipment</td>
                  <td className="py-3.5 px-5">Switchgear, MCC busbars, isolators</td>
                  <td className="py-3.5 px-5">Confined rooms, hazardous zones</td>
                  <td className="py-3.5 px-5">Turnaround overhauls, motors, stators</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-5 font-semibold text-[#102A43]">Application Procedure</td>
                  <td className="py-3.5 px-5 text-[#102A43]">Trained Trinetra technicians</td>
                  <td className="py-3.5 px-5 text-[#102A43]">Trained Trinetra technicians</td>
                  <td className="py-3.5 px-5 text-[#102A43]">Plant maintenance staff / LOTO</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-[#F5F8F9] border-t border-[#DCE5EA] flex items-center justify-between text-[11px] font-mono-tech text-[#607285]">
            <span>NOTE: Always consult current approved PDS & SDS prior to plant chemical handling.</span>
            <button
              onClick={() => onRequestDocs()}
              className="text-[#007C83] hover:underline font-semibold"
            >
              Request Document Pack →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
