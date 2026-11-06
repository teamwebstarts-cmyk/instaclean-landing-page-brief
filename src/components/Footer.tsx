import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#FFFFFF] border-t border-[#DCE5EA] pt-16 pb-12 text-[#425466]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 xl:px-0">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#DCE5EA]">
          
          {/* Company Identity (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="mb-5">
                <img
                  src="/images/trinetra-brand-logo.jpg"
                  alt="Trinetra Industrial Solutions — Solutions Today for a Stronger Tomorrow"
                  className="w-[180px] max-h-[120px] object-contain object-left"
                />
              </div>

              <p className="text-[14px] leading-[22px] text-[#425466] mb-5">
                Specialized in-situ electrical decontamination solutions and plant reliability engineering. Preserving electrical continuity for continuous manufacturing, power generation, and transportation infrastructure across India.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[12px] font-mono-tech text-[#007C83] bg-[#EAF6F5] p-2.5 rounded-lg border border-[#007C83]/20 self-start">
              <Shield className="w-4 h-4" />
              <span>Certified Industrial Protocol Standard</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[14px] font-bold text-[#102A43] uppercase tracking-wider font-mono-tech mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a href="#hero" className="hover:text-[#007C83] transition-colors">Overview</a>
              </li>
              <li>
                <a href="#technology" className="hover:text-[#007C83] transition-colors">Contamination Threat</a>
              </li>
              <li>
                <a href="#demo" className="hover:text-[#007C83] transition-colors">Interactive Simulator</a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#007C83] transition-colors">Product Matrix</a>
              </li>
              <li>
                <a href="#evidence" className="hover:text-[#007C83] transition-colors">Technical Evidence</a>
              </li>
              <li>
                <a href="#safety" className="hover:text-[#007C83] transition-colors">Safety Standard</a>
              </li>
            </ul>
          </div>

          {/* Product Range (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[14px] font-bold text-[#102A43] uppercase tracking-wider font-mono-tech mb-4">
              InstaClean™ Formulations
            </h4>
            <ul className="space-y-3 text-[13px]">
              <li className="p-2 rounded bg-[#F5F8F9] border border-[#DCE5EA]">
                <div className="font-bold text-[#102A43]">InstaClean™ 100</div>
                <div className="text-[11px] text-[#607285]">Energized in-situ cleaning (subject to assessment)</div>
              </li>
              <li className="p-2 rounded bg-[#F5F8F9] border border-[#DCE5EA]">
                <div className="font-bold text-[#102A43]">InstaClean™ 200</div>
                <div className="text-[11px] text-[#607285]">Non-flammable formulation for confined spaces</div>
              </li>
              <li className="p-2 rounded bg-[#FDF4EB] border border-[#A65A16]/20">
                <div className="font-bold text-[#A65A16]">InstaClean™ 50</div>
                <div className="text-[11px] text-[#607285]">Strictly power-off heavy industrial degreaser</div>
              </li>
            </ul>
          </div>

          {/* Contact & Support (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[14px] font-bold text-[#102A43] uppercase tracking-wider font-mono-tech mb-4">
              Contact & Inquiry
            </h4>
            <div className="space-y-3 text-[13px]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#007C83] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Trinetra Industrial Solutions Pvt. Ltd.</strong><br />
                  Globally available · India operations
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#007C83] flex-shrink-0" />
                <a href="tel:+919897577063" className="hover:text-[#007C83] transition-colors">
                  +91 98975 77063
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#007C83] flex-shrink-0" />
                <a href="mailto:info@trichems.com" className="hover:text-[#007C83] transition-colors">
                  info@trichems.com / sales@trichems.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Mandatory Engineering & Regulatory Disclaimer */}
        <div className="py-6 border-b border-[#DCE5EA] text-[12px] leading-[19px] text-[#607285]">
          <p className="mb-2">
            <strong className="text-[#102A43] font-semibold">Technical & Regulatory Disclaimer:</strong> InstaClean™ is a specialized industrial product brand of Trinetra Industrial Solutions Pvt. Ltd. Numeric dielectric breakdown values (e.g., 50 kV / 30 kV) cited in technical literature reflect laboratory bench tests conducted under controlled IEC/ASTM conditions and do not represent universal safe operating limits for all field equipment. All live and energized electrical applications require preliminary technical assessment and must be executed by trained Trinetra service personnel with certified PPE. InstaClean™ 50 is strictly for power-off equipment.
          </p>
          <p>
            Customer names cited (Cipla, Tata Motors, RDSO, Mahagenco) represent client-supplied industrial references; attributable documentary extracts are maintained for verified relationships.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#607285]">
          <div>
            © {new Date().getFullYear()} Trinetra Industrial Solutions Pvt. Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono-tech text-[12px]">CLEAN THE CONTAMINATION. KEEP THE CONTINUITY.</span>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-[#F5F8F9] hover:bg-[#EAF6F5] text-[#102A43] hover:text-[#007C83] border border-[#DCE5EA] flex items-center justify-center transition-colors"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
