import { Suspense, useState } from 'react'
import './App.css'
import { Home } from './Home'
import { Experience } from './components/Experience'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Environment, KeyboardControls, OrbitControls } from "@react-three/drei"
import { Mainmap } from './components/Mainmap'
import { useMemo } from "react"
const Controls={
    forward:"forward",
    back:"back",
    left:"left",
    right:"right",
    junp:"jump",
};
function App() {
  const [charpos,setCharpos]=useState([0.5,0.5,-1.7])
 const map = useMemo(() => [
  { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
  { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
  { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
  { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
  { name: Controls.jump, keys: ["Space"] },
], []);
  return (
  <div className='app'>
  <div style={{
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
    gap:"40px",     
    backgroundColor: "transparent",
    padding: "10px",
    borderRadius: "5px",
    position:"absolute",
    zIndex:"10",
    width:"100vw",
    color:"silver"
  }}>
    <h1 style={{backgroundColor:"transparent", borderRadius:"20px", width:"150px",display:"flex",alignItems:"center",justifyContent:"center", cursor: "pointer" }} onClick={() =>setCharpos([0.5,0.3,-1.7])}>Home</h1>
    <h1 style={{backgroundColor:"transparent", borderRadius:"20px", width:"150px",display:"flex",alignItems:"center",justifyContent:"center", cursor: "pointer" }} onClick={() =>setCharpos([-1.25,0.3,-1.0])}>About</h1>
    <h1 style={{backgroundColor:"transparent", borderRadius:"20px", width:"150px",display:"flex",alignItems:"center",justifyContent:"center", cursor: "pointer" }} onClick={() =>setCharpos([0.4,0.3,0.5])}>Projects</h1>
    <h1 style={{backgroundColor:"transparent", borderRadius:"20px", width:"150px",display:"flex",alignItems:"center",justifyContent:"center", cursor: "pointer" }} onClick={() =>setCharpos([4.4,0.3,-0.65])}>Contact</h1>
  </div>
      <KeyboardControls map={map}>
       <Canvas shadows camera={{position:[0,0,10],fov:30}}>
        <color attach="background" args={["black"]}/>
        <Suspense>
          <Physics >
            <Experience charpos={charpos}/>
          </Physics>
        </Suspense>
       
      </Canvas>
      </KeyboardControls>
    </div>
  )
}

export default App
