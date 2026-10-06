import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface SiteDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVariant?: string;
}

export const SiteDemoModal: React.FC<SiteDemoModalProps> = ({ isOpen, onClose, defaultVariant }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    equipment: 'Motor Control Center (MCC) Busbars',
    notes: defaultVariant ? `Requesting site evaluation for InstaClean™ ${defaultVariant}.` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102A43]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-[560px] bg-white rounded-[20px] shadow-2xl border border-[#DCE5EA] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="h-16 px-6 bg-[#FAFCFD] border-b border-[#DCE5EA] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#007C83]" />
            <span className="font-mono-tech text-[12px] font-bold text-[#102A43] uppercase tracking-wider">
              REQUEST AN ON-SITE TECHNICAL DEMO
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F5F8F9] hover:bg-[#EAF6F5] text-[#607285] hover:text-[#102A43] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[calc(90vh-64px)] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-[#EAF6F5] text-[#007C83] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-[20px] font-bold text-[#102A43] mb-2">
                Demonstration Request Received
              </h3>
              <p className="text-[14px] leading-[22px] text-[#425466] mb-6">
                Thank you. A Trinetra technical specialist will review your equipment parameters and contact you at <strong className="text-[#102A43]">{formData.email}</strong> within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="h-11 px-6 rounded-lg bg-[#102A43] text-white text-[13px] font-semibold hover:bg-[#173C59] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-[13px] text-[#607285] mb-2">
                Please enter your facility details. Our engineering team conducts controlled, non-disruptive trials on customer switchgear and MCC enclosures.
              </p>

              <div>
                <label className="block text-[12px] font-semibold text-[#102A43] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Amit Kulkarni"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full h-11 px-3 rounded-lg border border-[#DCE5EA] text-[14px] text-[#102A43] focus:border-[#007C83] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-semibold text-[#102A43] mb-1">
                    Official Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-3 rounded-lg border border-[#DCE5EA] text-[14px] text-[#102A43] focus:border-[#007C83] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#102A43] mb-1">
                    Phone / WhatsApp (+91) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 px-3 rounded-lg border border-[#DCE5EA] text-[14px] text-[#102A43] focus:border-[#007C83] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-semibold text-[#102A43] mb-1">
                    Company / Plant Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full h-11 px-3 rounded-lg border border-[#DCE5EA] text-[14px] text-[#102A43] focus:border-[#007C83] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#102A43] mb-1">
                    Plant Location (City, State) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pune, Maharashtra"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full h-11 px-3 rounded-lg border border-[#DCE5EA] text-[14px] text-[#102A43] focus:border-[#007C83] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#102A43] mb-1">
                  Target Equipment for Demo *
                </label>
                <select
                  value={formData.equipment}
                  onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                  className="w-full h-11 px-3 rounded-lg border border-[#DCE5EA] text-[14px] text-[#102A43] focus:border-[#007C83] focus:outline-none"
                >
                  <option value="Motor Control Center (MCC) Busbars">Motor Control Center (MCC) Busbars</option>
                  <option value="High-Voltage Switchgear & Busducts">High-Voltage Switchgear & Busducts</option>
                  <option value="Step-down Transformers & Bushings">Step-down Transformers & Bushings</option>
                  <option value="VFD Inverters & Automation PLC Racks">VFD Inverters & Automation PLC Racks</option>
                  <option value="Facility-wide Substation Audit">Facility-wide Substation Audit</option>
                </select>
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#102A43] mb-1">
                  Specific Operational Challenges
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention ongoing thermal tracking, dust accumulation, or planned outage window..."
                  className="w-full p-2.5 rounded-lg border border-[#DCE5EA] text-[13px] text-[#102A43] focus:border-[#007C83] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 rounded-lg bg-[#102A43] hover:bg-[#173C59] text-white text-[14px] font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  {submitting ? 'Submitting...' : 'Confirm Demo Request'}
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#607285] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#007C83]" />
                <span>Preliminary site assessment protocol applies before any live trial.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
