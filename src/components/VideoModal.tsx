import React, { useEffect } from 'react';
import { ArrowRight, ExternalLink, Play, X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestDemo: () => void;
}

const youtubeChannelUrl = 'https://youtube.com/@fenrir_nova?si=5bN0HyYxz-QBOFcZ';
// Add the exact YouTube watch URL here once the client selects the field video.
const youtubeVideoId = '';

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onRequestDemo }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleKeyDown); };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#071522]/80 backdrop-blur-md animate-in fade-in duration-200" onMouseDown={onClose}>
      <div className="relative w-full max-w-[1080px] max-h-[94vh] overflow-y-auto rounded-2xl bg-white shadow-2xl border border-[#DCE5EA]" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between gap-4 px-5 sm:px-7 py-4 border-b border-[#DCE5EA]">
          <div><div className="flex items-center gap-2 text-[11px] font-semibold tracking-[1.5px] uppercase text-[#007C83] font-mono-tech"><span className="w-2 h-2 rounded-full bg-[#007C83]" /> Field application video</div><h2 className="mt-1 text-[18px] sm:text-[22px] font-semibold text-[#102A43]">In-situ electrical decontamination</h2></div>
          <button onClick={onClose} aria-label="Close video" className="w-9 h-9 rounded-full border border-[#DCE5EA] flex items-center justify-center text-[#425466] hover:bg-[#F5F8F9] hover:text-[#102A43]"><X className="w-4 h-4" /></button>
        </div>

        <div className="grid lg:grid-cols-[1.55fr_0.75fr] bg-[#102A43]">
          <div className="p-3 sm:p-5"><div className="relative aspect-video overflow-hidden rounded-xl bg-[#071522] border border-white/10">
            {youtubeVideoId ? <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`} title="In-situ electrical decontamination field video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : <>
              <img src="/images/insitu-decontamination-action.jpg" alt="Technician carrying out in-situ electrical decontamination" className="w-full h-full object-cover opacity-80" /><div className="absolute inset-0 bg-gradient-to-t from-[#071522]/90 via-[#071522]/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center"><a href={youtubeChannelUrl} target="_blank" rel="noreferrer" aria-label="Open Fenrir Nova YouTube channel" className="w-16 h-16 rounded-full bg-[#007C83] hover:bg-[#00969B] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-105"><Play className="w-7 h-7 fill-current ml-1" /></a></div>
              <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-4 text-white"><div><p className="text-[10px] font-mono-tech tracking-[1.2px] uppercase text-[#8DDEDA]">YouTube field video</p><p className="mt-1 text-[14px] sm:text-[16px] font-medium">Open the Fenrir Nova channel to watch the source video</p></div><ExternalLink className="w-4 h-4 shrink-0 text-[#8DDEDA]" /></div>
            </>}
          </div></div>

          <aside className="border-t lg:border-t-0 lg:border-l border-white/10 p-5 sm:p-6 text-white"><p className="text-[11px] font-mono-tech tracking-[1.3px] uppercase text-[#8DDEDA]">What to look for</p><div className="mt-5 space-y-4">{['Contaminant removal from live-adjacent assemblies', 'Controlled application around busbars and insulators', 'Inspection-led handover after cleaning'].map((item, index) => <div key={item} className="flex gap-3"><span className="w-6 h-6 shrink-0 rounded-full bg-white/10 text-[#8DDEDA] text-[11px] flex items-center justify-center font-mono-tech">0{index + 1}</span><p className="text-[13px] leading-5 text-white/80">{item}</p></div>)}</div><div className="mt-7 pt-5 border-t border-white/10"><p className="text-[12px] leading-5 text-white/60">The embedded player will appear here as soon as the exact YouTube video is selected.</p><a href={youtubeChannelUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-[#8DDEDA] hover:text-white">Browse channel <ExternalLink className="w-3.5 h-3.5" /></a></div></aside>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-5 sm:px-7 py-4 bg-[#F5F8F9] border-t border-[#DCE5EA]"><p className="text-[12px] leading-5 text-[#607285]">See the process, then discuss the right protocol for your electrical asset.</p><button onClick={() => { onClose(); onRequestDemo(); }} className="h-10 px-4 rounded-lg bg-[#102A43] hover:bg-[#173C59] text-white text-[12px] font-semibold flex items-center justify-center gap-2">Request a site demo <ArrowRight className="w-3.5 h-3.5" /></button></div>
      </div>
    </div>
  );
};
