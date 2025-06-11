import { Box, Html, OrbitControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Mainmap } from "./Mainmap";
import { Character } from "./Character";
import { Maping } from "./Maping";



export const Experience = ({charpos}) => {
  return (
    <>
    <group position={[-5,0,2.5]}>
    <RigidBody type="fixed" colliders="trimesh">
      <Mainmap/>
      
    </RigidBody>
    </group> 
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} color="white"/>  
      <Character charpos={charpos}/>
      <Maping/>
    </>
  );
};
