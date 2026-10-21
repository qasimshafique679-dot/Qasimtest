import React from "react";
import { AbsoluteFill, random, useCurrentFrame, useVideoConfig } from "remotion";

export const COLORS = {
  ice: "#9fd8ff",
  iceDeep: "#2b6fa8",
  frost: "#eaf6ff",
  gold: "#ffb45e",
  night: "#0b1a2e",
};

export const Snow: React.FC<{ count?: number; seed?: string; size?: number }> = ({
  count = 120,
  seed = "snow",
  size = 1,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {new Array(count).fill(0).map((_, i) => {
        const r = (k: string) => random(`${seed}-${i}-${k}`);
        const speed = 1.5 + r("s") * 3;
        const y = (r("y") * height + frame * speed) % (height + 40) - 20;
        const x = r("x") * width + Math.sin(frame / 25 + r("p") * 6) * 30 * r("w");
        const d = (2 + r("d") * 6) * size;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: d,
              height: d,
              borderRadius: "50%",
              background: "white",
              opacity: 0.35 + r("o") * 0.6,
              filter: d > 6 ? "blur(1.5px)" : undefined,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

export const Grain: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        opacity: 0.08,
        mixBlendMode: "overlay",
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' seed='${frame % 10}'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
      }}
    />
  );
};

export const Vignette: React.FC = () => (
  <AbsoluteFill
    style={{ background: "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.75) 100%)" }}
  />
);
