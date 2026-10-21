import React from "react";
import { AbsoluteFill, Easing, interpolate, random, useCurrentFrame } from "remotion";
import { COLORS, Grain, Snow, Vignette } from "../shared";

const lineStyle = (frame: number, start: number): React.CSSProperties => ({
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: 68,
  lineHeight: 1.3,
  color: COLORS.frost,
  textAlign: "center",
  textShadow: "0 4px 30px rgba(0,0,0,0.6)",
  opacity: interpolate(frame, [start, start + 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }),
  translate: interpolate(frame, [start, start + 25], ["0px 24px", "0px 0px"], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  }),
});

export const MemoryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "radial-gradient(circle at 50% 40%, #6b4a2e 0%, #24170f 55%, #0b0806 100%)" }}>
      {/* Warm firelight bokeh — the memory of raising her by the hearth */}
      {new Array(18).fill(0).map((_, i) => {
        const r = (k: string) => random(`bokeh-${i}-${k}`);
        const d = 80 + r("d") * 220;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: r("x") * 1080 - d / 2,
              top: r("y") * 1920 - d / 2 - frame * (0.4 + r("s")),
              width: d,
              height: d,
              borderRadius: "50%",
              background: i % 3 === 0 ? COLORS.ice : COLORS.gold,
              opacity: 0.12 + r("o") * 0.18,
              filter: "blur(18px)",
            }}
          />
        );
      })}
      <Snow count={60} seed="memory" size={1.6} />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", gap: 40, padding: 80 }}>
        <div style={lineStyle(frame, 4)}>He raised her from an egg.</div>
        <div style={{ ...lineStyle(frame, 34), color: COLORS.ice, fontStyle: "italic" }}>
          Twenty winters later…
        </div>
      </AbsoluteFill>
      <Vignette />
      <Grain />
    </AbsoluteFill>
  );
};
