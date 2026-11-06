import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, ShieldCheck, Download } from 'lucide-react';

interface SiteDemoSectionProps {
  initialVariant?: string;
}

export const SiteDemoSection: React.FC<SiteDemoSectionProps> = ({ initialVariant }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    company: '',
    location: '',
    industry: 'Pharmaceuticals & Healthcare',
    equipmentType: 'Motor Control Center (MCC) & Switchgear',
    urgency: 'Scheduled Reliability Assessment (Next 30-60 Days)',
    notes: initialVariant ? `Interested in evaluating InstaClean™ ${initialVariant} for our plant.` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate real network request
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const industries = [
    'Pharmaceuticals & Healthcare',
    'Power Generation (Thermal / Hydro / Solar)',
    'Automotive & Ancillary Manufacturing',
    'Railways, Metro & Traction Systems',
    'Steel, Metals & Heavy Forging',
    'Chemicals, Fertilizers & Refineries',
    'Data Centers & Mission Critical IT Facilities',
    'Cement & Mineral Processing',
    'FMCG, Food & Beverage Processing',
    'Other Continuous Industrial Manufacturing'
  ];

  const equipmentOptions = [
    'Motor Control Center (MCC) & PCC Switchgear',
    'High-Voltage Busbars & Enclosed Busducts',
    'Dry-Type Transformers & Bushings',
    'VFD Inverter Racks, PLC Cubicles & Relays',
    'Substation Circuit Breakers & Disconnects',
    'Complete Facility Substation Audit'
  ];

  return (
    <section id="contact" className="w-full bg-[#FFFFFF] py-16 lg:py-24 border-b border-[#DCE5EA]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 xl:px-0">
        
        {/* Section Header */}
        <div className="max-w-[780px] mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#007C83]" />
            <span className="text-[12px] leading-[18px] font-semibold tracking-[1.6px] uppercase text-[#007C83] font-mono-tech">
              PRIMARY CONVERSION
            </span>
          </div>

          <h2 className="text-[#102A43] font-bold text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.18] lg:leading-[50px] tracking-[-0.7px] lg:tracking-[-1.4px] mb-5">
            Request an on-site technical demonstration.
          </h2>

          <p className="text-[#425466] text-[16px] lg:text-[17px] leading-[26px] lg:leading-[28px]">
            Schedule an on-site evaluation by Trinetra technical specialists. We will inspect your critical panels, perform preliminary thermography, and conduct a controlled demonstration on your designated test equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F5F8F9] rounded-[20px] border border-[#DCE5EA] p-6 sm:p-8 lg:p-10 shadow-card-subtle">
            {submitted ? (
              <div className="py-10 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#EAF6F5] border border-[#007C83]/30 flex items-center justify-center text-[#007C83] mx-auto mb-5">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-[24px] font-bold text-[#102A43] mb-3">
                  Site Demo Request Registered
                </h3>
                <p className="text-[15px] leading-[24px] text-[#425466] max-w-[480px] mx-auto mb-6">
                  Thank you, <strong className="text-[#102A43]">{formData.fullName}</strong>. A Trinetra technical specialist will contact you within 24 business hours to review equipment parameters for <strong className="text-[#102A43]">{formData.company}</strong>.
                </p>

                <div className="p-4 rounded-xl bg-white border border-[#DCE5EA] max-w-[440px] mx-auto text-left mb-6 font-mono-tech text-[12px] space-y-2">
                  <div className="flex justify-between text-[#607285]">
                    <span>Target Equipment:</span>
                    <span className="text-[#102A43] font-semibold truncate max-w-[200px]">{formData.equipmentType}</span>
                  </div>
                  <div className="flex justify-between text-[#607285]">
                    <span>Facility Location:</span>
                    <span className="text-[#102A43] font-semibold">{formData.location || 'India'}</span>
                  </div>
                  <div className="flex justify-between text-[#607285]">
                    <span>Status:</span>
                    <span className="text-[#007C83] font-semibold">Scheduled for Engineering Review</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="h-11 px-5 rounded-lg bg-white border border-[#DCE5EA] text-[#102A43] hover:bg-[#F0F4F7] text-[13px] font-semibold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href="#evidence"
                    className="h-11 px-5 rounded-lg bg-[#007C83] text-white hover:bg-[#006369] text-[13px] font-semibold transition-colors flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Spec Sheet</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#102A43] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full h-12 px-3.5 rounded-[8px] bg-white border border-[#DCE5EA] text-[14px] text-[#102A43] focus:outline-none focus:border-[#007C83] focus:ring-1 focus:ring-[#007C83]"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#102A43] mb-1.5">
                      Official Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="e.g. r.sharma@company.com"
                      className="w-full h-12 px-3.5 rounded-[8px] bg-white border border-[#DCE5EA] text-[14px] text-[#102A43] focus:outline-none focus:border-[#007C83] focus:ring-1 focus:ring-[#007C83]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#102A43] mb-1.5">
                      Mobile / WhatsApp (+91) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98XXX XXXXX"
                      className="w-full h-12 px-3.5 rounded-[8px] bg-white border border-[#DCE5EA] text-[14px] text-[#102A43] focus:outline-none focus:border-[#007C83] focus:ring-1 focus:ring-[#007C83]"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#102A43] mb-1.5">
                      Company / Plant Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Industrial Works Ltd."
                      className="w-full h-12 px-3.5 rounded-[8px] bg-white border border-[#DCE5EA] text-[14px] text-[#102A43] focus:outline-none focus:border-[#007C83] focus:ring-1 focus:ring-[#007C83]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Facility Location */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#102A43] mb-1.5">
                      Plant Location (City, State) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Pune, Maharashtra"
                      className="w-full h-12 px-3.5 rounded-[8px] bg-white border border-[#DCE5EA] text-[14px] text-[#102A43] focus:outline-none focus:border-[#007C83] focus:ring-1 focus:ring-[#007C83]"
                    />
                  </div>

                  {/* Industry Sector */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#102A43] mb-1.5">
                      Industry Sector *
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full h-12 px-3.5 rounded-[8px] bg-white border border-[#DCE5EA] text-[14px] text-[#102A43] focus:outline-none focus:border-[#007C83] focus:ring-1 focus:ring-[#007C83]"
                    >
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Target Equipment */}
                <div>
                  <label className="block text-[13px] font-semibold text-[#102A43] mb-1.5">
                    Target Equipment for Demo / Trial *
                  </label>
                  <select
                    value={formData.equipmentType}
                    onChange={(e) => setFormData({ ...formData, equipmentType: e.target.value })}
                    className="w-full h-12 px-3.5 rounded-[8px] bg-white border border-[#DCE5EA] text-[14px] text-[#102A43] focus:outline-none focus:border-[#007C83] focus:ring-1 focus:ring-[#007C83]"
                  >
                    {equipmentOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-[13px] font-semibold text-[#102A43] mb-1.5">
                    Specific Contamination Challenge / Operational Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Describe voltage rating, ongoing thermal hotspots, carbon dust issues, or upcoming turnaround schedule..."
                    className="w-full p-3.5 rounded-[8px] bg-white border border-[#DCE5EA] text-[14px] text-[#102A43] focus:outline-none focus:border-[#007C83] focus:ring-1 focus:ring-[#007C83]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-[52px] rounded-[10px] bg-[#102A43] hover:bg-[#173C59] text-white text-[14px] font-semibold transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {submitting ? (
                    <span>Registering Site Request...</span>
                  ) : (
                    <>
                      <span>Submit Request for Site Demo</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[12px] text-[#607285] text-center pt-1">
                  Confidential commercial consultation. No spam. A senior technical engineer will coordinate directly.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Company Credentials & Direct Contact (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct Contact Card */}
            <div className="bg-[#FFFFFF] p-6 lg:p-8 rounded-[16px] border border-[#DCE5EA] shadow-card-subtle">
              <span className="font-mono-tech text-[11px] font-semibold text-[#007C83] uppercase tracking-wider block mb-2">
                DIRECT TECHNICAL HOTLINE
              </span>
              <h3 className="text-[20px] font-bold text-[#102A43] mb-4">
                Urgent Outage or Maintenance Support
              </h3>
              <p className="text-[14px] leading-[22px] text-[#425466] mb-6">
                Planning an upcoming shutdown or experiencing severe thermal tracking? Reach Trinetra’s application engineering desk directly:
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+919897577063"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#F5F8F9] hover:bg-[#EAF6F5] transition-colors border border-[#DCE5EA] group"
                >
                  <div className="w-10 h-10 rounded-md bg-white border border-[#DCE5EA] flex items-center justify-center text-[#102A43] group-hover:text-[#007C83]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono-tech text-[#607285]">TECHNICAL DESK</div>
                    <div className="text-[14px] font-bold text-[#102A43] group-hover:text-[#007C83]">+91 98975 77063</div>
                  </div>
                </a>

                <a
                  href="mailto:info@trichems.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#F5F8F9] hover:bg-[#EAF6F5] transition-colors border border-[#DCE5EA] group"
                >
                  <div className="w-10 h-10 rounded-md bg-white border border-[#DCE5EA] flex items-center justify-center text-[#102A43] group-hover:text-[#007C83]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono-tech text-[#607285]">TECHNICAL INQUIRY EMAIL</div>
                    <div className="text-[14px] font-bold text-[#102A43] group-hover:text-[#007C83]">info@trichems.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#F5F8F9] border border-[#DCE5EA]">
                  <div className="w-10 h-10 rounded-md bg-white border border-[#DCE5EA] flex items-center justify-center text-[#102A43] flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono-tech text-[#607285]">HEAD OFFICE & APPLICATION CENTER</div>
                    <div className="text-[13px] leading-[20px] text-[#102A43] font-medium">
                      Trinetra Industrial Solutions Pvt. Ltd.<br />
                      Globally available · India operations
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Assessment Scope Assurances */}
            <div className="p-6 rounded-[16px] bg-[#F5F8F9] border border-[#DCE5EA]">
              <h4 className="text-[15px] font-bold text-[#102A43] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#007C83]" />
                <span>What Happens During a Site Demo:</span>
              </h4>
              <ul className="space-y-2.5 text-[13px] leading-[20px] text-[#425466]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#007C83] mt-1.5 flex-shrink-0" />
                  <span>On-site enclosure safety review & air flow inspection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#007C83] mt-1.5 flex-shrink-0" />
                  <span>Thermographic thermal scan before and after test spray</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#007C83] mt-1.5 flex-shrink-0" />
                  <span>Insulation Resistance (megger) measurement documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#007C83] mt-1.5 flex-shrink-0" />
                  <span>Full written technical proposal and customized PPE plan</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
