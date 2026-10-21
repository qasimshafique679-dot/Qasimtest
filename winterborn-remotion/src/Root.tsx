import { Composition, Folder } from "remotion";
import { EyeScene } from "./scenes/EyeScene";
import { MemoryScene } from "./scenes/MemoryScene";
import { RevealScene } from "./scenes/RevealScene";
import { EYE_FRAMES, MEMORY_FRAMES, REVEAL_FRAMES, TOTAL_FRAMES, Winterborn } from "./Winterborn";

const SIZE = { width: 1080, height: 1920, fps: 30 };

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Winterborn-Scenes">
        <Composition id="Reveal" component={RevealScene} durationInFrames={REVEAL_FRAMES} {...SIZE} />
        <Composition id="Memory" component={MemoryScene} durationInFrames={MEMORY_FRAMES} {...SIZE} />
        <Composition id="Eye" component={EyeScene} durationInFrames={EYE_FRAMES} {...SIZE} />
      </Folder>
      <Composition id="Winterborn" component={Winterborn} durationInFrames={TOTAL_FRAMES} {...SIZE} />
    </>
  );
};
