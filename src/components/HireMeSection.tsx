"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { hireMe, stats } from "@/data/data";

const HOLD_RATE = 0.018;
const RELEASE_RATE = 0.04;
const HOLD_MESSAGES = ["Keep holding...", "Almost there...", "Yes!!"];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface ConfettiParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  rotation: number;
}

const titleWords = [
  { text: "Why", highlight: false },
  { text: "Hire", highlight: true },
  { text: "me", highlight: true },
  { text: "?", highlight: false },
];

export default function HireMeSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const netRef = useRef<HTMLCanvasElement>(null);
  const fxRef = useRef<HTMLCanvasElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const holdButtonRef = useRef<HTMLButtonElement>(null);
  const fireConfettiRef = useRef<(() => void) | null>(null);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const contactTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const focusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const holdState = useRef({
    progress: 0,
    holding: false,
    done: false,
    raf: 0,
  });
  const tickRef = useRef<() => void>(() => {});

  const [dark, setDark] = useState(false);
  const [hired, setHired] = useState(false);
  const [toast, setToast] = useState(false);
  const [hint, setHint] = useState(hireMe.hint);

  useEffect(() => {
    const hero = heroRef.current;
    const canvas = netRef.current;
    if (!hero || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let raf = 0;
    let particles: Particle[] = [];
    let orbX = 0;
    let orbY = 0;
    let targetX = -9999;
    let targetY = -9999;
    const pointer = { x: -9999, y: -9999 };

    const resize = () => {
      width = canvas.width = hero.clientWidth;
      height = canvas.height = hero.clientHeight;
      const count = Math.max(
        24,
        Math.min(90, Math.floor((width * height) / (reducedMotion ? 18000 : 14000))),
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }));
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(hero);

    const onPointerMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (Math.abs(orbX - x) > 400 || Math.abs(orbY - y) > 400) {
        orbX = x;
        orbY = y;
      }
      pointer.x = x;
      pointer.y = y;
      targetX = x;
      targetY = y;
      hero.style.setProperty("--mx", `${x}px`);
      hero.style.setProperty("--my", `${y}px`);

      const orb = orbRef.current;
      if (orb) {
        orb.classList.add("visible");
        orb.classList.toggle(
          "big",
          Boolean(
            (event.target as HTMLElement | null)?.closest(
              "button, .hire-photo, .hire-stat, .hire-chip, a",
            ),
          ),
        );
      }
    };

    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
      targetX = -9999;
      targetY = -9999;
      orbRef.current?.classList.remove("visible", "big");
    };

    hero.addEventListener("pointermove", onPointerMove);
    hero.addEventListener("pointerleave", onPointerLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      orbX += (targetX - orbX) * 0.18;
      orbY += (targetY - orbY) * 0.18;
      if (orbRef.current) {
        orbRef.current.style.transform = `translate(${orbX}px, ${orbY}px)`;
      }

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 140 && distance > 0) {
          particle.vx += (dx / distance) * 0.12;
          particle.vy += (dy / distance) * 0.12;
        }

        particle.vx *= 0.985;
        particle.vy *= 0.985;
        particle.x += particle.vx + (Math.random() - 0.5) * 0.1;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        ctx.fillStyle = "rgba(253, 133, 58, 0.55)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const other = particles[j];
          const linkDistance = Math.hypot(
            particle.x - other.x,
            particle.y - other.y,
          );
          if (linkDistance < 110) {
            ctx.strokeStyle = `rgba(253, 133, 58, ${
              0.22 * (1 - linkDistance / 110)
            })`;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        if (distance < 160) {
          ctx.strokeStyle = `rgba(253, 133, 58, ${
            0.5 * (1 - distance / 160)
          })`;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }

      if (!reducedMotion) {
        raf = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  useEffect(() => {
    const canvas = fxRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    let confetti: ConfettiParticle[] = [];
    const timers: number[] = [];
    const colors = ["#FD853A", "#FFA45C", "#FFD08A", "#1B2238", "#FFFFFF", "#27C4A8"];

    const fit = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    fit();
    window.addEventListener("resize", fit);

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      confetti = confetti.filter((particle) => particle.life-- > 0);

      confetti.forEach((particle) => {
        particle.vy += 0.28;
        particle.vx *= 0.99;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += 0.2;

        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = Math.min(1, particle.life / 30);
        ctx.fillRect(
          -particle.size,
          -particle.size / 2,
          particle.size * 2,
          particle.size,
        );
        ctx.restore();
      });

      if (confetti.length > 0) {
        raf = requestAnimationFrame(loop);
      } else {
        running = false;
        ctx.clearRect(0, 0, width, height);
      }
    };

    const boom = (x: number, y: number, count = 90) => {
      for (let i = 0; i < count; i += 1) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 3 + Math.random() * 9;
        confetti.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 4,
          size: 3 + Math.random() * 5,
          color: colors[i % colors.length],
          life: 90 + Math.random() * 40,
          rotation: Math.random() * Math.PI * 2,
        });
      }

      if (!running) {
        running = true;
        loop();
      }
    };

    fireConfettiRef.current = () => {
      for (let i = 0; i < 7; i += 1) {
        timers.push(
          window.setTimeout(() => {
            boom(
              width * (0.15 + Math.random() * 0.7),
              height * (0.15 + Math.random() * 0.45),
              110,
            );
          }, i * 260),
        );
      }
    };

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach((timer) => clearTimeout(timer));
      window.removeEventListener("resize", fit);
      fireConfettiRef.current = null;
    };
  }, []);

  useEffect(() => {
    const state = holdState.current;
    return () => {
      cancelAnimationFrame(state.raf);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
      if (contactTimerRef.current) clearTimeout(contactTimerRef.current);
      if (focusTimerRef.current) clearTimeout(focusTimerRef.current);
    };
  }, []);

  tickRef.current = () => {
    const state = holdState.current;
    if (state.done) return;

    state.progress = Math.max(
      0,
      Math.min(
        1,
        state.progress + (state.holding ? HOLD_RATE : -RELEASE_RATE),
      ),
    );

    const button = holdButtonRef.current;
    if (button) {
      button.style.setProperty("--p", state.progress.toFixed(3));
      button.classList.toggle("near", state.progress > 0.5);
    }

    if (state.holding) {
      setHint(HOLD_MESSAGES[Math.min(2, Math.floor(state.progress * 3))]);
    }

    if (state.progress >= 1) {
      state.done = true;
      state.holding = false;
      setHired(true);
      setToast(true);
      setHint(hireMe.hiredHint);
      fireConfettiRef.current?.();

      if (contactTimerRef.current) clearTimeout(contactTimerRef.current);
      contactTimerRef.current = setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });

        if (focusTimerRef.current) clearTimeout(focusTimerRef.current);
        focusTimerRef.current = setTimeout(() => {
          document
            .getElementById("contact-email")
            ?.focus({ preventScroll: true });
        }, 750);
      }, 600);

      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
      resetTimerRef.current = setTimeout(() => {
        const current = holdState.current;
        current.done = false;
        current.holding = false;
        current.progress = 0;

        const currentButton = holdButtonRef.current;
        if (currentButton) {
          currentButton.style.setProperty("--p", "0");
          currentButton.classList.remove("near");
        }

        setHired(false);
        setToast(false);
        setHint(hireMe.hint);
      }, 4200);
      return;
    }

    if (state.holding || state.progress > 0) {
      state.raf = requestAnimationFrame(() => tickRef.current());
    }
  };

  const startHold = useCallback(() => {
    const state = holdState.current;
    if (state.done) return;
    state.holding = true;
    cancelAnimationFrame(state.raf);
    state.raf = requestAnimationFrame(() => tickRef.current());
  }, []);

  const stopHold = useCallback(() => {
    const state = holdState.current;
    state.holding = false;
    if (!state.done) setHint(hireMe.hint);
  }, []);

  const onHoldKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if ((event.key === "Enter" || event.key === " ") && !event.repeat) {
      event.preventDefault();
      startHold();
    }
  };

  const onHoldKeyUp = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      stopHold();
    }
  };

  const onStatPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    card.style.transform = `rotateY(${(x - 0.5) * 16}deg) rotateX(${
      (0.5 - y) * 16
    }deg) translateZ(10px)`;
    card.style.setProperty("--gx", `${x * 100}%`);
    card.style.setProperty("--gy", `${y * 100}%`);
  };

  const onStatPointerLeave = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = "";
  };

  return (
    <section
      id="hire"
      className={`hire-section${dark ? " hire-dark" : ""}`}
    >
      <div className="hire-hero" ref={heroRef}>
        <canvas ref={netRef} className="hire-net" aria-hidden="true" />

        <div className="hire-stage">
          <div className="hire-blob" aria-hidden="true" />

          <div className="hire-ring" aria-hidden="true">
            {hireMe.chips.map((chip, index) => (
              <span className={`hire-chip k${index + 1}`} key={chip}>
                <i>{chip.charAt(0)}</i>
                {chip}
              </span>
            ))}
          </div>

          <div className="hire-photo">
            <Image
              src="/Property 1=Default3.svg"
              alt="Pranil Veer"
              width={1024}
              height={1536}
              className="hire-img hire-img-default"
              priority
            />
            <Image
              src="/Property 1=Variant2.svg"
              alt=""
              aria-hidden="true"
              width={624}
              height={680}
              className="hire-img hire-img-hover"
            />
            <span className="hire-pop">Open to work</span>
          </div>
        </div>

        <div className="hire-copy">
          <h1 className="hire-title">
            {titleWords.map((word, index) => (
              <span
                className="hire-word"
                key={`${word.text}-${index}`}
                style={{ "--i": index } as CSSProperties}
              >
                <span
                  className={
                    word.highlight ? "hire-hl hire-shine" : undefined
                  }
                >
                  {word.text}
                </span>
              </span>
            ))}
          </h1>

          <p className="hire-lead">{hireMe.lead}</p>

          <div className="hire-stats">
            {stats.map((stat, index) => (
              <div
                className="hire-stat"
                key={stat.label}
                style={{ "--i": index } as CSSProperties}
                onPointerMove={onStatPointerMove}
                onPointerLeave={onStatPointerLeave}
              >
                <div className="hire-num">{stat.title}</div>
                <div className="hire-lab">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="hire-cta">
            <button
              ref={holdButtonRef}
              type="button"
              className="hire-hold"
              aria-label="Press and hold to hire me, or press Enter"
              onPointerDown={startHold}
              onPointerUp={stopHold}
              onPointerLeave={stopHold}
              onPointerCancel={stopHold}
              onKeyDown={onHoldKeyDown}
              onKeyUp={onHoldKeyUp}
            >
              <b>{hired ? hireMe.hiredLabel : hireMe.holdLabel}</b>
            </button>

            <span className="hire-hint" aria-live="polite">
              {hint}
            </span>

            <button
              type="button"
              className="hire-ghost"
              aria-pressed={dark}
              onClick={() => setDark((value) => !value)}
            >
              {dark ? "Switch to light" : "Switch theme"}
            </button>
          </div>
        </div>

        <div className="hire-orb" ref={orbRef} aria-hidden="true" />
      </div>

      <div
        className={`hire-toast${toast ? " on" : ""}`}
        role="status"
        aria-live="polite"
      >
        {hireMe.toast}
      </div>

      <canvas ref={fxRef} className="hire-fx" aria-hidden="true" />
    </section>
  );
}
