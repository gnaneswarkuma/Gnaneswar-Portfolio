/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/among_us.glb 
Author: Cesar_24 (https://sketchfab.com/Cesar_24)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/among-us-f391d46f6c814f85981ff0947b5bb68b
Title: Among Us
*/

import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from "three";
export function Amoung(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/models/among_us.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  console.log(props,actions.Walking)
  
  useEffect(() => {
  if (props.walk) {
    actions["Walking"].reset().play();
  }
  return () => {
    if (actions["Walking"]) {
      actions["Walking"].stop();
    }
  };

}, [props.walk]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="��liveArmature_54">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <group name="MainBody_51" />
                  <group name="Manos_52" />
                  <group name="Mochila_53" />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.MainplasticAlive} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.MainVidrio} skeleton={nodes.Object_8.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.MainBlack} skeleton={nodes.Object_9.skeleton} />
                  <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.MainplasticAlive} skeleton={nodes.Object_11.skeleton} />
                  <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Black} skeleton={nodes.Object_12.skeleton} />
                  <skinnedMesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.MainplasticAlive} skeleton={nodes.Object_14.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/among_us.glb')
