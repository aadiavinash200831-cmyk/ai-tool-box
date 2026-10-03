"use client"; // Required for state, ref, and event handlers

import * as React from "react";
import { cn } from "@/lib/utils";

// --- PROPS INTERFACE ---
export interface InteractiveAINodeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  imageUrl: string;
  logoUrl?: string;
  icon?: React.ReactNode;
  title: string;
  category?: string;
  description: string;
  pricing: string;
  rating?: number;
  tags?: string[];
  onLaunch?: () => void;
  onDossier?: () => void;
  onAiExplain?: () => void;
}

// --- 3D PERSPECTIVE CARD WITH TOUCH GESTURE SUPPORT ---
export function InteractiveProductCard({
  className,
  imageUrl,
  logoUrl,
  icon,
  title,
  category,
  description,
  pricing,
  rating,
  tags,
  onLaunch,
  onDossier,
  onAiExplain,
  ...props
}: InteractiveAINodeCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [style, setStyle] = React.useState<React.CSSProperties>({});
  const [isInteracting, setIsInteracting] = React.useState(false);

  // Helper to compute 3D tilt coordinates
  const calculateTilt = (clientX: number, clientY: number, maxDeg = 10) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    // Clamped normalized offsets [-1, 1]
    const normX = Math.max(-1, Math.min(1, (x - width / 2) / (width / 2)));
    const normY = Math.max(-1, Math.min(1, (y - height / 2) / (height / 2)));

    const rotateX = normY * -maxDeg; // Inverted for natural depth tilt
    const rotateY = normX * maxDeg;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "transform 0.08s ease-out",
    });
  };

  // --- MOUSE HANDLERS ---
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    calculateTilt(e.clientX, e.clientY, 10);
  };

  const handleMouseEnter = () => {
    setIsInteracting(true);
  };

  const handleMouseLeave = () => {
    setIsInteracting(false);
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
    });
  };

  // --- TOUCH GESTURE HANDLERS (MOBILE & TABLET TILT) ---
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      setIsInteracting(true);
      const touch = e.touches[0];
      calculateTilt(touch.clientX, touch.clientY, 12);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      calculateTilt(touch.clientX, touch.clientY, 12);
    }
  };

  const handleTouchEnd = () => {
    setIsInteracting(false);
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      style={style}
      className={cn(
        "relative w-full max-w-[340px] aspect-[9/12] rounded-3xl bg-zinc-900/80 shadow-2xl",
        "transform-style-3d cursor-pointer select-none",
        "border border-cyan-500/20 hover:border-cyan-400/60 transition-colors duration-300",
        "touch-pan-y",
        className
      )}
      {...props}
    >
      {/* Background Image Layer (Depth -20px) */}
      <img
        src={imageUrl}
        alt={title}
        className={cn(
          "absolute inset-0 h-full w-full object-cover rounded-3xl transition-transform duration-500",
          isInteracting ? "scale-110" : "scale-100"
        )}
        style={{ transform: "translateZ(-20px)" }}
        loading="lazy"
      />

      {/* Cyberpunk Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 rounded-3xl" />

      {/* Holographic Edge Border on Hover */}
      <div 
        className={cn(
          "absolute inset-0 rounded-3xl border border-cyan-400/0 pointer-events-none transition-all duration-300",
          isInteracting && "border-cyan-400/50 shadow-[inset_0_0_20px_rgba(0,243,255,0.2)]"
        )} 
      />

      {/* Main 3D Floating Content Layer (Depth +40px) */}
      <div
        className="absolute inset-0 p-5 flex flex-col justify-between"
        style={{ transform: "translateZ(40px)" }}
      >
        {/* Top Floating Glassmorphism HUD Bar */}
        <div>
          <div className="flex items-start justify-between rounded-xl border border-white/10 bg-black/40 p-3.5 backdrop-blur-md shadow-lg">
            <div className="flex flex-col pr-2">
              {category && (
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 font-semibold uppercase mb-0.5">
                  {category}
                </span>
              )}
              <h3 className="text-lg font-bold text-white tracking-tight leading-tight">{title}</h3>
              <p className="text-xs text-zinc-300/80 line-clamp-2 mt-1">{description}</p>
            </div>
            
            {logoUrl ? (
              <img src={logoUrl} alt="Logo" className="h-6 w-6 object-contain flex-shrink-0 rounded-full" />
            ) : icon ? (
              <div className="flex-shrink-0 p-1.5 rounded-lg bg-white/10 backdrop-blur-sm">
                {icon}
              </div>
            ) : null}
          </div>

          {/* Floating Pricing / Rating Pill Tag */}
          <div className="flex items-center gap-2 mt-3">
            <div className="rounded-full bg-cyan-950/80 border border-cyan-400/30 px-3 py-1 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-md">
              {pricing}
            </div>
            {rating && (
              <div className="rounded-full bg-emerald-950/80 border border-emerald-400/30 px-2.5 py-1 text-xs font-mono font-bold text-emerald-300 backdrop-blur-md">
                ★ {rating}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Floating Interactive Cyber Actions */}
        <div className="mt-auto space-y-3">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="text-[10px] font-mono bg-black/50 border border-white/10 text-zinc-300 px-2 py-0.5 rounded-md">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Action Row */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {onLaunch && (
              <button
                onClick={(e) => { e.stopPropagation(); onLaunch(); }}
                className="w-full py-2 px-3 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-black font-mono text-xs font-bold border border-cyan-400/40 hover:border-cyan-400 shadow-md transition-all active:scale-95"
              >
                LAUNCH ↗
              </button>
            )}
            {onDossier && (
              <button
                onClick={(e) => { e.stopPropagation(); onDossier(); }}
                className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold border border-white/20 shadow-md transition-all active:scale-95"
              >
                DOSSIER ℹ
              </button>
            )}
            {onAiExplain && (
              <button
                onClick={(e) => { e.stopPropagation(); onAiExplain(); }}
                className="col-span-2 w-full py-1.5 px-3 rounded-lg bg-pink-500/20 hover:bg-pink-500 text-pink-300 hover:text-white font-mono text-xs font-bold border border-pink-400/40 hover:border-pink-400 shadow-md transition-all active:scale-95"
              >
                ⚡ EXPLAIN WITH AI
              </button>
            )}
          </div>

          {/* Status Telemetry Indicator Dots */}
          <div className="flex w-full justify-center gap-2 pt-1">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  index === 0 ? "bg-cyan-400 w-4 shadow-[0_0_8px_rgba(0,243,255,0.8)]" : "bg-white/25 w-1.5"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
