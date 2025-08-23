import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Likebutton } from "./likebutton";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const likebuttoncontainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5}>
          <Likebutton />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
        <PerspectiveCamera position={[-1,0,1.8]} zoom={0.5} makeDefault/>
      </Suspense>
    </Canvas>
  );
};

export default likebuttoncontainer;
