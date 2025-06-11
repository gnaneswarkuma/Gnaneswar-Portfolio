import { Box, Html, OrbitControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import { useNavigate } from "react-router-dom";

const OverlayItem=({className,title,description,price,bgColor,...props})=>{
  const navigate = useNavigate();
  return (<>
    <Html>
      <div style={{color:"white",width:"200px"}}>
        <button style={{ width:"110px",color:"white",backgroundColor:"transparent",borderRadius:"52px"}} onClick={() =>{if(title!="home"){navigate(`/${title}`)}}}><h2>{title}</h2></button>
      </div>
    </Html>
    </>
  )
}

export const Maping=()=>{
    

   return(<>
   <group position={[0.4,0.5,1]} >
    <OverlayItem title={"projects"}/>
    </group>
    <RigidBody  colliders="cuboid" name="projects" position={[0.4,0.51,1]} >
      <Box args={[0.1,0.1,0.1]}>
        <meshStandardMaterial color="red" />
      </Box>
    </RigidBody>
    


    <RigidBody  colliders="cuboid"  position={[-1,0.51,0.5]}>
      <Box args={[0.1,0.1,0.1]}>
        <meshStandardMaterial color="gray" />
      </Box>
    </RigidBody>

    
    <group position={[-0.9,0.3,-0.75]} >
    <OverlayItem title={"about"}/>
    </group>
    <RigidBody  colliders="cuboid" name="about" position={[-0.85,0.51,-0.65]}>
      <Box args={[0.1,0.1,0.1]}>
        <meshStandardMaterial color="white" />
      </Box>
    </RigidBody>


    <group position={[0.5,0.3,-2]} >
    <OverlayItem title={"home"}/>
    </group>
    <RigidBody  colliders="cuboid" name="home" position={[0.5,0.5,-2]}>
      <Box args={[0.1,0.1,0.1]}>
        <meshStandardMaterial color="rgb(60, 96, 125)" />
      </Box>
    </RigidBody>
    <RigidBody  colliders="cuboid" position={[2,0.51,1.8]}>
      <Box args={[0.1,0.1,0.1]}>
        <meshStandardMaterial color="rgb(38, 64, 86)" />
      </Box>
    </RigidBody>
    <RigidBody  colliders="cuboid"  position={[-4.05,0.51,-0.56]}>
      <Box args={[0.1,0.1,0.1]}>
        <meshStandardMaterial color="rgb(116, 139, 157)" />
      </Box>
    </RigidBody>


    <group position={[4.4,0.3,-1]} >
    <OverlayItem title={"contact"}/>
    </group>
    <RigidBody  colliders="cuboid" name="contacts" position={[4.4,0.51,-1.15]}>
      <Box args={[0.1,0.1,0.1]}>
        <meshStandardMaterial color="rgb(60, 96, 125)" />
      </Box>
    </RigidBody>
    <RigidBody  colliders="cuboid" position={[1.75,0.5,0.25]}>
      <Box args={[0.1,0.1,0.1]}>
        <meshStandardMaterial color="rgb(184, 203, 218)" />
      </Box>
    </RigidBody></>)
}