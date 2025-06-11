
import { Box, Sphere, useKeyboardControls } from "@react-three/drei"
import { useFrame,useThree } from "@react-three/fiber";
import { BallCollider, CapsuleCollider, RigidBody } from "@react-three/rapier"
import { useRef, useState } from "react";
import { Controls } from "three"
import { Amoung } from "./Among_us";
import * as THREE from "three";


const JUMP_FORCE=0.01  ;
const MOVEMENT_SPEED=0.001;
const MAX_VEL=0.3;

export const Character = ({charpos}) => {
    const { camera } = useThree();
    const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
    const leftPressed = useKeyboardControls((state) => state.left);
    const rightPressed = useKeyboardControls((state) => state.right);
    const backPressed = useKeyboardControls((state) => state.back);
    const forwardPressed = useKeyboardControls((state) => state.forward);
    const [walk,useWalk]=useState(false)
    const rigidbody = useRef();
    const onfloor=useRef(true);
    useFrame(() => {
        const impulse = { x: 0, y: 0, z: 0 };
        const linvel =rigidbody.current.linvel();
        
        let changeRotation =false;
        if (jumpPressed && onfloor.current) {impulse.y += JUMP_FORCE;onfloor.current=false;}
        if (rightPressed && linvel.x<MAX_VEL) {impulse.x += MOVEMENT_SPEED;changeRotation=true;}
        if (leftPressed && linvel.x>-MAX_VEL) {impulse.x -= MOVEMENT_SPEED;changeRotation=true;}
        if (backPressed && linvel.z<MAX_VEL) {impulse.z += MOVEMENT_SPEED;changeRotation=true;}
        if (forwardPressed && linvel.z>-MAX_VEL) {impulse.z -= MOVEMENT_SPEED;changeRotation=true;}
        const isMoving = Math.abs(linvel.x) > 0.001 || Math.abs(linvel.z) > 0.001;
        useWalk(isMoving);

        if (rigidbody.current) {  
            
            rigidbody.current.applyImpulse(impulse, true);
        }
        if(changeRotation){
            const angle=Math.atan2(linvel.x,linvel.z);
            chara.current.rotation.y=angle;
        }
        if (chara.current) {
            const characterWorldPosition = new THREE.Vector3();
            chara.current.getWorldPosition(characterWorldPosition);

            camera.position.lerp(
                new THREE.Vector3(characterWorldPosition.x, characterWorldPosition.y + 1, characterWorldPosition.z + 1.5),
                0.1 // Smooth transition
            );

            camera.lookAt(characterWorldPosition);
        }

      });
    const chara=useRef();
    return (
        <group>
            {/* <RigidBody ref={rigidbody} colliders="ball" position={[1.199, 5, -0.7]} onCollisionEnter={(e)=>{onfloor.current=true;console.log(e,"jijjii")}}>
                <group ref={chara}>
                    <Sphere args={[0.05]} castShadow receiveShadow>
                    <meshStandardMaterial color="orange" />
                </Sphere>
                </group>
            </RigidBody> */}
            <RigidBody colliders={false} ref={rigidbody} scale={[0.2,0.2,0.2]}  position={charpos} onCollisionEnter={(e)=>{onfloor.current=true;console.log(e,"jijjii")}} enabledRotations={[false,false,false]}>
                <CapsuleCollider  args={[0.5,0.4]} position={[0,1,0]}/>
                <group ref={chara} > 
                    <Amoung walk={walk}/>
                </group>
                
                
            </RigidBody>
        </group>
    );

};

