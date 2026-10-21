import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { COLORS, Grain, Snow, Vignette } from "../shared";

// The point where the man's hand touches the dragon's snout; the camera pulls back from here.
const FOCUS = { x: 430, y: 1335 };

const spines = new Array(9).fill(0).map((_, i) => {
  const x = 620 + i * 38;
  const y = 1302 - Math.sin((i / 8) * Math.PI) * 26;
  return `M ${x} ${y} L ${x + 12} ${y - 34 + i * 1.5} L ${x + 24} ${y} Z`;
});

export const RevealScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.night }}>
      <AbsoluteFill
        style={{
          transformOrigin: `${FOCUS.x}px ${FOCUS.y}px`,
          scale: interpolate(frame, [0, 210], [7, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.45, 0, 0.2, 1),
            output: "perceptual-scale",
          }),
        }}
      >
        <svg width={1080} height={1920} viewBox="0 0 1080 1920">
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0d2240" />
              <stop offset="0.45" stopColor="#3d5f8c" />
              <stop offset="0.62" stopColor="#f2a35e" />
              <stop offset="0.7" stopColor="#ffd59a" />
            </linearGradient>
            <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="#fff4d6" />
              <stop offset="0.25" stopColor="#ffc979" stopOpacity="0.9" />
              <stop offset="1" stopColor="#ff9a4a" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="snowGround" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#dcebf7" />
              <stop offset="1" stopColor="#7d9fc2" />
            </linearGradient>
            <linearGradient id="dragonBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3b7fbd" />
              <stop offset="0.6" stopColor="#1d4673" />
              <stop offset="1" stopColor="#c9e6ff" />
            </linearGradient>
            <linearGradient id="wing" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#a8dcff" stopOpacity="0.85" />
              <stop offset="1" stopColor="#2b6fa8" stopOpacity="0.9" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width="1080" height="1920" fill="url(#sky)" />
          <circle cx="760" cy="1180" r="260" fill="url(#sun)" />

          {/* Far ice peaks */}
          <path
            d="M0 1260 L120 1080 L210 1170 L330 960 L450 1140 L560 1030 L690 1190 L820 990 L940 1130 L1080 1040 L1080 1320 L0 1320 Z"
            fill="#6f8fb5"
            opacity="0.85"
          />
          <path d="M330 960 L370 1020 L345 1015 L320 1040 L300 1010 Z M820 990 L860 1050 L830 1040 L805 1060 L790 1030 Z" fill="#eef7ff" />
          {/* Near ridge */}
          <path d="M0 1340 L180 1230 L320 1300 L520 1210 L760 1320 L920 1250 L1080 1310 L1080 1420 L0 1420 Z" fill="#40618a" />
          {/* Frozen pines */}
          {[60, 130, 960, 1020].map((x, i) => (
            <path key={x} d={`M${x} ${1400 - i * 4} l22 -110 l22 110 Z`} fill="#22405f" />
          ))}

          <rect y="1400" width="1080" height="520" fill="url(#snowGround)" />

          {/* Dragon: tail, wing, body, neck, head, horns, spines */}
          <path d="M960 1395 C1040 1400 1080 1450 1020 1480 C980 1500 900 1480 880 1460" fill="none" stroke="#24578a" strokeWidth="34" strokeLinecap="round" />
          <path d="M640 1330 L720 1150 L800 1070 L860 1180 L950 1215 L905 1325 Z" fill="url(#wing)" />
          <path d="M720 1150 L770 1310 M800 1070 L820 1310 M860 1180 L860 1315" stroke="#e8f6ff" strokeWidth="3" opacity="0.6" />
          <ellipse cx="770" cy="1385" rx="235" ry="88" fill="url(#dragonBody)" />
          <path d="M600 1330 C640 1360 650 1410 620 1440 L560 1440 C590 1410 580 1380 560 1365 Z" fill="#285d93" />
          <path d="M430 1338 L468 1306 L560 1294 L612 1318 L612 1368 L520 1374 L442 1362 Z" fill="#2f6aa4" />
          <path d="M430 1338 L468 1306 L500 1302 L478 1340 L442 1362 Z" fill="#e2f2ff" opacity="0.9" />
          <path d="M560 1298 L630 1246 L578 1308 Z M578 1302 L652 1262 L594 1314 Z" fill="#f4f8ff" />
          {spines.map((d) => (
            <path key={d} d={d} fill="#bfe6ff" opacity="0.9" />
          ))}
          {/* Glowing frost veins */}
          <path d="M620 1360 L680 1372 L700 1400 M720 1350 L780 1365 L800 1395 L860 1400" stroke={COLORS.ice} strokeWidth="2.5" fill="none" filter="url(#glow)" />
          {/* Eye */}
          <ellipse cx="520" cy="1320" rx="9" ry="5" fill="#cfefff" filter="url(#glow)" />

          {/* Torvald: cloak, head, arm reaching to the snout */}
          <path d="M378 1282 L406 1282 L428 1432 L352 1432 Z" fill="#3a2a1f" />
          <path d="M370 1290 L414 1290 L420 1320 L364 1320 Z" fill="#6b5236" />
          <circle cx="392" cy="1266" r="15" fill="#2a1d14" />
          <path d="M404 1300 L430 1334" stroke="#3a2a1f" strokeWidth="9" strokeLinecap="round" />
        </svg>
      </AbsoluteFill>

      <Snow count={140} seed="reveal" />
      <Vignette />

      <AbsoluteFill style={{ alignItems: "center", paddingTop: 260 }}>
        <div
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 112,
            letterSpacing: 18,
            color: COLORS.frost,
            textShadow: `0 0 30px ${COLORS.ice}, 0 0 80px rgba(159,216,255,0.6)`,
            opacity: interpolate(frame, [140, 185], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [140, 200], ["0px 30px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          WINTERBORN
        </div>
      </AbsoluteFill>
      <Grain />
    </AbsoluteFill>
  );
};
