import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

interface FinalCTAProps {
  onRequestDemo: () => void;
  onRequestDocs: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRequestDemo, onRequestDocs }) => {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 xl:px-0">
        
        {/* Contained Final CTA Panel in Electrical Navy (#102A43) */}
        <div className="relative rounded-[24px] bg-[#102A43] overflow-hidden p-8 sm:p-12 lg:p-16 text-white shadow-industrial border border-[#173C59]">
          
          {/* Subtle 32px technical grid pattern inside panel */}
          <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

          {/* Precision Continuity Line Motif flowing through the panel (stays outside text) */}
          <svg className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-40 hidden sm:block" viewBox="0 0 1100 400" fill="none">
            {/* Precision 1.5px deep teal path with right-angle bends & 4px circular terminals */}
            <path
              d="M 50 40 L 400 40 L 400 90 L 850 90 L 850 320 L 1050 320"
              stroke="#007C83"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="50" cy="40" r="4" fill="#007C83" />
            <circle cx="400" cy="40" r="3" fill="#007C83" />
            <circle cx="400" cy="90" r="3" fill="#007C83" />
            <circle cx="850" cy="90" r="3" fill="#007C83" />
            <circle cx="850" cy="320" r="3" fill="#007C83" />
            <circle cx="1050" cy="320" r="4" fill="#007C83" />

            {/* Second subtle parallel line */}
            <path
              d="M 750 20 L 950 20 L 950 180 L 1080 180"
              stroke="#007C83"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <circle cx="750" cy="20" r="3" fill="#007C83" />
            <circle cx="1080" cy="180" r="3" fill="#007C83" />
          </svg>

          {/* Panel Content (Centered & accessible) */}
          <div className="relative z-10 max-w-[760px] mx-auto text-center flex flex-col items-center">
            
            {/* Gold Rule & Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#B58B3A]" />
              <span className="text-[12px] leading-[18px] font-semibold tracking-[1.6px] uppercase text-[#EAF6F5] font-mono-tech">
                CONTINUITY ASSURANCE
              </span>
              <span className="w-6 h-[1.5px] bg-[#B58B3A]" />
            </div>

            {/* Headline with exact concept */}
            <h2 className="text-white font-bold text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.15] lg:leading-[54px] tracking-tight mb-5">
              Clean the contamination.<br />
              Keep the continuity.
            </h2>

            {/* Subtitle */}
            <p className="text-[#DCE5EA] text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] max-w-[620px] mb-8 font-normal">
              Eliminate conductive tracking, reduce thermal hotspot stress, and prevent costly uncommanded shutdowns with certified in-situ electrical decontamination.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto h-[52px] px-8 rounded-[10px] bg-white hover:bg-[#F5F8F9] text-[#102A43] text-[14px] leading-[20px] font-semibold transition-all duration-200 shadow-lg flex items-center justify-center gap-[10px] group cursor-pointer"
              >
                <span>Request a Site Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#102A43]" />
              </button>

              <button
                onClick={onRequestDocs}
                className="w-full sm:w-auto h-[52px] px-7 rounded-[10px] bg-transparent hover:bg-white/10 text-white border border-white/40 text-[14px] leading-[20px] font-semibold transition-all duration-200 flex items-center justify-center gap-[10px] cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#007C83]" />
                <span>Request Technical Documents</span>
              </button>
            </div>

            {/* Bottom note */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-[#DCE5EA]/80 font-mono-tech">
              <span>TRINETRA INDUSTRIAL SOLUTIONS</span>
              <span>•</span>
              <span>SERVING UTILITIES, MANUFACTURING & RAILWAYS</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
