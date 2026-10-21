import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { COLORS, Grain, Snow, Vignette } from "../shared";

const EYE = "M220 860 Q540 640 860 860 Q540 1040 220 860 Z";

export const EyeScene: React.FC = () => {
  const frame = useCurrentFrame();
  const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

  const tearY = interpolate(frame, [18, 62], [905, 1330], { ...clamp, easing: Easing.bezier(0.5, 0, 0.9, 0.6) });
  const frozen = interpolate(frame, [50, 60], [0, 1], clamp);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0e2a47",
        scale: interpolate(frame, [0, 90], [1.12, 1], { ...clamp, output: "perceptual-scale" }),
      }}
    >
      <svg width={1080} height={1920} viewBox="0 0 1080 1920">
        <defs>
          <pattern id="scales" width="70" height="44" patternUnits="userSpaceOnUse">
            <rect width="70" height="44" fill="#16406a" />
            <path d="M0 44 A35 35 0 0 1 70 44" fill="#2a679e" stroke="#9fd8ff" strokeOpacity="0.35" strokeWidth="2" />
            <path d="M-35 22 A35 35 0 0 1 35 22 M35 22 A35 35 0 0 1 105 22" fill="#215689" stroke="#cfeeff" strokeOpacity="0.3" strokeWidth="2" />
          </pattern>
          <radialGradient id="iris" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#e9f9ff" />
            <stop offset="0.45" stopColor="#8fd3ff" />
            <stop offset="0.85" stopColor="#2f7fc0" />
            <stop offset="1" stopColor="#0f3558" />
          </radialGradient>
          <radialGradient id="frostLight" cx="0.5" cy="0.45" r="0.6">
            <stop offset="0" stopColor="#ffd59a" stopOpacity="0.25" />
            <stop offset="1" stopColor="#000" stopOpacity="0" />
          </radialGradient>
          <clipPath id="eyeClip">
            <path d={EYE} />
          </clipPath>
          <filter id="soft">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="1080" height="1920" fill="url(#scales)" />
        <rect width="1080" height="1920" fill="url(#frostLight)" />

        {/* Brow ridge of ice spines */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path key={i} d={`M${200 + i * 120} 700 L${240 + i * 120} ${520 - (i % 2) * 60} L${290 + i * 120} 700 Z`} fill="#d9f1ff" opacity="0.75" />
        ))}

        <path d={EYE} fill="#081a2c" stroke="#bfe6ff" strokeWidth="10" filter="url(#soft)" />
        <g clipPath="url(#eyeClip)">
          <circle cx="540" cy="850" r="170" fill="url(#iris)" />
          <ellipse
            cx="540"
            cy="850"
            ry="150"
            rx={interpolate(frame, [0, 40], [10, 34], { ...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1) })}
            fill="#04101c"
          />
          <ellipse cx="610" cy="790" rx="34" ry="20" fill="white" opacity="0.85" />
          <circle cx="470" cy="900" r="10" fill="white" opacity="0.5" />
          {/* Eyelid closing at the end */}
          <rect
            x="200"
            width="700"
            height="420"
            fill="#1d4f80"
            y={interpolate(frame, [70, 88], [220, 640], { ...clamp, easing: Easing.bezier(0.6, 0, 0.4, 1) })}
          />
        </g>

        {/* The tear: a drop that freezes into an ice crystal as it falls */}
        <g transform={`translate(250 ${tearY})`}>
          <path d="M0 -26 C14 -6 18 6 18 14 A18 18 0 0 1 -18 14 C-18 6 -14 -6 0 -26 Z" fill="#dff4ff" opacity={1 - frozen} filter="url(#soft)" />
          <g opacity={frozen} transform={`rotate(${frozen * 45}) scale(${0.6 + frozen * 0.6})`}>
            <path d="M0 -26 L10 0 L0 26 L-10 0 Z M-26 0 L0 -10 L26 0 L0 10 Z" fill="white" filter="url(#soft)" />
          </g>
        </g>
      </svg>

      <Snow count={50} seed="eye" size={1.3} />
      <Vignette />

      <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-end", paddingBottom: 300 }}>
        <div
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 84,
            fontStyle: "italic",
            color: COLORS.frost,
            textShadow: `0 0 24px ${COLORS.ice}`,
            opacity: interpolate(frame, [38, 55], [0, 1], clamp),
          }}
        >
          She remembered.
        </div>
      </AbsoluteFill>
      <Grain />
    </AbsoluteFill>
  );
};
