import { ImageResponse } from "next/og";
import { siteUrl } from "@/lib/site";

export const alt =
  "Pranil Veer — Full Stack Software Developer building production-grade React, Next.js, Node.js and AI products";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const skills = ["React.js", "Next.js", "TypeScript", "Node.js", "AI Integration"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#171717",
          padding: "72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "rgba(253, 133, 58, 0.22)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            left: -160,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "rgba(251, 101, 20, 0.14)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #FD853A 0%, #FB6514 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 38,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            PV
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#ffffff",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 4,
            }}
          >
            <span>PRANIL VEER</span>
            <span
              style={{
                color: "#98A2B3",
                fontSize: 18,
                fontWeight: 500,
                letterSpacing: 2,
                marginTop: 6,
              }}
            >
              PORTFOLIO
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
          }}
        >
          <span
            style={{
              color: "#FD853A",
              fontSize: 34,
              fontWeight: 600,
              marginBottom: 18,
            }}
          >
            Full Stack Software Developer
          </span>
          <span
            style={{
              color: "#ffffff",
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            I build products
            <br />
            people actually use.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {skills.map((skill) => (
              <div
                key={skill}
                style={{
                  display: "flex",
                  padding: "10px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  color: "#E4E7EC",
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                {skill}
              </div>
            ))}
          </div>
          <span style={{ color: "#98A2B3", fontSize: 22, fontWeight: 500 }}>
            {new URL(siteUrl).host}
          </span>
        </div>
      </div>
    ),
    size
  );
}
