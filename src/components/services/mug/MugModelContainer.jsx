import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MugModel } from "./MugModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const MugModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={15} adjustCamera={false}>
          <MugModel />
        </Stage>
        <OrbitControls target={[0, 0, 0]} enableZoom={false} autoRotate />
        <PerspectiveCamera position={[0, 0, 2]} zoom={1} makeDefault />

      </Suspense>
    </Canvas>
  );
};

export default MugModelContainer;
