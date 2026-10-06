import React from 'react';
import { ArrowRight, Play, CheckCircle2, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onRequestDemo: () => void;
  onWatchDemo: () => void;
  onRequestDocs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestDemo, onWatchDemo }) => {
  return (
    <section id="hero" className="w-full bg-white pt-8 lg:pt-10 pb-10 lg:pb-12 border-b border-[#DCE5EA]/60">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 xl:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-7 xl:gap-9 items-center">
          
          {/* Left Column: Text Content (max-w 540px) */}
          <div className="w-full max-w-[640px] flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#007C83]" />
              <span className="text-[12px] leading-[18px] font-semibold tracking-[1.6px] uppercase text-[#007C83]">
                INSTACLEAN™ BY TRINETRA
              </span>
            </div>

            <h1 className="text-[#102A43] font-bold text-[38px] sm:text-[46px] lg:text-[50px] xl:text-[56px] 2xl:text-[60px] leading-[1.08] tracking-[-1.2px] lg:tracking-[-2.2px] mb-5">
              Clean critical systems.<br className="hidden sm:inline" />
              <span className="text-[#007C83] xl:whitespace-nowrap">Keep operations moving.</span>
            </h1>

            <p className="text-[#425466] text-[16px] lg:text-[17px] leading-[26px] lg:leading-[28px] font-normal mb-7 max-w-[540px]">
              <strong className="text-[#102A43] font-semibold">InstaClean™</strong> removes dust, carbon, chemical residue, and moisture from sensitive electrical systems in-situ—with no abrasive grit and minimal disruption.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              {/* Primary: Request a Site Demo */}
              <button
                onClick={onRequestDemo}
                className="h-[52px] px-[22px] rounded-[10px] bg-[#102A43] hover:bg-[#173C59] text-white text-[14px] leading-[20px] font-semibold transition-all duration-200 shadow-[0_4px_16px_rgba(16,42,67,0.12)] flex items-center justify-center gap-[10px] group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#007C83]"
              >
                <span>Request a Site Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-white" />
              </button>

              {/* Secondary: Watch the Demo */}
              <button
                onClick={onWatchDemo}
                className="h-[52px] px-[22px] rounded-[10px] bg-white hover:bg-[#F5F8F9] text-[#102A43] border border-[#102A43] text-[14px] leading-[20px] font-semibold transition-all duration-200 flex items-center justify-center gap-[10px] group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#007C83]"
              >
                <div className="w-6 h-6 rounded-full bg-[#EAF6F5] flex items-center justify-center text-[#007C83] group-hover:scale-105 transition-transform">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch the Demo</span>
              </button>
            </div>

            {/* Operational Assurance & Contextual Standard */}
            <div className="pt-5 border-t border-[#DCE5EA] flex flex-wrap items-center gap-y-2 gap-x-5 text-[13px] leading-[20px] text-[#607285]">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#007C83] flex-shrink-0" />
                <span>Preliminary site assessment</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#007C83] flex-shrink-0" />
                <span>Zero conductive residue</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#007C83] flex-shrink-0" />
                <span>Trained industrial service</span>
              </div>
            </div>
          </div>

          {/* Right Column: Industrial in-situ service photograph */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[620px] aspect-[3/2] relative rounded-[20px] bg-[#102A43] border border-[#DCE5EA] shadow-industrial overflow-hidden group">
                <img
                  src="/images/hero-switchgear-technician.png"
                  alt="Technician inspecting high-voltage switchgear in an industrial facility"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#102A43]/85 via-[#102A43]/25 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
                  <div className="text-white">
                    <div className="text-[11px] font-mono-tech tracking-[1.4px] text-white/75 mb-1">IN-SITU ELECTRICAL CARE</div>
                    <div className="text-[17px] sm:text-[19px] font-semibold">Keep critical equipment online</div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/95 px-3 py-2 text-[11px] font-semibold text-[#102A43] shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-[#007C83]" />
                    <span>Zero conductive residue</span>
                  </div>
                </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};
