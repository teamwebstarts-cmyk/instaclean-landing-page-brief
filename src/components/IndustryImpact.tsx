import React from 'react';
import { ArrowUpRight, Clock3, Factory, ShieldAlert } from 'lucide-react';

const sources = {
  siemens: 'https://assets.new.siemens.com/siemens/assets/api/uuid%3A1b43afb5-2d07-47f7-9eb7-893fe7d0bc59/TCOD-2024_original.pdf',
  cea: 'https://cea.nic.in/wp-content/uploads/general/2025/Updated_GR_2025_merged_new.pdf',
  power: 'https://powermin.gov.in/sites/default/files/uploads/LS04082022_Eng.pdf',
};

export const IndustryImpact: React.FC = () => (
  <section id="industry-impact" className="w-full bg-[#F5F8F9] py-16 sm:py-20 border-y border-[#DCE5EA]">
    <div className="max-w-[1200px] mx-auto px-5 sm:px-8 xl:px-0">
      <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-16 items-start">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[1.5px] uppercase text-[#007C83] font-mono-tech">
            <span className="w-2 h-2 rounded-full bg-[#007C83]" /> Industry impact briefing
          </div>
          <h2 className="mt-4 text-[32px] sm:text-[40px] leading-[1.12] font-semibold tracking-[-1.2px] text-[#102A43]">
            When critical systems stop, the impact travels further.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[#607285]">
            A sourced snapshot of downtime and electrical safety. These figures describe different risks; none attributes a specific loss to contamination or to InstaClean.
          </p>
          <div className="mt-6 flex items-start gap-3 border-l-2 border-[#B58B3A] pl-4 text-[13px] leading-6 text-[#425466]">
            <ShieldAlert className="w-4 h-4 mt-1 shrink-0 text-[#A65A16]" />
            <p><strong className="text-[#102A43]">Claims checked:</strong> We could not verify the client-supplied Hero MotoCorp, JSW Steel, or ₹921 crore asset-loss figures from authoritative public sources, so they are not presented as established facts.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <article className="bg-white border border-[#DCE5EA] rounded-xl p-6 shadow-card-subtle">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[1.1px] uppercase text-[#007C83] font-mono-tech">
              <Clock3 className="w-4 h-4" /> Global downtime estimate
            </div>
            <p className="mt-5 text-[38px] leading-none font-semibold tracking-[-1.5px] text-[#102A43]">$1.4T</p>
            <p className="mt-3 text-[14px] leading-6 text-[#425466]">Estimated annual cost of unplanned downtime across the world’s 500 largest companies.</p>
            <p className="mt-3 text-[11px] leading-5 text-[#607285]">Siemens, 2024 report estimate; global, cross-industry—not an India-specific audited loss.</p>
            <a className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-[#007C83] hover:text-[#102A43]" href={sources.siemens} target="_blank" rel="noreferrer">Read Siemens report <ArrowUpRight className="w-3.5 h-3.5" /></a>
          </article>

          <article className="bg-white border border-[#DCE5EA] rounded-xl p-6 shadow-card-subtle">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[1.1px] uppercase text-[#007C83] font-mono-tech">
              <Factory className="w-4 h-4" /> India · electrical safety
            </div>
            <p className="mt-5 text-[38px] leading-none font-semibold tracking-[-1.5px] text-[#102A43]">5,594</p>
            <p className="mt-3 text-[14px] leading-6 text-[#425466]">Human-fatal electrical accidents reported in FY 2023–24.</p>
            <p className="mt-3 text-[11px] leading-5 text-[#607285]">CEA General Review 2025, based on information made available; all settings, not switchgear-specific.</p>
            <a className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-[#007C83] hover:text-[#102A43]" href={sources.cea} target="_blank" rel="noreferrer">Read CEA review <ArrowUpRight className="w-3.5 h-3.5" /></a>
          </article>

          <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl bg-[#102A43] px-5 py-4 text-white">
            <p className="text-[13px] leading-5 text-white/90"><strong className="text-white">Property-loss data:</strong> India’s Ministry of Power has stated that utilities do not report property loss due to electrical accidents.</p>
            <a className="shrink-0 inline-flex items-center gap-1 text-[12px] font-semibold text-[#8DDEDA] hover:text-white" href={sources.power} target="_blank" rel="noreferrer">Parliament answer <ArrowUpRight className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>
      <p className="mt-7 text-[10px] leading-5 text-[#607285]">Figures are shown with their original scope and source. Electrical-accident totals do not establish that industrial contamination caused those incidents.</p>
    </div>
  </section>
);
