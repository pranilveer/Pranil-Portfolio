'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Sparkles, Upload, RotateCcw } from 'lucide-react';

// SVG Doodle Paths (48x48 viewBox)
const DOODLE_PATHS: Record<string, string> = {
  heart: "M24 40C8 28 6 16 14 11C19 8 23 11 24 15C25 11 29 8 34 11C42 16 40 28 24 40Z",
  star: "M24 5L29 18L43 19L32 28L36 42L24 34L12 42L16 28L5 19L19 18Z",
  spiral: "M24 24C24 20 28 20 28 24C28 30 20 30 20 24C20 16 32 16 32 24C32 36 16 36 16 24C16 12 36 12 36 24C36 40 12 40 12 24",
  cloud: "M12 34C4 34 4 22 13 23C13 12 28 10 31 20C42 18 44 34 34 34Z",
  planet: "M24 14A10 10 0 1 0 24 34A10 10 0 1 0 24 14M5 30C5 20 43 16 43 20C43 28 8 38 5 30",
  plane: "M4 22L44 6L32 42L22 28L4 22M22 28L44 6",
  bolt: "M28 4L10 28L22 28L18 44L38 18L25 18Z",
  smile: "M24 6A18 18 0 1 0 24 42A18 18 0 1 0 24 6M16 19L16 23M32 19L32 23M14 28C20 38 28 38 34 28",
  brackets: "M18 10L6 24L18 38M30 10L42 24L30 38M27 8L21 40",
  curly: "M18 6C10 6 18 22 8 24C18 26 10 42 18 42M30 6C38 6 30 22 40 24C30 26 38 42 30 42",
  cursor: "M10 6L10 38L18 30L24 43L30 40L24 28L35 28Z",
  term: "M6 10H42V38H6Z M12 18L19 24L12 30M23 31H34"
};

// [type, x%, y%, size, rotation, depth]
type DoodleTuple = [string, number, number, number, number, number];

const DOODLE_SETS: Record<'hire' | 'code', DoodleTuple[]> = {
  hire: [
    ["heart", 36, 2, 70, -8, 16],
    ["cloud", 66, 10, 90, 10, 22],
    ["spiral", 12, 18, 70, 0, 12],
    ["star", 8, 40, 40, 0, 26],
    ["heart", 3, 56, 80, -10, 18],
    ["star", 72, 38, 64, 12, 24],
    ["planet", 86, 48, 76, 0, 20],
    ["plane", 88, 72, 62, -8, 28],
    ["smile", 20, 62, 52, 12, 14],
    ["bolt", 76, 22, 44, 18, 30],
    ["heart", 82, 60, 40, 10, 10],
    ["spiral", 56, 2, 50, 0, 12]
  ],
  code: [
    ["brackets", 12, 18, 90, -8, 18],
    ["curly", 72, 8, 86, 8, 22],
    ["term", 6, 48, 92, -6, 14],
    ["cursor", 84, 44, 64, 14, 28],
    ["bolt", 34, 4, 56, -12, 24],
    ["star", 90, 70, 44, 0, 20],
    ["brackets", 76, 64, 64, 10, 12],
    ["curly", 3, 72, 60, 6, 26],
    ["term", 60, 0, 70, -10, 16],
    ["star", 22, 56, 36, 0, 30]
  ]
};

const HIRE_COLORS = ['#5B3FB5', '#FD853A', '#E0457B', '#1FA97A'];

interface HeroImageEffectProps {
  onModeChange?: (mode: 'code' | 'hire' | null) => void;
  showChaosBar?: boolean;
}

export default function HeroImageEffect({
  onModeChange,
  showChaosBar = true,
}: HeroImageEffectProps) {
  const [mode, setMode] = useState<'code' | 'hire' | null>(null);
  const [chaos, setChaos] = useState<'1' | '2' | '3'>('2');
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [pillPos, setPillPos] = useState<'portfolio' | 'hire'>('portfolio');

  const stageRef = useRef<HTMLDivElement>(null);
  const hireGroupRef = useRef<HTMLDivElement>(null);
  const codeGroupRef = useRef<HTMLDivElement>(null);
  const hireBtnRef = useRef<HTMLButtonElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Measure and align doodle origins to avatar center so doodles burst outward
  const updateGroupOffsets = (groupEl: HTMLDivElement | null) => {
    if (!groupEl || !stageRef.current) return;
    const stageRect = stageRef.current.getBoundingClientRect();
    const centerX = stageRect.width / 2;
    const centerY = stageRect.height * 0.55;

    const items = groupEl.querySelectorAll<HTMLDivElement>('.hero-doodle-p');
    items.forEach((p) => {
      const x = p.offsetLeft;
      const y = p.offsetTop;
      const d = p.firstElementChild as HTMLElement | null;
      if (d) {
        d.style.setProperty('--dx', `${centerX - x - 30}px`);
        d.style.setProperty('--dy', `${centerY - y}px`);
      }
    });
  };

  const updateAllOffsets = () => {
    if (hireGroupRef.current) updateGroupOffsets(hireGroupRef.current);
    if (codeGroupRef.current) updateGroupOffsets(codeGroupRef.current);
  };

  useEffect(() => {
    updateAllOffsets();
    window.addEventListener('resize', updateAllOffsets);
    return () => window.removeEventListener('resize', updateAllOffsets);
  }, []);

  // Pointer Parallax Tracking
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    stageRef.current.style.setProperty('--mx', String(mx));
    stageRef.current.style.setProperty('--my', String(my));
  };

  const handlePointerLeave = () => {
    if (!stageRef.current) return;
    stageRef.current.style.setProperty('--mx', '0');
    stageRef.current.style.setProperty('--my', '0');
  };

  // Confetti Physics Cannon
  const fireConfetti = () => {
    if (typeof document === 'undefined') return;
    const btn = hireBtnRef.current;
    const r = btn ? btn.getBoundingClientRect() : null;
    const cx = r ? r.left + r.width / 2 : window.innerWidth / 2;
    const cy = r ? r.top : window.innerHeight / 2;

    const countMap: Record<'1' | '2' | '3', number> = { '1': 14, '2': 28, '3': 46 };
    const n = countMap[chaos];
    const colors = ['#FD853A', '#5B3FB5', '#E0457B', '#1FA97A', '#FFD23F'];

    for (let i = 0; i < n; i++) {
      const el = document.createElement('i');
      el.className = 'hero-confetti';
      el.style.left = `${cx}px`;
      el.style.top = `${cy}px`;
      el.style.backgroundColor = colors[i % colors.length];
      document.body.appendChild(el);

      const angle = -Math.PI / 2 + (Math.random() - 0.5) * 2.4;
      const velocity = 120 + Math.random() * 230;
      const destX = Math.cos(angle) * velocity;
      const destY = Math.sin(angle) * velocity + 160;
      const rot = Math.random() * 900;
      const duration = 900 + Math.random() * 650;

      const anim = el.animate(
        [
          { transform: 'translate(0, 0) rotate(0deg) scale(1)', opacity: 1 },
          { transform: `translate(${destX}px, ${destY}px) rotate(${rot}deg) scale(0.6)`, opacity: 0 }
        ],
        { duration, easing: 'cubic-bezier(0.2, 0.7, 0.4, 1)' }
      );
      anim.onfinish = () => el.remove();
    }
  };

  const switchMode = (m: 'code' | 'hire' | null) => {
    if (m === mode) return;
    setMode(m);
    onModeChange?.(m);
    if (m === 'hire') {
      setPillPos('hire');
      if (hireGroupRef.current) updateGroupOffsets(hireGroupRef.current);
      fireConfetti();
    } else if (m === 'code') {
      setPillPos('portfolio');
      if (codeGroupRef.current) updateGroupOffsets(codeGroupRef.current);
    }
  };

  const handleIdle = () => {
    if (mode) {
      setMode(null);
      onModeChange?.(null);
    }
  };

  const scrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhoto(url);
    }
  };

  return (
    <div
      className={`relative w-full flex flex-col items-center justify-center ${
        mode === 'hire' ? 'on-hire' : mode === 'code' ? 'on-code' : ''
      }`}
      data-chaos={chaos}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Interactive Stage (Backdrop Circle + Doodles + Avatar + Dock) */}
      <div ref={stageRef} className="hero-stage" id="stage">
        
        {/* Animated Circle (glow & expanding ripple rings on hire, spinning dashed ring on code) */}
        <div className="hero-circle" />

        {/* Doodles: HIRE SET */}
        <div
          ref={hireGroupRef}
          className={`hero-layer ${mode === 'hire' ? 'on' : ''}`}
          data-set="hire"
        >
          {DOODLE_SETS.hire.map(([t, x, y, s, r, dp], i) => (
            <div
              key={`hire-${i}`}
              className="hero-doodle-p"
              style={{ left: `${x}%`, top: `${y}%`, '--dp': dp } as React.CSSProperties}
            >
              <div
                className="hero-doodle-d"
                style={{
                  '--s': `${s}px`,
                  '--r': `${r}deg`,
                  '--dl': `${i * 55}ms`,
                  '--c': HIRE_COLORS[i % HIRE_COLORS.length]
                } as React.CSSProperties}
              >
                <svg viewBox="0 0 48 48">
                  <path pathLength="1" d={DOODLE_PATHS[t] || ''} />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Doodles: CODE SET */}
        <div
          ref={codeGroupRef}
          className={`hero-layer ${mode === 'code' ? 'on' : ''}`}
          data-set="code"
        >
          {DOODLE_SETS.code.map(([t, x, y, s, r, dp], i) => (
            <div
              key={`code-${i}`}
              className="hero-doodle-p"
              style={{ left: `${x}%`, top: `${y}%`, '--dp': dp } as React.CSSProperties}
            >
              <div
                className="hero-doodle-d"
                style={{
                  '--s': `${s}px`,
                  '--r': `${r}deg`,
                  '--dl': `${i * 55}ms`,
                  '--c': i % 2 ? 'var(--hero-or)' : 'var(--hero-pu)'
                } as React.CSSProperties}
              >
                <svg viewBox="0 0 48 48">
                  <path pathLength="1" d={DOODLE_PATHS[t] || ''} />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Person / Avatar with opposite 3D parallax */}
        <div className="hero-person" id="person">
          {customPhoto ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={customPhoto}
              alt="Pranil Veer"
              className="h-full w-auto object-contain rounded-full shadow-lg"
            />
          ) : (
            <Image
              src="/boy.svg"
              alt="Pranil Veer"
              width={430}
              height={430}
              priority
              className="h-full w-auto object-contain"
            />
          )}
        </div>

        {/* Floating Glassmorphism Dock (Dual Toggle) */}
        <div
          className="hero-dock"
          id="dock"
          onPointerLeave={handleIdle}
        >
          {/* Spring sliding pill */}
          <span
            className="hero-pill"
            style={{
              transform: pillPos === 'hire' ? 'translateX(100%)' : 'translateX(0)'
            }}
          />

          <button
            id="bPort"
            onPointerEnter={() => switchMode('code')}
            onFocus={() => switchMode('code')}
            onClick={() => {
              switchMode('code');
              scrollToSection('#projects');
            }}
            className="group"
            aria-label="View Portfolio projects"
          >
            Portfolio
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>

          <button
            ref={hireBtnRef}
            id="bHire"
            onPointerEnter={() => switchMode('hire')}
            onFocus={() => switchMode('hire')}
            onClick={() => {
              switchMode('hire');
              fireConfetti();
              scrollToSection('#contact');
            }}
            className="group"
            aria-label="Hire Pranil Veer"
          >
            Hire Me
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>

      {/* Interactive Chaos & Photo Controls Bar */}
      {showChaosBar && (
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mt-2 mb-4 text-xs text-[#667085]">
          <span className="flex items-center gap-1 font-medium text-[#344054]">
            <Sparkles size={14} className="text-[#FD853A]" />
            Chaos:
          </span>
          <button
            onClick={() => setChaos('1')}
            className={`px-3 py-1 rounded-full border text-xs font-medium transition-all ${
              chaos === '1'
                ? 'bg-[#FD853A] border-[#FD853A] text-white shadow-xs'
                : 'border-[#D0D5DD] text-[#344054] hover:bg-gray-100'
            }`}
          >
            Chill
          </button>
          <button
            onClick={() => setChaos('2')}
            className={`px-3 py-1 rounded-full border text-xs font-medium transition-all ${
              chaos === '2'
                ? 'bg-[#FD853A] border-[#FD853A] text-white shadow-xs'
                : 'border-[#D0D5DD] text-[#344054] hover:bg-gray-100'
            }`}
          >
            Crazy
          </button>
          <button
            onClick={() => setChaos('3')}
            className={`px-3 py-1 rounded-full border text-xs font-medium transition-all ${
              chaos === '3'
                ? 'bg-[#FD853A] border-[#FD853A] text-white shadow-xs'
                : 'border-[#D0D5DD] text-[#344054] hover:bg-gray-100'
            }`}
          >
            Insane
          </button>

          <span className="text-gray-300 mx-1">|</span>

          {/* Photo Customizer */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
            id="hero-photo-upload"
          />
          {customPhoto ? (
            <button
              onClick={() => setCustomPhoto(null)}
              className="flex items-center gap-1 px-3 py-1 rounded-full border border-red-300 text-red-600 hover:bg-red-50 text-xs font-medium transition-all"
            >
              <RotateCcw size={12} />
              Reset Avatar
            </button>
          ) : (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1 px-3 py-1 rounded-full border border-[#D0D5DD] text-[#344054] hover:bg-gray-100 text-xs font-medium transition-all"
            >
              <Upload size={12} />
              Use my photo
            </button>
          )}
        </div>
      )}
    </div>
  );
}
