import React, { useState, useEffect } from 'react';
import { X, FileText, Download, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';

interface DocumentRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDocCode?: string;
}

export const DocumentRequestModal: React.FC<DocumentRequestModalProps> = ({
  isOpen,
  onClose,
  selectedDocCode
}) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [selectedDocs, setSelectedDocs] = useState<string[]>([
    selectedDocCode || 'PDS-IC100-2024'
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (selectedDocCode && !selectedDocs.includes(selectedDocCode)) {
      setSelectedDocs(prev => [...prev, selectedDocCode]);
    }
  }, [selectedDocCode]);

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

  const toggleDoc = (code: string) => {
    if (selectedDocs.includes(code)) {
      if (selectedDocs.length > 1) {
        setSelectedDocs(selectedDocs.filter(d => d !== code));
      }
    } else {
      setSelectedDocs([...selectedDocs, code]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const docOptions = [
    { code: 'PDS-IC100-2024', name: 'InstaClean™ 100 Technical PDS (Energized Suitable)' },
    { code: 'PDS-IC200-2024', name: 'InstaClean™ 200 Technical PDS (Non-Flammable)' },
    { code: 'PDS-IC050-2024', name: 'InstaClean™ 50 Technical PDS (Power-Off Degreaser)' },
    { code: 'SDS-GHS-IC100', name: 'InstaClean™ 100 Safety Data Sheet (GHS/ISO 11014)' },
    { code: 'SDS-GHS-IC200', name: 'InstaClean™ 200 Safety Data Sheet (GHS/ISO 11014)' },
    { code: 'LAB-IR-BENCH-01', name: 'High-Voltage Dielectric Benchmark Logs (Report Extracts)' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102A43]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-[580px] bg-white rounded-[20px] shadow-2xl border border-[#DCE5EA] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="h-16 px-6 bg-[#FAFCFD] border-b border-[#DCE5EA] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#007C83]" />
            <span className="font-mono-tech text-[12px] font-bold text-[#102A43] uppercase tracking-wider">
              TECHNICAL DOCUMENTATION ACCESS
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F5F8F9] hover:bg-[#EAF6F5] text-[#607285] hover:text-[#102A43] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 max-h-[calc(90vh-64px)] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-[#EAF6F5] text-[#007C83] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-[20px] font-bold text-[#102A43] mb-2">
                Technical Dossier Pack Dispatched
              </h3>
              <p className="text-[14px] leading-[22px] text-[#425466] mb-6">
                Direct download links for the {selectedDocs.length} requested technical sheets have been transmitted to <strong className="text-[#102A43]">{email}</strong>.
              </p>

              <div className="p-4 rounded-xl bg-[#F5F8F9] border border-[#DCE5EA] text-left mb-6 font-mono-tech text-[11px] space-y-1.5">
                <div className="text-[#607285] uppercase mb-1">Direct Download Links Generated:</div>
                {selectedDocs.map((code) => (
                  <div key={code} className="flex items-center justify-between text-[#102A43]">
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#007C83]" />
                      <span>{code}.pdf</span>
                    </span>
                    <span className="text-[#007C83] font-semibold hover:underline cursor-pointer">
                      [Download Now]
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={onClose}
                className="h-11 px-6 rounded-lg bg-[#102A43] text-white text-[13px] font-semibold hover:bg-[#173C59] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-[13px] text-[#607285] mb-3">
                Select the technical data sheets and test logs required for your plant engineering or procurement review:
              </p>

              {/* Doc Selection Checkboxes */}
              <div className="space-y-2 border border-[#DCE5EA] rounded-xl p-3 bg-[#FAFCFD]">
                <span className="text-[11px] font-mono-tech uppercase font-bold text-[#607285] block mb-1">
                  Select Documents to Receive:
                </span>
                {docOptions.map((doc) => {
                  const isChecked = selectedDocs.includes(doc.code);
                  return (
                    <label
                      key={doc.code}
                      className={`flex items-start gap-2.5 p-2 rounded-lg text-[13px] cursor-pointer transition-colors ${
                        isChecked ? 'bg-white border border-[#007C83]/40' : 'hover:bg-white/60'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleDoc(doc.code)}
                        className="mt-0.5 rounded text-[#007C83] focus:ring-[#007C83]"
                      />
                      <div className="flex-1">
                        <span className="font-semibold text-[#102A43]">{doc.name}</span>
                        <span className="block font-mono-tech text-[10px] text-[#607285]">{doc.code}</span>
                      </div>
                    </label>
                  );
                })}
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[12px] font-semibold text-[#102A43] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-[#DCE5EA] text-[13px] text-[#102A43] focus:border-[#007C83] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#102A43] mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Plant / Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-[#DCE5EA] text-[13px] text-[#102A43] focus:border-[#007C83] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#102A43] mb-1">
                  Work Email (for instant document transmission) *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="engineer@plant-name.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-10 pl-9 pr-3 rounded-lg border border-[#DCE5EA] text-[13px] text-[#102A43] focus:border-[#007C83] focus:outline-none"
                  />
                  <Mail className="w-4 h-4 text-[#607285] absolute left-3 top-3" />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-11 rounded-lg bg-[#102A43] hover:bg-[#173C59] text-white text-[13px] font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>{submitting ? 'Generating Links...' : 'Send Technical Documents'}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#607285] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#007C83]" />
                <span>Authorized manufacturer technical specifications conforming to GHS formatting.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
