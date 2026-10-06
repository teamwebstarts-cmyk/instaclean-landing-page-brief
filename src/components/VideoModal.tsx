import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, ArrowRight, Activity, Volume2, VolumeX } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestDemo: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onRequestDemo }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(12); // in seconds
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapterIndex, setActiveChapterIndex] = useState(1);

  const duration = 180; // 3 minutes total

  const chapters = [
    { title: 'The Contamination Threat', timestamp: 0, duration: 35, annotation: 'Micro-arcing and dust buildup across MCC busbars' },
    { title: 'Pre-Spray Diagnostics', timestamp: 35, duration: 45, annotation: 'Infrared thermography & baseline Megger IR test (1.8 MΩ)' },
    { title: 'In-Situ Calibrated Application', timestamp: 80, duration: 50, annotation: '40 cal/cm² Arc Flash suit & insulated directional wand' },
    { title: 'Controlled Flash Evaporation', timestamp: 130, duration: 30, annotation: 'Zero residue inspection on copper busbars' },
    { title: 'Handover & Clearance', timestamp: 160, duration: 20, annotation: 'Restored IR to >580 MΩ; nominal thermal drop' },
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && isPlaying) {
      timer = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isOpen, isPlaying, duration]);

  // Update active chapter based on currentTime
  useEffect(() => {
    const idx = chapters.findIndex((ch, i) => {
      const nextCh = chapters[i + 1];
      return currentTime >= ch.timestamp && (!nextCh || currentTime < nextCh.timestamp);
    });
    if (idx !== -1) setActiveChapterIndex(idx);
  }, [currentTime]);

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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const currentChapter = chapters[activeChapterIndex] || chapters[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#102A43]/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-[960px] bg-[#102A43] rounded-[20px] shadow-2xl border border-[#173C59] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="h-14 px-5 bg-[#0A1D2E] border-b border-[#173C59] flex items-center justify-between text-white flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#007C83] animate-pulse" />
            <span className="font-mono-tech text-[12px] font-semibold tracking-wider text-[#EAF6F5]">
              FIELD APPLICATION VIDEO DEMONSTRATION
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#173C59] hover:bg-[#204a6e] text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Canvas & Subtitles Area */}
        <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
          {/* Main Visual Frame (Switches dynamically per chapter) */}
          <img
            src="/images/insitu-decontamination-action.jpg"
            alt="Field application of InstaClean"
            className="w-full h-full object-cover opacity-90"
          />

          {/* Active Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Center Play/Pause button on canvas */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black/50 hover:bg-black/75 border border-white/30 text-white flex items-center justify-center transition-transform hover:scale-105 backdrop-blur-xs cursor-pointer z-10"
          >
            {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 fill-current ml-1" />}
          </button>

          {/* Top-left Chapter Stamp */}
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-xs border border-white/20 rounded-md px-3 py-1.5 text-white font-mono-tech text-[11px] flex items-center gap-2">
            <span className="text-[#007C83] font-bold">CH 0{activeChapterIndex + 1}</span>
            <span>•</span>
            <span className="font-semibold">{currentChapter.title}</span>
          </div>

          {/* Bottom Video Subtitle / Engineering Telemetry */}
          <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/20 rounded-xl p-3.5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 z-10">
            <div>
              <div className="text-[11px] font-mono-tech text-[#007C83] uppercase flex items-center gap-1.5 mb-0.5">
                <Activity className="w-3.5 h-3.5" />
                <span>PROCEDURAL STEP</span>
              </div>
              <div className="text-[13px] sm:text-[14px] font-medium leading-snug">
                {currentChapter.annotation}
              </div>
            </div>

            <div className="text-[11px] font-mono-tech text-[#DCE5EA] flex items-center gap-3 self-end sm:self-auto flex-shrink-0">
              <span className="bg-[#173C59] px-2 py-1 rounded">415V MCC BUSBAR DECONTAMINATION</span>
            </div>
          </div>
        </div>

        {/* Video Scrubber & Playback Controls */}
        <div className="p-4 bg-[#0A1D2E] border-t border-[#173C59] flex flex-col gap-3 flex-shrink-0">
          {/* Progress bar */}
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-[11px] text-[#DCE5EA]">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={(e) => setCurrentTime(Number(e.target.value))}
              className="w-full h-1.5 bg-[#173C59] rounded-lg appearance-none cursor-pointer accent-[#007C83]"
            />
            <span className="font-mono-tech text-[11px] text-[#607285]">
              {formatTime(duration)}
            </span>
          </div>

          {/* Playback Controls & Chapter Select */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white text-[13px]">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-lg bg-[#173C59] hover:bg-[#204a6e] transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              <button
                onClick={() => setCurrentTime(0)}
                className="p-2 rounded-lg bg-[#173C59] hover:bg-[#204a6e] transition-colors"
                title="Restart"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-lg bg-[#173C59] hover:bg-[#204a6e] transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <span className="hidden md:inline-block text-[12px] text-[#DCE5EA] font-mono-tech">
                Current Phase: {currentChapter.title}
              </span>
            </div>

            {/* CTA Trigger */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  onClose();
                  onRequestDemo();
                }}
                className="h-9 px-4 rounded-lg bg-[#007C83] hover:bg-[#006369] text-white text-[12px] font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>Request On-Site Trial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Chapter Jump Rail */}
        <div className="px-4 py-2.5 bg-[#071522] border-t border-[#173C59] flex items-center gap-2 overflow-x-auto text-[11px] font-mono-tech flex-shrink-0">
          <span className="text-[#607285] mr-1 flex-shrink-0">CHAPTERS:</span>
          {chapters.map((ch, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentTime(ch.timestamp);
                setIsPlaying(true);
              }}
              className={`px-2.5 py-1 rounded whitespace-nowrap transition-colors flex-shrink-0 ${
                activeChapterIndex === idx
                  ? 'bg-[#007C83] text-white font-bold'
                  : 'bg-[#102A43] text-[#DCE5EA] hover:bg-[#173C59]'
              }`}
            >
              0{idx + 1}. {ch.title}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
