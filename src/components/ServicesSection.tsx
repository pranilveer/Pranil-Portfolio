"use client";

import React, { useState, useEffect, useCallback } from "react";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  chips: string[];
  icon: React.ReactNode;
  art: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    id: "full-stack",
    title: "Full-Stack Apps",
    desc: "Responsive products from interface to server, built on clean, testable architecture.",
    chips: ["Next.js", "React", "TypeScript", "Node.js"],
    icon: (
      <path
        d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        transform="scale(.9) translate(1,-2)"
      />
    ),
    art: (
      <>
        <g className="fl">
          <path d="M100 40l70 38-70 38-70-38z" fill="none" stroke="currentColor" strokeWidth="2" />
        </g>
        <g className="fl">
          <path d="M100 80l70 38-70 38-70-38z" fill="rgba(253,133,58,.15)" stroke="currentColor" strokeWidth="2" />
        </g>
        <g className="fl">
          <path d="M100 120l70 38-70 38-70-38z" fill="rgba(253,133,58,.3)" stroke="currentColor" strokeWidth="2" />
        </g>
      </>
    ),
  },
  {
    id: "api-backend",
    title: "API & Backend",
    desc: "Fast, secure endpoints and services that stay simple as they scale.",
    chips: ["REST", "Node.js", "Auth", "WebSockets"],
    icon: (
      <path
        d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    art: (
      <>
        <g className="ring">
          <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeDasharray="3 9" />
        </g>
        <path className="dash" d="M100 100L40 50M100 100L165 60M100 100L45 155M100 100L160 150" stroke="currentColor" strokeWidth="2" />
        <circle className="pls" cx="100" cy="100" r="16" fill="currentColor" />
        <g fill="currentColor">
          <circle cx="40" cy="50" r="8" />
          <circle cx="165" cy="60" r="8" />
          <circle cx="45" cy="155" r="8" />
          <circle cx="160" cy="150" r="8" />
        </g>
      </>
    ),
  },
  {
    id: "database-design",
    title: "Database Design",
    desc: "Modeling reliable data layers with MongoDB and PostgreSQL, including geospatial queries with PostGIS.",
    chips: ["MongoDB", "PostgreSQL", "PostGIS"],
    icon: (
      <>
        <ellipse cx="12" cy="6" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M4 6v12c0 1.7 3.6 3 8 3s8-1.300 8-3V6M4 12c0 1.700 3.600 3 8 3s8-1.300 8-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </>
    ),
    art: (
      <>
        <g className="ring r2">
          <ellipse cx="100" cy="100" rx="92" ry="30" fill="none" stroke="currentColor" strokeOpacity="0.4" />
        </g>
        <g className="fl">
          <path
            d="M45 55v90c0 14 25 25 55 25s55-11 55-25V55"
            fill="rgba(253,133,58,.12)"
            stroke="currentColor"
            strokeWidth="2"
          />
          <ellipse cx="100" cy="55" rx="55" ry="18" fill="rgba(253,133,58,.3)" stroke="currentColor" strokeWidth="2" />
          <path d="M45 85c0 12 25 22 55 22s55-10 55-22M45 115c0 12 25 22 55 22s55-10 55-22" fill="none" stroke="currentColor" strokeWidth="2" />
        </g>
        <circle className="pls" cx="100" cy="55" r="5" fill="#fff" />
      </>
    ),
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    desc: "Deploying and scaling applications on AWS with Docker, CI/CD pipelines and Vercel.",
    chips: ["AWS", "Docker", "CI/CD", "Vercel"],
    icon: (
      <path
        d="M7 18a4.500 4.500 0 010-9 6 6 0 0111.500 1.500A3.800 3.800 0 0117.500 18z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    ),
    art: (
      <>
        <g className="ring">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeDasharray="2 10" />
        </g>
        <path
          d="M55 135a28 28 0 010-56 38 38 0 0173-8 24 24 0 01-5 64z"
          fill="rgba(253,133,58,.15)"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none">
          <path className="rise" d="M70 170l6-8 6 8" />
          <path className="rise" d="M100 175l6-8 6 8" />
          <path className="rise" d="M130 170l6-8 6 8" />
        </g>
      </>
    ),
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    desc: "Shipping intelligent features powered by OpenAI APIs, OCR, vector search and semantic search.",
    chips: ["OpenAI API", "OCR", "Vector Search", "Semantic Search"],
    icon: (
      <path
        d="M12 3l1.800 5.200L19 10l-5.200 1.800L12 17l-1.800-5.200L5 10l5.200-1.800zM19 16l.8 2.200L22 19l-2.200.8L19 22l-.8-2.200L16 19l2.200-.8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
    art: (
      <>
        <g className="ring">
          <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeDasharray="4 8" />
          <circle cx="188" cy="100" r="6" fill="currentColor" />
        </g>
        <g className="ring r2">
          <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeOpacity="0.4" />
          <circle cx="100" cy="42" r="5" fill="#fff" />
        </g>
        <circle className="pls" cx="100" cy="100" r="26" fill="currentColor" />
        <path d="M100 80l5 15 15 5-15 5-5 15-5-15-15-5 15-5z" fill="#171717" />
      </>
    ),
  },
  {
    id: "maps-geospatial",
    title: "Maps & Geospatial",
    desc: "Location-aware features with live maps, radius search and spatial indexing.",
    chips: ["PostGIS", "Mapbox", "GeoJSON"],
    icon: (
      <>
        <path
          d="M12 21s7-6.200 7-11.500A7 7 0 005 9.500C5 14.800 12 21 12 21z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="9.500" r="2.500" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
    art: (
      <>
        <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeOpacity="0.5">
          <circle className="rip" cx="100" cy="150" r="60" />
          <circle className="rip" cx="100" cy="150" r="60" />
        </g>
        <ellipse cx="100" cy="150" rx="70" ry="20" fill="none" stroke="currentColor" strokeOpacity="0.35" />
        <g className="fl">
          <path
            d="M100 135S52 95 52 66a48 48 0 0196 0c0 29-48 69-48 69z"
            fill="rgba(253,133,58,.2)"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <circle cx="100" cy="66" r="16" fill="currentColor" />
        </g>
      </>
    ),
  },
];

const AUTO_ROTATE_TIME = 5000;

export default function ServicesSection() {
  const [cur, setCur] = useState(2);
  const [stopped, setStopped] = useState(false);
  const [fillKey, setFillKey] = useState(0);

  const selectIndex = useCallback((k: number, userInitiated = false) => {
    if (userInitiated) {
      setStopped(true);
    }
    setCur(k);
    setFillKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (stopped) return;
    const timer = setTimeout(() => {
      setCur((prev) => (prev + 1) % services.length);
      setFillKey((prev) => prev + 1);
    }, AUTO_ROTATE_TIME);

    return () => clearTimeout(timer);
  }, [cur, stopped]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const handleMouseEnter = (k: number) => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      selectIndex(k, true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, k: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      selectIndex(k, true);
    }
  };

  const renderTitle = (title: string) => {
    const lastSpace = title.lastIndexOf(" ");
    if (lastSpace === -1) {
      return <em>{title}</em>;
    }
    return (
      <>
        {title.slice(0, lastSpace + 1)}
        <em>{title.slice(lastSpace + 1)}</em>
      </>
    );
  };

  return (
    <div id="about" className="services-wrapper md:-mt-14">
      <div className="services-bg" />

      <section className="services-sec">
        <div className="services-head">
          <h2 aria-label="My Services">
            <span className="w">
              <span>My</span>
            </span>{" "}
            <span className="w">
              <span>Services</span>
            </span>
          </h2>
          <p>
            Building modern, scalable and maintainable products with a focus on clean
            architecture, performance and intelligent AI-powered features.
          </p>
        </div>

        <div className="services-rail" id="rail">
          {services.map((service, k) => {
            const isActive = k === cur;
            return (
              <div
                key={service.id}
                className={`services-p ${isActive ? "on" : ""}`}
                tabIndex={0}
                role="button"
                aria-label={service.title}
                aria-expanded={isActive}
                onClick={() => selectIndex(k, true)}
                onFocus={() => selectIndex(k, true)}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => handleMouseEnter(k)}
                onKeyDown={(e) => handleKeyDown(e, k)}
              >
                <svg className="services-ic" viewBox="0 0 24 24">
                  {service.icon}
                </svg>

                <div className="services-tag">
                  <b>{service.title}</b>
                </div>

                <div className="services-art">
                  <svg viewBox="0 0 200 200">{service.art}</svg>
                </div>

                <div className="services-body">
                  <h3>{renderTitle(service.title)}</h3>
                  <div className="services-foot">
                    <p>{service.desc}</p>
                    <div className="services-chips">
                      {service.chips.map((chip, j) => (
                        <span
                          key={chip}
                          style={{ "--i": j } as React.CSSProperties}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`services-bar ${stopped ? "stop" : ""}`}
          style={{ "--t": `${AUTO_ROTATE_TIME}ms` } as React.CSSProperties}
          id="bar"
        >
          {services.map((_, i) => (
            <i
              key={`${i}-${i === cur ? fillKey : "idle"}`}
              className={i === cur ? "on" : ""}
              onClick={() => selectIndex(i, true)}
              role="button"
              tabIndex={0}
              aria-label={`Select service ${services[i].title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  selectIndex(i, true);
                }
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
