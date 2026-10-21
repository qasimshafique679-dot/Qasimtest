import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { EyeScene } from "./scenes/EyeScene";
import { MemoryScene } from "./scenes/MemoryScene";
import { RevealScene } from "./scenes/RevealScene";

export const REVEAL_FRAMES = 225;
export const MEMORY_FRAMES = 75;
export const EYE_FRAMES = 90;
export const TOTAL_FRAMES = REVEAL_FRAMES + MEMORY_FRAMES + EYE_FRAMES;

export const Winterborn: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "black" }}>
    <Sequence name="Reveal" durationInFrames={225}>
      <RevealScene />
    </Sequence>
    <Sequence name="Memory" from={225} durationInFrames={75}>
      <MemoryScene />
    </Sequence>
    <Sequence name="Eye" from={300} durationInFrames={90}>
      <EyeScene />
    </Sequence>
  </AbsoluteFill>
);
